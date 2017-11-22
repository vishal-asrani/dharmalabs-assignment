var controllers = require("./../controllers");
var express = require('express');
var router = express.Router();


router.get('/user/:user_id', controllers.login.get_user);
router.post('/create_user', controllers.login.create_user);
router.delete('/user/:user_id', controllers.login.delete_user);
router.put('/edit_user', controllers.login.edit_user);
module.exports = router;