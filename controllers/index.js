
const express = require('express')
, router = express.Router()

const mockData = require ('./mockdata');
router.use('/search', require('./search'))

router.get('/', (req, res) => {
    res.send(mockData)
})
  

module.exports = router