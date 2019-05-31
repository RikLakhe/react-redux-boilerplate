import express from 'express';

const router = express.Router();

router.route('/')
    .get((req, res, next) => {
        res.send('in setting');
    });

module.exports = router;
