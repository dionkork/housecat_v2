exports.sqm = function (agent){
    const sqm = JSON.stringify(agent.parameters['unit-area']); //SET a var and stringify the json of the parameter "unit-area"
    const unit_area = JSON.parse(sqm); //SET a var and make a js Obj of the variable sqm
    const gotSqm = unit_area.amount > 0;
    console.log(unit_area.amount);
    
    if(gotSqm) {

        agent.add(`Nice, the ${unit_area.unit} should be ${unit_area.amount} `);
        userSqm = unit_area.amount
        module.exports.userSqm = userSqm;

    } else {
        agent.add(`You cant rent a house with ${unit_area.amount} ${unit_area.unit}`);
    }
    
}