const express=require('express')
const { addUser, getUser } = require('../controllers/userControllers')
const upload = require('../config/multer')
const router=express.Router()
router.get('/',getUser)
router.post('/',upload.single('image'),addUser)
module.exports=router