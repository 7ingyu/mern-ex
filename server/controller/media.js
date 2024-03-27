const router = require('express').Router()
const { Media } = require('../models')

router.get('/', async (req, res) => {
  const allMedia = await Media.findAll({
    attributes: ['id', 'name', 'type', 'release_date', 'genre']
  })
  return res.json(allMedia)
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const media = await Media.findOne({
    attributes: ['id', 'name', 'type', 'release_date', 'genre'],
    where: { id }
  })
  return res.json(media)
})

router.put('/:id', async (req, res) => {
  const id = req.params.id
  try {
    await Media.update(req.body, {
      where: { id }
    });
    return res.status(204).send('yayyy')
  } catch (e) {
    console.log(e)
    return res.status(500).send('boooo')
  }
})

module.exports = router