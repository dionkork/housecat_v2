exports.new_renter = function(responses, init_params){

    this_params=init_params
    var parameters = responses.outputContexts[0].parameters.fields
    //console.log(JSON.stringify(parameters))    
    
    this_params.sale_type=parameters.SaleType.stringValue
    this_params.location=parameters.City.stringValue
    this_params.property_type=parameters.HouseType.stringValue

    module.exports.final_params=this_params
}