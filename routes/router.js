const router = require('express').Router();
const groceryList = require('../shopping/groceries.json');


router.get('/', (req, res) => {
    res.render('index', groceryList);
});





module.exports = router;
