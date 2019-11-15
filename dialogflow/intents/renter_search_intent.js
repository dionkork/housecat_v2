exports.renter_search=function(agent){
    var r_item= require('../functions/random_item.js')
    
    var search_responses=['Ok. Tell me what are you looking for ?',
                          'Perfect, tell me what are you looking for ?',
                          'Alright, what are you looking for ?',
                          'What are you searching for ?',
                          'What is that you are searching for ?']
    
    var myr_item=r_item.random_item(search_responses)
    
    agent.add(myr_item)
    console.log("Mike: " +myr_item)
} 