exports.front_handle_intents = function(res){
    var delete_messages=false
    var next_event=null;

    if (res.data.intent.displayName === 'FAQ 1 Intent - yes'){
        window.location = "/add";
    }
    if (res.data.intent.displayName === 'FAQ 2 Intent - yes'){
        window.location = "/search";
    }
    if (res.data.intent.displayName === 'FAQ 2 Intent - no thanks'){
        next_event='end_intent'
    }
    if (res.data.intent.displayName === 'End Intent'){
        console.log("END INTENT")
        delete_messages=true;
    }
    
    module.exports.next_event=next_event
    module.exports.delete_messages=delete_messages
}