exports.usertype = function(agent){
    var r_item= require('../functions/random_item.js')

    let user_type = null
    let user_type_var = null

    const landlord = agent.parameters['Landlord']


    if (landlord.length>0){
        user_type = 'landlord'
        user_type_var = landlord
    }
    var usertype_responses=[`Ok so you are ${user_type_var} then.`,
                            `I got it you are ${user_type_var} then.`,
                            `I understand that you are ${user_type_var} then.`,
                            `I confirm that you are ${user_type_var}.`,
                            `Perfect! So you are ${user_type_var}.`]
    
    var myr_item=r_item.random_item(usertype_responses)

    var message
    
    if (user_type==='landlord'){
        message='Would you like to ask a question or add a house/apartment?'
    }
    console.log("Mike:" + myr_item + ' ' + message)
    //agent.add(myr_item + ' ' + message)

    module.exports.user_type = user_type   
}