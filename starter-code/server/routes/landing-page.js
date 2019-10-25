const express = require('express');
const router  = express.Router();

/* GET landing page */
router.get('/', (req, res) => {
  console.log(req.session)
  res.render('landing-page');
});

module.exports = router;
