import React from 'react';


const Message = (props)=> {
    return(
        <div class="container-fluid">
            <div className="card bg-white text-dark" style={{margin: 0, paddingBottom: '5%', paddingTop: '5%', height: '90%'}}>
                <div className="row">
                    {props.speaks==='bot' &&
                    <div className="col-sm-3">
                    <a href="/">
                        <div className="card text-white bg-dark mb-3">{props.speaks}</div>
                    </a>
                    </div>
                    }
                    <div className="col-sm-9">
                      <span className="black-text">
                        {props.text}
                      </span>
                    </div>
                    {props.speaks==='me' &&
                    <div className="col">
                        <a href="/">
                            <div className="card text-white bg-dark mb-3">{props.speaks}</div>
                        </a>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Message;