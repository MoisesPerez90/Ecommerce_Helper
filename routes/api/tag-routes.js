const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { findByPk } = require('../../models/Product');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  try{
  // find all tags
  // be sure to include its associated Product data
    const allTags = await Tag.findAll({
      include: [{model : Product}],
      distinct : true
    })
    res.status(200).json(allTags);
  }catch{
    err => res.status(500).json(err);
  }

});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try{
    const selectedTag = await Tag.findByPk(req.params.id, {
      include : [{model : Product}]
    });
    if (!selectedTag){
      return res.status(400).json({message : "No ID founded"});
    }
    return res.status(200).json(selectedTag);
  }catch(err){
    return res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try{
    const newTag = await Tag.create({
      tag_name : req.body.tag_name,
    });
    return res.status(200).json(newTag);
  }catch(err){
    return res.status(500).json(err);
  }
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  try{
    const updatedTag = await Tag.update(req.body,{
      where : {
        id : req.params.id,
      }
    });
    if (!updatedTag[0]){
      return res.status(400).json({message : 'No tag founded with that ID'})
    }
    return res.status(200).json(updatedTag);
  }catch(err){
    return res.status(500).json(err);
  }
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  try{
    const deletedTag = await Tag.destroy({
      where : {
        id : req.params.id,
      }
    })
    if (!deletedTag){
      return res.status(400).json({message:'No tag founded with this ID'});
    }
    return res.status(200).json(deletedTag);
  }catch(err){
    return res.status(500).json(err);
  }
});

module.exports = router;
