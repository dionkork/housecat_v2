exports.price = function (agent){
    const price = JSON.stringify(agent.parameters['unit-currency']); //SET a var and stringify the json of the parameter "unit-currency"
    const unit_currency = JSON.parse(price); //SET a var and make a js Obj of the variable price
    const gotPrice = unit_currency.amount > 0;
    
    if(gotPrice) {

        agent.add(`Nice, the price should be ${unit_currency.amount} ${unit_currency.currency}`);
        userPrice = unit_currency.amount
        module.exports.userPrice = userPrice;

    } else {
        agent.add(`You cant rent a house if you dont have money ${unit_currency.amount} ${unit_currency.currency}`);
    }
    
}