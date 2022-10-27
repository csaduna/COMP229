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
                title: 'Business Contacts',
                BusinessContacts: businessContacts,
                userName: req.user ? req.user.username : ''            
            })
        }
    });
}

exports.displayEditPage = (req, res, next) => {
    
    let id = req.params.id;

    List.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('business/add_edit', {
                title: 'Edit Item', 
                item: itemToEdit,
                userName: req.user ? req.user.username : ''
            })
        }
    });
}


exports.processEditPage = (req, res, next) => {

    let id = req.params.id

    let updatedItem = List({
        _id: req.body.id,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    });

    List.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/business/list');
        }
    });

}


exports.performDelete = (req, res, next) => {

    let id = req.params.id;


    List.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/business/list');
        }
    });

}


exports.displayAddPage = (req, res, next) => {

    let newItem = List();

    res.render('business/add_edit', {
        title: 'Add a New Item',
        item: newItem,
        userName: req.user ? req.user.username : ''
    })          

}

exports.processAddPage = (req, res, next) => {

    let newItem = List({
        _id: req.body.id,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    });

    List.create(newItem, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(item);
            res.redirect('/business/list');
        }
    });    
}
