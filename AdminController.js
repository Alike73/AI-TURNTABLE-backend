
const AdminModel = require('./AdminModel');

// GET
module.exports.getMyAdminPass = async(req, res) => {
    const myAdminNameAndPassword = await AdminModel.find();
    res.send(myAdminNameAndPassword)
}

// POST
module.exports.saveMyAdminPass = async(req, res) => {
    const { adminFullName, password  } = req.body;
    AdminModel.create({ adminFullName, password  })
    .then((data) => {console.log('Admin is added!')
    res.send(data)
    })
}
