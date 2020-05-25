const express = require('express');
const router = express.Router();
const Video = require('../../models/Video');

// GET, just a general get videos route
router.get('/all', async (req, res) => {
  const results = await Video.find();
  res.status(200).json(results);
})

// GET, search through all the video tags
router.get('/s=:keyword', async (req, res) => {
  const keyword = req.params.keyword.toLowerCase();
  // WHOEVER LOOKING AT THIS PIECE OF CODE, IM SORRY WE WERE IN RUSH
  const results = await Video.find();
  let filteredResults = []
  results.forEach(result => {
    result.tags.forEach(tag => {
      if (tag.keywords.includes(keyword) && !filteredResults.includes(result)) {
        filteredResults.push(result)
      }
    })
  })

  res.status(200).json(filteredResults);
});


// POST, uploading a new video
router.post('/', async (req, res) => {
  const content = req.body
  console.log(content);
  const video = new Video({
    videoUrl: content.videoUrl,
    description: content.description,
    keywords: content.keywords.map(keyword => keyword.toLowerCase()),
    tags: content.tags
  })
  console.log(video);

  await video.save();
  res.status(201).json({
    message: 'Video successfully added!',
    video
  })
});

// POST, uploading a new video tag
router.post('/:id/tags/', async (req, res) => {
  const video = await Video.findById(req.params.id);

  const keywords = req.body.keywords
  console.log(keywords)

  let tag = {
    description: req.body.description,
    timeStamp: req.body.timeStamp,
    keywords: req.body.keywords.map(keyword => keyword.toLowerCase())
  };

  await video.tags.push(tag);
  await video.save();
  res.status(201).json({
    message: 'Tag successfully added!',
    tag
  })
})

module.exports = router;