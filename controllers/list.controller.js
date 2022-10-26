// Create a reference to the model
const { response } = require('../config/app');
let List = require('../models/list.model');

exports.businessContacts = function(req, res, next) {
    List.find((err, businessContacts) => {
        // console.log(businessContacts)
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('business/list', {
                title: 'CAd X | Business Contacts',
                BusinessContacts: businessContacts            
            })
        }
    });
}