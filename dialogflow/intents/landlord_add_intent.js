exports.landlord_add=function(agent){
    var r_item= require('../functions/random_item.js')
    
    var add_responses=['Ok. Let me redirect you to your page!',
                       'Perfect, I will now redirect you to your page.',
                       'Alright, your page will redirect.',
                       'Let me redirect to the page.']
    
    var myr_item=r_item.random_item(add_responses)
    
    agent.add(myr_item)
    console.log("Mike: " +myr_item)

    var add_redirect= true
    module.exports.add_redirect=add_redirect
} 