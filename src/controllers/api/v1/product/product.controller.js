const { Product, Brand, sequelize, ProductImage } = require('../../../../models');
const { getPagination, getPagingData } = require("../../../../utils/pagination")
module.exports = {
    phone: async (req, res, next) => {
        try {
            const { brand } = req.query;
            const whereClause = {};
            const { page = 1, limit = 10, sort_by_price, sort_type } = req.query;

            const { limit: _limit, offset } = getPagination(page, limit);
            if (brand) {
                const brandRecord = await Brand.findOne({
                    where: sequelize.where(
                        sequelize.fn('LOWER', sequelize.col('name')),
                        brand.toLowerCase()
                    )
                });

                if (!brandRecord) return res.status(404).json({ message: 'Brand not found' });

                whereClause.brand_id = brandRecord.id;
            }
            let order = [];

            if (sort_by_price === 'true') {
                order.push(['price', sort_type?.toUpperCase() === 'DESC' ? 'DESC' : 'ASC']);
            }
            const phones = await Product.findAndCountAll({
                where: whereClause,
                limit: _limit,
                offset,
                order,
                include: [{
                    model: Brand,
                    as: 'brand',
                    attributes: ['name']
                }]
            });
            const response = getPagingData(phones, page, _limit);
            return res.json(response);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error' });
        }
    },
    phoneDetailBySlug: async (req, res) => {
        console.log("helloooooo");


        try {
            const { slug } = req.params;
            console.log("slug: ", slug);
            const product = await Product.findOne({
                where: { slug },
                include: [
                    {
                        model: Brand,
                        as: 'brand',
                        attributes: ['name'],
                    },
                    {
                        model: ProductImage,
                        as: 'images',
                        attributes: ['image_url'],
                        required: false, // Optional join
                    }
                ],
            });
            console.log("Hellooooooo: ", product);

            if (!product) return res.status(404).json({ message: 'Product not found' });

            return res.json(product);
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

};
