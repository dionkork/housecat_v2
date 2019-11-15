exports.fallback = function(agent){
    var r_item= require('../functions/random_item.js')


    var fallback_responses= ["I didn't understand what you mean, please try again.",
                             "Sorry i didn't get what you say, can you try this again?",
                             "Can you please repeat the message, i didn't get you.",
                             "Sorry mate can you repeat the last message?"]
    
    var myr_item=r_item.random_item(fallback_responses)
    

    agent.add(myr_item)
    console.log("Mike: " +myr_item)
}
