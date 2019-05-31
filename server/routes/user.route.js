import express from 'express';

import {allUsers} from './../_mock_/Users.mockData';

const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        res.status(200)
            .send({
                code: '200',
                status: 'SUCCESS',
                data: allUsers
            });
    });

module.exports = router;
