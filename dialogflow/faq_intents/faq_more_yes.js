exports.faq_more_yes = function(agent){
    var r_item= require('../functions/random_item.js')
    
    var yes_responses=['Ok this is the page. You can fill the information and we will contact you soon.',
                       'Perfect here is the page. You can fill the information and we will contact you soon.']
    
    var myr_item=r_item.random_item(yes_responses)
    
    agent.add(myr_item)
    console.log("Garfield: " +myr_item)
}
