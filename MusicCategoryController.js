
const MusicCategoryModel = require('./MusicCategoryModel')


// GET
module.exports.getMusicCategories = async(req, res) => {
    const myMusicCategories = await MusicCategoryModel.find()
    res.send(myMusicCategories)
}

// POST
module.exports.saveMusicCategory = async(req, res) => {
    const { musicCategory } = req.body;
    MusicCategoryModel.create({ musicCategory })
    .then((data) => {console.log('Music category is added!')
    res.send(data)
    })
}

// DELETE
module.exports.deleteMusicCategory = async (req, res) => {
    const { _id } = req.params;
    MusicCategoryModel.findByIdAndDelete(_id)
    .then(() => res.send('Music category is deleted!'))
}

// EDIT
module.exports.editMusicCategory = async(req, res) => {
    const { _id, musicCategory } = req.body;
    MusicCategoryModel.findByIdAndUpdate(_id, { musicCategory })
    .then(() => res.send('Music category is edited!'))
}