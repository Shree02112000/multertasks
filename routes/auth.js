const express = require('express')
const router = express.Router()

const Authcontroller =require('../controller/Authcontroller')
const couponController = require('../controller/couponController')

const upload = require('../middleware/upload')
router.post('/register',Authcontroller.register)
router.post('/login',Authcontroller.login)
router.post('/create',upload.single('couponimage'),couponController.create_coupon)
router.put('/update',couponController.update_coupon)
router.get('/find/:id',couponController.get_id)
router.delete('/delete',couponController.delete_id)
router.get('/search',couponController.searchcoupon)
module.exports= router