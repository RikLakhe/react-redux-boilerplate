var express = require('express');

const commonUtil = require('./../Utils/commonUtil')
const jwtUtil = require('./../Utils/jwtUtil')

const Users = require('./../_mock_/Users.mockData')

const router = express.Router();

const key = commonUtil.randomSecretKey();

router.route('/login')
    .post((req, res) => {
            // authCtrl.login(req, res);
            let loginTime = new Date()
            let token = jwtUtil.createNewToken(user, key)

            if (!req.body.username || !req.body.password) {
                res.status(200).send('Enter need to enter username and password')
            } else {
                const user = Users.find(u => {
                    return (
                        u.userName === req.body.userName && u.password === req.body.password
                    )
                })

                if (!user) {
                    res.status(401).send('user doesn not exist')
                    return
                }else{
                    res
                        .status(200)
                        .cookie("mycookie", token, {secure: true, maxAge: 120000, httpOnly: true})
                        .send(token);
                }
            }
        }
    );

module.exports = router;
