const express = require('express');
const mongoose = require('mongoose');
const BaseRoutes = require('./baseRoutes');
const auth = require('../middlewares/authorizationMiddleware');
const Department = require('../models/department');

class DepartmentRoutes extends BaseRoutes {

    constructor() {
        super();

        this.model = mongoose.models.Department;
        this.entity = Department;
        this.router.get('/', auth.isAuthenticated, this.getById.bind(this));
        this.router.post('/list', auth.isAuthenticated, this.list.bind(this));
        this.router.post('/create', auth.isAuthenticated, this.create.bind(this));
        this.router.post('/update', auth.isAuthenticated, this.update.bind(this));
        this.router.post('/delete', auth.isAuthenticated, this.remove.bind(this));

    }


}

module.exports = new DepartmentRoutes().router;