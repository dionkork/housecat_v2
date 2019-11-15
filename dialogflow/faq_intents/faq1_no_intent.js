exports.faq1_no = function(agent){
   
    var no_response=['If you need anything else please feel free to contact me again. Good bye.']
    
    agent.add(no_response)
    console.log("Garfield: " +no_response)
    agent.setFollowupEvent('faq_more')
}
