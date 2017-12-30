const express = require('express');

class BaseRoutes {

    constructor() {
        this.model = null;
        this.entity = null;
        this.router = express.Router();

    }

    getById(req, res) {
        let _id = req.query.id;
        this.model.findById(_id, (error, result) => {
            res.json({error: error, result: result})
        })
    }

    create(req, res) {

        let entity = new this.entity(req.body);
        entity.save((err, result) => {
            res.json({error: err, result: result});
        })
    }

    update(req, res) {
        let _id = req.body._id;
        let data = req.body.data;
        this.model.update({_id: _id}, {$set: data}, (error, result) => {
            res.json({error: error, result: result});
        });

    }

    remove(req, res) {
        let _id = req.body._id;
        this.model.update({_id: _id}, {$set: {is_deleted: true}}, (error, result) => {
            res.json({error: error, result: result});
        });
    }

    list(req, res) {
        let page_index = req.query.page_index || 0;
        let page_size = req.query.page_size || +Infinity;
        let query = req.query.find || {};
        delete req.query.page_index;
        delete req.query.page_size;
        query.is_deleted = false;
        console.log(query);
        this.model.find(query).exec((error, result) => {
            res.json({error: error, result: result});
        });
    }

}

module.exports = BaseRoutes;