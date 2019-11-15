exports.welcome=function(agent){
    var r_item= require('../functions/random_item.js')
    
    var welcome_responses=['Hi! Please tell me are you a landlord or a tenant?',
                           'Hello! Are you a property owner or are you searching for a property?',
                           'Good day! In order to help you please tell me are you a householder or a renter?',
                           'Greetings! To provide you my service first tell me if you are a homeowner or you want to be an occupant?',
                           'Bonjur! Help me assist you by telling me if tou are an owner or an occupant.']
    
    var myr_item=r_item.random_item(welcome_responses)
    
    agent.add(myr_item)
    console.log("Mike: " +myr_item)
} 