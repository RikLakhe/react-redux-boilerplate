import express from 'express';
import uuid from 'uuid';

import connection from '../config/dbConfig'
import {AllProducts} from './../_mock_/Products.mockData';

const router = express.Router();
let data = AllProducts;

router.route('/')
    .get((req, res, next) => {
        const sql = 'SELECT * FROM product';
        connection.query(sql,(err,res)=>{
            if (err) {
                console.error('error connecting: ' + err);
            }
            console.log("result",res)
        })
        res
            .status(200)
            .send({
                code: '200',
                status: 'SUCCESS',
                data: data
            });
    })

router.route('/:id')
    .get((req, res, next) => {
        const foundData = data.find(x => x.product_id === req.params.id);
        res
            .status(200)
            .send({
                code: '200',
                status: 'SUCCESS',
                data: foundData
            });
    })
    .put((req, res, next) => {
        const foundData = data.find(x => x.product_id === req.params.id);
        var index = data.indexOf(foundData);
        data[index] = req.body;
        res
            .status(200)
            .send({
                code: '200',
                status: 'SUCCESS',
            });
    })
    .delete((req, res, next) => {
        data = data.filter(x => x.product_id !== req.params.id);
        res
            .status(200)
            .send({
                code: '200',
                status: 'SUCCESS',
            });
    })


router.route('/add')
    .post((req, res, next) => {
        req.body.product_id = uuid();
        const data = (req.body);
        const sql = "INSERT INTO product SET ?"

        console.log(connection.query(sql,data,(err,res)=>{
            if (err) {
                console.error('error connecting: ' + err);
            }
            console.log("result",res)
        }))

        res
            .status(200)
            .send({
                code: '200',
                status: 'SUCCESS',
                data: {
                    message: 'Product successfully added!'
                },
            });

    })


module.exports = router;
