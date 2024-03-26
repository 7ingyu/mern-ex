const router = require('express').Router()
const { Media } = require('../models')

router.get('/', async (req, res) => {
  const allMedia = await Media.findAll({
    attributes: ['id', 'name', 'type', 'release_date', 'genre']
  })
  return res.json(allMedia)
})

module.exports = router