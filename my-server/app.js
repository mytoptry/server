const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const data1 = require('./data1.json');
const data2 = require('./data2.json');

app.use(cors());

// const models = require("../models/");
const port = 3001;

app.use(bodyParser.json({ limit: '5mb' }));

app.get('/get-store-all', (req, res) => {
    try {
        const json = data1; // is query
        res.json({
            formData: json,
            isSuccess: true
        });
    } catch (err) {
        res.json({
            formData: null,
            isSuccess: false
        });
    }
});

app.get('/get-store-by-id/:storeId', (req, res) => {
    try {
        const json = data2; // is query
        let storeId = req.params.storeId;
        let data = json.filter(val => val.storeId === Number(storeId));
        res.json({
            formData: data.length > 0 ? data[0] : null,
            isSuccess: true
        });
    } catch (err) {
        res.json({
            formData: null,
            isSuccess: false
        });
    }
});

app.listen(port, () => {
    console.log(`Welcome to http://localhost:${port}`);
});
