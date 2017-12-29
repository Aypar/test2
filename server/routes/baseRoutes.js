const express = require('express');
const mongoose = require('mongoose');

class BaseRoutes {

    constructor() {
        this.model = null;
        this.entity = null;
        this.router = express.Router();

    }

    getById(req, res) {
        let _id = req.body._id;
        this.model.getById(_id, (error, result) => {
            res.json({error: error, result: result})
        })
    }

    create(req, res) {

        let entity = new this.entity(req.body);
        console.log(req.body);
        entity.save((err, result) => {
            res.json({error: err, result: result});
        })
    }

    update(req, res) {
        let _id = req.body._id;
        let update_query = req.body.update_query;
        this.model.update({_id: _id}, update_query, (error, result) => {
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
        let page_index = req.page_index;
        let page_size = req.page_size;
        let query = req.body.find_query;
        query.is_deleted = false;
        this.model.find(query).skip(page_index * page_size).limit(page_size).exec((error, result) => {
            res.json({error: error, result: result});
        });
    }

}

module.exports = BaseRoutes;