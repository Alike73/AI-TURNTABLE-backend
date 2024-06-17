
const { Router } = require('express');
const { getMyAdminPass, saveMyAdminPass } = require('./AdminController');
const adminRouter = Router();


adminRouter.get('/getMyAdminPass', getMyAdminPass);
adminRouter.post('/saveMyAdminPass', saveMyAdminPass);

module.exports = adminRouter;