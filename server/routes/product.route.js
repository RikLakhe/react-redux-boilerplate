import express from 'express';

import {AllProducts} from './../_mock_/Products.mockData';

const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        res.status(200)
            .send({
                code: '200',
                status: 'SUCCESS',
                data: AllProducts
            });
    });

module.exports = router;
