const mongoose = require('mongoose');
const app = require('express')();
const body_parser = require('body-parser');
const routes = require('./routes');

require('./models')();

app.use(body_parser.json());
app.use((req, res, next) => {

    if (req.method === 'GET') {
        if (req.query.find_query) {
            req.query.find_query.is_deleted = false;
        }

        req.page_size = req.query.page_size || 10;
        req.page_index = req.query.page_index || 0;
    }

    if (req.method === 'POST') {
        req.page_size = req.query.page_size || 10;
        req.page_index = req.query.page_index || 0;
    }


});
app.use('/api/hr/personnel', routes.personnel);
app.use('/api/auth/', routes.auth);
app.listen(3000);

mongoose.connect('mongodb://127.0.0.1:27017');
