const router = require('express').Router()
const collectionCtrl = require('../controllers/collectionCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.route('/collection')
    .get(collectionCtrl.getCollections)
    .post(auth,authAdmin,collectionCtrl.createCollection)

router.route('/collection/:id')
    .delete(auth,authAdmin, collectionCtrl.deleteCollection)
    .put(auth,authAdmin, collectionCtrl.updateCollection)

module.exports = router    