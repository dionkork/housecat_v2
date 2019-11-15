exports.locate = function (agent){
      
    const location = agent.parameters['City'];
    const gotLocation = location.length > 0;

    if(gotLocation) {
        agent.add(`Nice, you want your search in ${location}`);
        console.log(JSON.stringify(location))

        userLocation = location

        module.exports.userLocation = userLocation;
    } 
    
}