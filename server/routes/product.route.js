import express from 'express';
import uuid from 'uuid';

import {AllProducts} from './../_mock_/Products.mockData';

const router = express.Router();
const data = AllProducts;

router.route('/')
    .get((req, res, next) => {
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
    .delete((req,res,next)=>{

    })


router.route('/add')
    .post((req, res, next) => {
        req.body.product_id = uuid();
        data.push(req.body);
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
