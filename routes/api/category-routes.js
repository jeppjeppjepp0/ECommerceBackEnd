const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
    // find all categories
    try {
        const categoryData = await Category.findAll({
            // be sure to include its associated Products
            include: [{ model: Product }],
        });

        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    // find one category by its `id` value
    try {
        const categoryData = await Tag.findByPk(req.params.id, {
            // be sure to include its associated Products
            include: [{ model: Product }],
        });

        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', (req, res) => {
    // create a new category
});

router.put('/:id', async (req, res) => {
    // update a category by its `id` value
    try {
        const categoryData = await Category.create(req.body);
        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    // delete a category by its `id` value
    try {
        await Category.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({ message: "Deletion successful." });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
