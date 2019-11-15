exports.bedrooms_and_bathrooms = function (agent){
    const bedrooms = agent.parameters['bedrooms']  
    const bathrooms = agent.parameters['bathrooms']
    const bedroomsNumber = agent.parameters['number'];
    const bathroomsNumber = agent.parameters['number1'];
    const gotBedroomsNumber = bedroomsNumber > 0;
    const gotBathroomsNumber = bathroomsNumber > 0;
    const gotBedrooms = bedrooms.length > 0;
    const gotBathrooms = bathrooms.length > 0;
    console.log(JSON.stringify(bedroomsNumber))

    if(gotBathroomsNumber && gotBathrooms && gotBedroomsNumber && gotBedrooms) { 

        agent.add(`Nice, you want ${bathroomsNumber} bathrooms and ${bedroomsNumber} bedrooms`);
        console.log(JSON.stringify(bedroomsNumber))
        userBedrooms = bedroomsNumber
        userBathrooms = bathroomsNumber
        module.exports.userBedrooms = userBedrooms;
        module.exports.userBathrooms = userBathrooms;

    } else if (gotBathroomsNumber && gotBathrooms && !gotBedroomsNumber && !gotBedrooms){

        agent.add(`Nice, you want ${bathroomsNumber} bathrooms`);
        console.log(JSON.stringify(bathroomsNumber))
        userBathrooms = bathroomsNumber
        module.exports.userBathrooms = userBathrooms;

    } else if(gotBedroomsNumber && gotBedrooms && !gotBathroomsNumber && !gotBathrooms){
        agent.add(`Nice, you want ${bedroomsNumber} bedrooms`)
        userBedrooms = bedroomsNumber
        module.exports.userBedrooms = userBedrooms;
    }
    
}