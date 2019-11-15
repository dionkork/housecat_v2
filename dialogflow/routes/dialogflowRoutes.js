    const chatbot= require('../chatbot/chatbot.js')
    var landlord=null
    module.exports = app =>{

        app.post('/df_text_query', async (req,res)=> {
            
            let responses = await chatbot.textQuery(req.body.text, req.body.userID, req.body.paremeteres)
            res.send(responses[0].queryResult)
            if (responses[0].queryResult.parameters.fields['Landlord'] != undefined){
                console.log(responses[0].queryResult.parameters.fields['Landlord'].stringValue)
                landlord='landlord'
            }else{
                console.log('nope')
            }
            

        })
        
        app.post('/df_event_query', async (req,res)=> {
            
            let responses = await chatbot.eventQuery(req.body.event, req.body.userID, req.body.paremeteres)
            res.send(responses[0].queryResult)
        })

        
    }
    module.exports.Landlord=landlord