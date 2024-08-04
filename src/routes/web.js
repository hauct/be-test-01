const express = require('express'); //commonjs
const {getHomepage, getABC, getHoiDanIT, getCreatePage, postCreateUser, getUpdatePage, postUpdateUser, postDeleteUser, postHandleRemoveUser} = require('../controllers/homeController')
const router = express.Router();

router.get('/', getHomepage);

router.get('/abc', getABC);
  
router.get('/hoidanit', getHoiDanIT);

router.get('/create', getCreatePage);

router.get('/update/:id', getUpdatePage);

router.post('/create-user', postCreateUser);

router.post('/update-user', postUpdateUser);

router.post('/delete-user/:id', postDeleteUser);

router.post('/delete-user', postHandleRemoveUser);

module.exports = router; //export default