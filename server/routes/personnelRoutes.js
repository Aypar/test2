const express = require('express');
const mongoose = require('mongoose');
const BaseRoutes = require('baseRoutes');
const auth = require('../middlewares/authorizationMiddleware');

class PersonnelRoutes extends BaseRoutes {

    constructor() {
        super();
        this.model = mongoose.models.Personnel;
        this.router.get('/', auth.isAuthenticated, this.getById);
        this.router.get('/list', auth.isAuthenticated, this.list);
        this.router.post('/create', auth.isAuthenticated, this.create);
        this.router.post('/update', auth.isAuthenticated, this.update);
        this.router.post('/delete', auth.isAuthenticated, this.remove);

    }


}

module.exports = new PersonnelRoutes().router;