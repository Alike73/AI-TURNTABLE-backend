
const { Router } = require('express');
const { getMusicCategories, saveMusicCategory, deleteMusicCategory, editMusicCategory } = require('./MusicCategoryController');

const musicCategoryRouter = Router();

musicCategoryRouter.get('/getMusicCategories', getMusicCategories)
musicCategoryRouter.post('/saveMusicCategory', saveMusicCategory)
musicCategoryRouter.delete('/deleteMusicCategory/:_id', deleteMusicCategory)
musicCategoryRouter.put('/editMusicCategory', editMusicCategory)


module.exports = musicCategoryRouter;