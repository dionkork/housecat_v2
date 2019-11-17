exports.dialogflow2_post_requests = function(app, express){
    const chatbot= require('../chatbot/chatbot.js')
    const handle_intents=require('../intents/handle_my_intents.js')
    //module.exports = app =>{

    app.post('/df_text_query', async (req,res)=> {
        var landlord=null
        let responses = await chatbot.textQuery(req.body.text, req.body.userID, req.body.paremeteres)
        
        handle_intents.handle_my_intents(responses[0].queryResult)
        console.log(JSON.stringify(handle_intents.final_params))

        res.send(responses[0].queryResult)
        

        if (responses[0].queryResult.parameters.fields['Landlord'] != undefined){
            console.log(responses[0].queryResult.parameters.fields['Landlord'].stringValue)
            landlord='landlord'
        }else{
            console.log('nope')
        }
        
        module.exports.UserType=landlord
    })
    
    app.post('/df_event_query', async (req,res)=> {
        
        let responses = await chatbot.eventQuery(req.body.event, req.body.userID, req.body.paremeteres)
        res.send(responses[0].queryResult)
    })

        
}
    