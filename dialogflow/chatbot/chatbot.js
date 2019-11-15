'use-strict'
const dialogflow= require('dialogflow');
const config = require('../config/keys.js')
const structjson = require('./structjson.js');

const projectID = config.googleProjectID
const sessionID = config.dialogFlowSessionID

const credentials = {
    client_email: config.googleClientEmail,
    private_key: config.googlePrivateKey
}

const sessionClient = new dialogflow.SessionsClient({projectID, credentials});
//const sessionPath = sessionClient.sessionPath(projectID, sessionID);

module.exports = {
    textQuery: async function(text, userID, parameteres = {}){
        let sessionPath = sessionClient.sessionPath(projectID, sessionID+userID);
        let self = module.exports
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: text, //req.body.text,
                    languageCode: config.dialogFlowSessionLanguageCode
                }
            },
            queryParams:{
                payload: {
                    data:parameteres
                }
            }
        };
        let responses = await sessionClient.detectIntent(request)
        responses = await self.handleAction(responses)
        return responses
    },

    eventQuery: async function(event, userID, parameters = {}) {
        let sessionPath = sessionClient.sessionPath(projectID, sessionID+userID);
        let self = module.exports;
        const request = {
            session: sessionPath,
            queryInput: {
                event: {
                    name: event,
                    parameters: structjson.jsonToStructProto(parameters), //Dialogflow's v2 API uses gRPC. You'll need a jsonToStructProto method to convert your JavaScript object to a proto struct.
                    languageCode: config.dialogFlowSessionLanguageCode
                },
            }
        }
        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses);
        return responses;
    },
    handleAction: function(responses){
        return responses
    }
}