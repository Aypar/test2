const express = require('express');
const mongoose = require('mongoose');


class AuthRoutes {
    constructor() {

        this.router = express.Router();
        this.user_database = mongoose.models.User;
        this.router.post('/login', this.login);
        this.router.post('/logout', this.logout);
    }

    login(req, res) {

    }

    logout(req, res) {

    }

    register(req,res)
    {

    }
}

module.exports = AuthRoutes.router;