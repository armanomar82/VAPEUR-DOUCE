const express = require('express');
const router  = express.Router();


// aloments page
router.get('/aloments',    (req , res) => res.send('Welcome on aloments page !'));
// aloment page
router.get('/aloments:id', (req , res) => res.send('Welcome on aloments page !'));
//overView pade
router.get('/overView',    (req , res) => res.send('Welcome on overView page !'));



module.exports = router