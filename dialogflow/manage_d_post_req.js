exports.dialogflow_post_requests = function(app, express, {WebhookClient, Card, Suggestion}){

    app.post('/dialogflow', express.json(), (req,res)=> {
        
        console.log('')
        console.log('New Post : ')
        console.log('')

        const agent= new WebhookClient({request: req, response: res})
        
        const welcome_intent = require('./intents/welcome_intent.js')
        const fallback_intent = require('./intents/fallback_intent.js')
        const landlord_intent=require('./intents/landlord_intent.js')
        const renter_intent = require('./intents/renter_intent.js')
        
        const landlord_ask_intent=require('./intents/landlord_ask_intent.js')
        const landlord_add_intent= require('./intents/landlord_add_intent.js')

        const faq1_intent=require('./faq_intents/faq1_intent.js')
        const faq1_yes_intent=require('./faq_intents/faq1_yes_intent.js')
        const faq1_no_intent=require('./faq_intents/faq1_no_intent.js')
        const faq1_fallback_intent=require('./faq_intents/faq1_fallback.js')

        const faq_more_intent=require('./faq_intents/faq_more.js')
        const faq_more_yes_intent=require('./faq_intents/faq_more_yes.js')
        const faq_more_no_intent=require('./faq_intents/faq_more_no.js')
        const faq_more_fallback_intent=require('./faq_intents/faq_more_fallback.js')

        const locate_intent = require('./intents/locate_intent.js')
        const price_intent = require('./intents/price_intent.js')
        const sqm_intent = require('./intents/sqm_intent.js')
        const bedrooms_and_bathrooms_intent = require('./intents/bedrooms_and_bathrooms_intent.js')

        const intents_parser = require('./functions/intents_parser.js')
        const initialize_parameters = require('./functions/initialize_parameters.js')
        
        //Initialize some parameters
        var user_type
        let add_redirect = false;

        //landlord_intent.user_type = null
        //renter_intent.user_type = null

        var init_params = initialize_parameters.initialize_parameters(); //Call jsFunction that initializes the parameters

        let intentMap = new Map()
        intentMap.set('Default Welcome Intent', welcome_intent.welcome)
        intentMap.set('Default Fallback Intent', fallback_intent.fallback)
        intentMap.set('Renter Intent', renter_intent.usertype)
        intentMap.set('Landlord Intent', landlord_intent.usertype)
        
        intentMap.set('Landlord Intent - ask', landlord_ask_intent.landlord_ask)
        intentMap.set('Landlord Intent - add', landlord_add_intent.landlord_add)

        intentMap.set('Locate Intent', locate_intent.locate)
        intentMap.set('define_building_type', locate_intent.locate)
        intentMap.set('Location and Price Declaration', price_intent.price) 
        intentMap.set('Square Meters Intent', sqm_intent.sqm)
        intentMap.set('Bathrooms and Bedrooms Intent', bedrooms_and_bathrooms_intent.bedrooms_and_bathrooms)

        intentMap.set('FAQ 1 Intent', faq1_intent.faq1)
        intentMap.set('FAQ 1 Intent - yes', faq1_yes_intent.faq1_yes)
        intentMap.set('FAQ 1 Intent - no', faq1_no_intent.faq1_no)
        intentMap.set('FAQ 1 Intent - fallback', faq1_fallback_intent.faq1_fallback)
        
        intentMap.set('FAQ more', faq_more_intent.faq_more)
        intentMap.set('FAQ more - yes', faq_more_yes_intent.faq_more_yes)
        intentMap.set('FAQ more - no', faq_more_no_intent.faq_more_no)
        intentMap.set('FAQ more - fallback', faq_more_fallback_intent.faq_more_fallback)

        if (landlord_intent.user_type==='landlord'){
            res.redirect('https://www.google.com/')
            console.log('REDIRECT')
        }else{
            agent.handleRequest(intentMap)
        }

        if (landlord_intent.user_type != null){
            user_type=landlord_intent.user_type
        }else if (renter_intent.user_type != null){
            user_type=renter_intent.user_type
        }else{
            user_type= null
        }
        
        if (landlord_add_intent.add_redirect){
            add_redirect=landlord_add_intent.add_redirect
            console.log('USER wants to redirect.')
        }
       
        console.log("We got the UserType: "+ user_type)
        module.exports.user_type = user_type
        module.exports.add_redirect = add_redirect

        if(locate_intent.userLocation != null){
            init_params.location = locate_intent.userLocation
        }
        init_params.price = price_intent.price

        var final_params = intents_parser.intents_parser(init_params); //Console log the parameters
        //console.log("FINAL RESULT "+JSON.stringify(final_params))

    })


}