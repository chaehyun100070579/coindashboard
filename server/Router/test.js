const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({ test: 'hixx'});
});

module.exports = router;
