exports.landlord_ask=function(agent){
    var r_item= require('../functions/random_item.js')
    
    var ask_responses=['Ok. Tell me what the question is?',
                       'Perfect, tell me what is conserning you?',
                       'Alright, what is your question ?',
                       'I am all ears, what is your question ?',
                       'What would you like to ask?']
    
    var myr_item=r_item.random_item(ask_responses)
    
    agent.add(myr_item)
    console.log("Mike: " +myr_item)
} 