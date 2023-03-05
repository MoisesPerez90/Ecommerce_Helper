const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try{
    // find all categories
    const allCategories = await Category.findAll({
      // be sure to include its associated Products
      include: [{model : Product}],
    })
    return res.status(200).json(allCategories);
  }catch(err){
    return res.status(500).json(err);
  }
  
});

router.get('/:id', async (req, res) => {
  try{
    // find one category by its `id` value
    const selectedCategory = await Category.findByPk(req.params.id, {
        // be sure to include its associated Products
        include : [{model : Product}]
    });
    if (!selectedCategory){
      return res.status(404).json({message : 'No category found with that id'});
    }
    return res.status(200).json(selectedCategory);
  }catch(err){
    return res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try{
    // create a new category
    const newCategory = await Category.create({
      category_name : req.body.category_name
    });
    return res.status(200).json(newCategory);
  }catch(err){
    return res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try{
    // update a category by its `id` value
    const updatedCategory = await Category.update(req.body,{
      where:{
        id : req.params.id,
      },
    })
    if (!updatedCategory[0]){
      return res.status(400).json({message : 'No category was found with that id'});
    }
    return res.status(200).json(updatedCategory);
  }catch(err){
    return res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try{
    // delete a category by its `id` value
    const deletedCategory = await Category.destroy({
      where : {
        id : req.params.id,
      }
    })
  if (!deletedCategory){
    return res.status(400).json({message : 'No category was found with that id'});
  }
  return res.status(200).json(deletedCategory);
}catch(err){
  return res.status(500).json(err);
}
});

module.exports = router;
