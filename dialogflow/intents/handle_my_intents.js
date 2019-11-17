exports.handle_my_intents = function(responses){

    const new_renter_intent = require('./new_renter_intent');
    const initialize_parameters = require('../functions/initialize_parameters.js')

    var init_params = initialize_parameters.initialize_parameters();
    var mycase = responses.intent.displayName
    
    console.log(mycase)
    if (mycase ==='Renter Intent - got housetype - got saletype - got location - yes'){
          console.log('Got this far')
          new_renter_intent.new_renter(responses, init_params)
          init_params=new_renter_intent.final_params
    }

    module.exports.final_params = init_params
}