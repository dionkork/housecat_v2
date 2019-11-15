exports.faq1_fallback = function(agent){
    var response = ('What ? I didnt get you. Please answer with "yes please" or "no thanks" to the question.')
    console.log('Garfield: '+response)
    agent.add(response)
}
