exports.faq1 = function(agent){
    var response = ('It is pretty easy actually. Eather you can go and click to our ADD button on the left side of our navigation bar or I can redirect you to the page. Would you like me to do that?')
    console.log('Garfield: '+response)
    //agent.add(response)
    const {Card, Suggestion, RichResponse } = require('dialogflow-fulfillment');
    //test:
    //let card = new Card('Title')
    //card.setTitle('sample card title')
    //card.setText('sample card body text')
    //card.setImage('https://assistant.google.com/static/images/molecule/Molecule-Formation-stop.png');
    //card.setButton({ text: 'button text', url: 'https://assistant.google.com/' });
    //card.setPlatform(PLATFORMS.ACTIONS_ON_GOOGLE)

    //let richResponse = new RichResponse()
    //richResponse.setPlatform(PLATFORMS.ACTIONS_ON_GOOGLE)
    
    //agent.add(card)
   
    
}
