import React, { Component } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import uuid from 'uuid';

import Message from "./chatbot_messages";

const cookies = new Cookies();

class Chatbot extends Component {
  messagesEnd;
  constructor(props){
    super(props)
    this._handleInputKeyPress = this._handleInputKeyPress.bind(this);
    this._handleQuickReplyPayload = this._handleQuickReplyPayload.bind(this);

    this.hide = this.hide.bind(this);
    this.show = this.show.bind(this);
    this.state={
      messages: [],
      showBot: false
    }

    if (cookies.get('userID') === undefined){
      cookies.set('userID', uuid(), {path: '/'});
    }
    
  }
  async df_text_query(queryText){
    let says = {
      speaks: 'me',
      msg: {
        text: {
          text: queryText
        }
      } 
    };

    this.setState({messages: [...this.state.messages, says]});
    const res = await axios.post('http://localhost:8000/df_text_query', {text: queryText, userID: cookies.get('userID')});
    console.log(res.data.intent.displayName)
    for (let msg of res.data.fulfillmentMessages){
      says = {
        speaks: 'bot',
        msg: msg
      }
      this.setState({messages: [...this.state.messages, says]});
    }
    if (res.data.intent.displayName === 'FAQ 1 Intent - yes'){
      window.location = "/buy";
    }

  }
  async df_event_query(eventName){

    const res = await axios.post('http://localhost:8000/df_event_query', {event: eventName, userID: cookies.get('userID')});

    for (let msg of res.data.fulfillmentMessages){
      let says = {
          speaks: 'bot',
          msg: msg
      }
      this.setState({messages: [...this.state.messages, says]})
    }
  }
  
  myFunction() {
    //var popup = document.getElementById("myPopup");
    //popup.classList.toggle("show");
  }

  componentDidMount(){
        this.df_event_query('Welcome')
  }

  componentDidUpdate(){
      this.messagesEnd.scrollIntoView({behaviour: "smooth"})
  }

  renderMessages(stateMessages){
    if (stateMessages){
      return stateMessages.map((message, i)=>{
        return <Message key={i} speaks={message.speaks} text={message.msg.text.text} />
      })
    }else{
        return null
    }
  }

  show() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    this.setState({showBot: true});
  }

  hide() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    this.setState({showBot: false});
  }

  _handleInputKeyPress(e) {
    if (e.key === 'Enter') {
        this.df_text_query(e.target.value);
        e.target.value = '';
    }

  }

  _handleQuickReplyPayload(event, payload, text) {
    event.preventDefault();
    event.stopPropagation();

    this.df_text_query(text);

  }

  render() {
    var mybuttonFunction
    console.log(this.state.showBot)

    if (this.state.showBot){
        mybuttonFunction=this.myFunction
    }else{
        mybuttonFunction=this.show
    }
    return (
      <React.Fragment>
        <button
          className="btn btn-dark popup"
          onClick={mybuttonFunction}
        >
          Need help?
          <span className="popuptext" id="myPopup">

            <div className="card mb-2 bg-light text-dark" style={{ minHeight: 500, maxHeight: 500, width:400, position:'fixed', bottom: 0, right: 0, border: '1px solid lightgray'}}>
              <div className="card-header bg-dark text-light" id="chatbot" >
                <div className="row">
                  <div className="col-sm-4">
                    <img  src="https://yt3.ggpht.com/a/AGF-l7_5_gsypJpmcfZFJlo7QlWEGHixtwrEuzgEaw=s900-c-k-c0xffffffff-no-rj-mo" class="img-fluid" alt="Responsive image"/>
                  </div>
                  <div className="col-sm-7 bg-black text-white" style={{textAlign: 'center'}}>
                    <h5>Chatbot </h5>
                    <p>Hello mortal,  I am Garfield and I am here to help you find a house. Say hi I don't bite.</p>
                  </div>
                  <div className="col-sm-1">
                    <button type="button" className="close text-white" aria-label="Close" onClick={this.hide}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body" style={{ minHeight: 335, maxHeight: 335, width:'100%', overflow: 'auto'}} >
              <div className="row">
                <div className="col">
                 <div className="row" style={{margin: 0, paddingBottom: '2%', paddingTop: '2%', height: '96%'}}>
                    {this.renderMessages(this.state.messages)}
                    <div  ref={(el)=> {this.messagesEnd = el;}} 
                        style={{float: 'left', clear: "both"}}>
                    </div>
                  </div>                    
                                
                </div>
              </div>
              <div className="row" >
                    <input style={{margin: 0, paddingLeft: '1%', paddingRight: '1%', width: '98%', paddingBottom: '2%', paddingTop: '2%', height: '96%'}} ref={(input) => { this.talkInput = input; }} placeholder="type a message:"  onKeyPress={this._handleInputKeyPress} id="user_says" type="text" />
                  </div>  
            </div>
            </div>
            
            {/*
            <iframe
              width="350"
              height="430"
              allow="microphone;"
              src="https://console.dialogflow.com/api-client/demo/embedded/d810e43a-fb4a-49e6-991b-3a00776f968a"
            ></iframe>
            */}

          </span>
        </button>
      </React.Fragment>
    );
  }
}

export default Chatbot;
