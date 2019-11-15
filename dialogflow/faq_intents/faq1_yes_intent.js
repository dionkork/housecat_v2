exports.faq1_yes = function(agent){
    var r_item= require('../functions/random_item.js')
    
    var yes_responses=['Ok this is the page.',
                       'Perfect here is the page.']
    
    var myr_item=r_item.random_item(yes_responses)
    
    agent.add(myr_item)
    console.log("Garfield: " +myr_item)
    
    agent.setFollowupEvent('faq_more')
}
