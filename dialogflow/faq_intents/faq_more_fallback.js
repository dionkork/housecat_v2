exports.faq_more_fallback = function(agent){
    var response = ('What ? I didnt get you. Please answer with "yes" or "no" to the question.')
    console.log('Garfield: '+response)
    agent.add(response)
}
