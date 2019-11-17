const express = require('express');
var cors = require('cors');
const mysql = require('mysql');
//Required of Dialogflow
const { WebhookClient, Card, Suggestion } = require('dialogflow-fulfillment');
const bodyParser = require('body-parser');


var app = express();
var port = process.env.PORT || 8000;

app.use(cors());

//This is necessary for method post
app.use(express.json());

//Managing post requests from DialogFlow
app.use(bodyParser.json());
var dialogflow2 = require('./dialogflow/routes/dialogflowRoutes.js')
dialogflow2.dialogflow2_post_requests(app, express)
//var myminitest = require('./dialogflow/routes/dialogflowRoutes.js')(app)
var dialogflowapp = require('./dialogflow/manage_d_post_req.js')
dialogflowapp.dialogflow_post_requests(app, express, {WebhookClient, Card, Suggestion})


var con = mysql.createConnection({
    host: "remotemysql.com",
    port: 3306,
    user: "CGPAsYo0rq",
    password: "Jymm1CJFkh",
    database: "CGPAsYo0rq"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected to DB");
});

app.get('/',(req,res) => {
    res.send('*ROOT ENDPOINT* API is up & working.');
});

app.get('/api',(req,res) => {
    res.send('API is up & working.');
});

// Returns the userType defined by the chatbot
app.get('/api/usertype',(req,res) => {
    res.send(dialogflow2.UserType)
    /*if (dialogflowapp.user_type==='landlord'){
        res.send({userType: "Landlord"});
    }else if (dialogflowapp.user_type==='renter'){
        res.send({userType: "Renter"});
    }
    else{
        res.send({userType: "UNKNOWN"});
    }
    */
});

//Insert new json item into DB
app.post('/api/addproperty',(req,res) => {
    var property = req.body;
    con.query(`INSERT INTO properties (price,sqm,location,bedrooms,bathrooms,property_type,floor,description,sale_type,phone,email,img_url,furnitured,heating_type,built_year,parking)
    VALUES (${property.price},${property.sqm},'${property.location}',${property.bedrooms},${property.bathrooms},${property.property_type},${property.floor},NULLIF('${property.description}','null'),${property.sale_type},'${property.phone}','${property.email}',NULLIF('${property.img_url}','null'),${property.furnitured},'${property.heating_type}',${property.built_year},${property.parking})`, function (err, result, fields){
        if(err) throw err;
        res.send("Your house has been added successfully into DB!");
    });
    
})

//Returns the list of properties from the database
app.get('/api/properties',(req,res) => {
    con.query("SELECT * FROM properties ORDER BY id;", function (err, result, fields) {
      res.redirect('https://www.google.com/')
      //if (err) throw err;
      //res.send(result);
    }); 
});


//Returns the property with this ID
app.get('/api/properties/id=:id',(req,res) => {
    con.query(`SELECT * FROM properties WHERE id=${parseInt(req.params.id)}`, function (err, result, fields) {
        if (err) throw err;
        if(isEmptyObject(result)) return res.status(404).send('There is no property with this id');
        res.send(result);
    });
});

//Returns properties with this sale_type. Used when user clicks on "Rent" or "Buy" button.
app.get('/api/properties/saletype=:saletype',(req,res) => {
    con.query(`SELECT * FROM properties WHERE sale_type=${parseInt(req.params.saletype)}`, function (err, result, fields) {
        var tempSaleType=req.params.saletype;
        if (err) throw err;
        if(isEmptyObject(result)){
            if(tempSaleType===0){
                return res.status(404).send('There are no properties for rent.');
            }
            else if (tempSaleType===1){
                return res.status(404).send('There are no properties for sell.');
            }
            else{
                return res.status(404).send('INVALID PARAMETER');
            }
        }
        res.send(result);
    });
});


//Search results according to JSON received (with filters)
app.post('/api/properties/search',(req,res) => {

    var  searchJSON = req.body; // Copy POSTed JSON to a variable

    // Build SQL query. Question marks are replaced with valuesFromJSON table
    var tempSqlquery1="SELECT * FROM properties WHERE (    ( (properties.id=?) OR (? IS NULL) ) AND ( (properties.price>=?) OR (? IS NULL) )  AND ( (properties.price<=?) OR (? IS NULL) ) AND ( (properties.sqm=?) OR (? IS NULL) ) AND ( (properties.location=?) OR (? IS NULL) )   ";
    var tempSqlQuery2=" AND ( (properties.bedrooms=?) OR (? IS NULL) ) AND ( (properties.bathrooms=?) OR (? IS NULL) ) AND ( (properties.property_type=?) OR (? IS NULL) ) AND ( (properties.floor=?) OR (? IS NULL) )  AND ( (properties.sale_type=?) OR (? IS NULL) ) ";
    var tempSqlQuery3="AND ( (properties.furnitured=?) OR (? IS NULL) ) AND ( (properties.heating_type=?) OR (? IS NULL) )  AND ( (properties.built_year>=?) OR (? IS NULL) ) AND ( (properties.built_year<=?) OR (? IS NULL) ) AND ( (properties.parking=?) OR (? IS NULL) ) ";
    var telikiParenthesi=")"; // It's good to leave this parenthesis as a unique string in order to avoid syntax errors

    var finalSqlQuery = tempSqlquery1.concat(tempSqlQuery2,tempSqlQuery3,telikiParenthesi); // Join the above 3 parts of SQL query ;

    var valuesFromJSON=[];

    // Iterate searchJSON values (NOT keys!) and put them in valuesFromJSON so they can replace question marks in SQL query
    for(var key in searchJSON){
            valuesFromJSON.push(searchJSON[key]);
            valuesFromJSON.push(searchJSON[key]);
    }

    con.query(finalSqlQuery, valuesFromJSON, function (err, result, fields) {
        if (err) throw err;
            if(isEmptyObject(result)) return res.status(404).send('There are no matches with these properties.');
            res.send(result);
        });
});

//Function to check if json file is empty
function isEmptyObject(obj) {
    return !Object.keys(obj).length;
};

// This is necessary in case that PORT has value from the system which is not 8000

app.listen(port,() => console.log(`Listening on port ${port}`)); 
