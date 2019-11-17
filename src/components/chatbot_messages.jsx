import React from 'react';


const Message = (props)=> {
    return(
        <div class="container-fluid" >
            
                    {props.speaks==='bot' && 
                    <div className="card bg-info"  style={{position:"left",display:"flex", margin: 0, paddingBottom: '5%', paddingTop: '5%', height: '90%', textAlign: 'auto', alignSelf: 'stretch', display:"flex"}}>
                
                        <div className="row" style={{margin: 0, paddingLeft: '2%', paddingRight: '2%', width: '96%',paddingBottom: '2%', paddingTop: '2%', height: '96%', position:"center" }}>
                            <div className="col-sm-3"  style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <div className="card text-black bg-white mb-3" style={{textAlign: "center", minWidth: 50}}>{props.speaks}</div>
                            </div>
                            <div className="col-sm-9" style={{paddingBottom: '2%', paddingTop: '2%', height: '96%'}}>
                                <div className="text-white" style={{paddingBottom: '2%', paddingTop: '2%', height: '96%'}}>
                                    {props.text}
                                </div>
                             </div>
                        </div>
                    </div>
                    }
                    
                    {props.speaks==='me' &&
                    <div className="card bg-white text-dark" style={{position:"right",display:"flex",margin: 0, paddingBottom: '5%', paddingTop: '5%', height: '90%', textAlign: 'auto', alignSelf: 'stretch', display:"flex"}}>
                        <div className="row" style={{margin: 0, paddingLeft: '2%', paddingRight: '2%', width: '96%',paddingBottom: '2%', paddingTop: '2%', height: '96%', position:"center" }}>
                            <div className="col-sm-9" style={{paddingBottom: '2%', paddingTop: '2%', height: '96%'}}>
                                <div className="black-text" style={{paddingBottom: '2%', paddingTop: '2%', height: '96%'}}>
                                    {props.text}
                                </div>
                             </div>
                            <div className="col-sm-3" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                <div className="card text-white bg-dark mb-3" style={{textAlign: "center", minWidth: 50}}>{props.speaks}</div>
                            </div>
                        </div>
                    </div>
                    }


        </div>
    )
}

export default Message;