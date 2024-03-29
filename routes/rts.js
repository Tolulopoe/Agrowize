const express = require('express');
const router = express.Router();
const {mid} = require('../middleware/mdw')
const {verifyAuth} = require('../middleware/auth')
const {home, about,details} = require('../controllers/users');

const {signup} = require('../controllers/signup');
const {Login} = require('../controllers/userLogin');
const {forgotPassword} = require('../controllers/forgotPasSword');
const {resetPassword} = require('../controllers/RESET');
const {updateProfile} = require('../controllers/updateProfile');
// const {insertCus} = require('../controllers/customerControl')

router.get('/',home)
router.get('/login',Login)// local database
// router.get('/register',insertCus)//clever cloud access
router.post('/signup',signup)// local database 
router.post('/forgotPassword',forgotPassword)// local database
router.post('/passwordReset',resetPassword)//local database
router.post('/updateProfile',updateProfile)//local database
router.get('/details',verifyAuth,details)//local database
module.exports= {router};