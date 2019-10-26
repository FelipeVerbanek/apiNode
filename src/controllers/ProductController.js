const mongoose = require('mongoose')

const Product = mongoose.model('Product')

module.exports = {
    async index(req,res){
        const {pages} = req.query
        const products = await Product.paginate({},
        { page: pages, limit: 10}
        );

        return res.json(products)
    },

    async store(req,res){
        const products = await Product.create(req.body)

        return res.json(products)
    },

    async show(req,res){
        const products = await Product.findById(req.params.id)

        return res.json(products)
    },
    async update(req, res){
        const products = await Product.findOneAndUpdate(req.params.id, req.body, {new: true})

        return res.json(products)
    },
    async delete(req, res) {
        await Product.findOneAndDelete(req.params.id)

        return res.send()
    }

}