const Sequelize = require('sequelize');
const db = new Sequelize('mysql://root:Videocomm1@127.0.0.1:3306/post');

const Product = db.define('product',{
    name: db.Sequelize.STRING
});

const Category = db.define('category',{
    name: db.Sequelize.STRING
});

const ProductCategory = db.define('product_category',{});

ProductCategory.belongsTo(Product);
ProductCategory.belongsTo(Category);
Product.hasMany(ProductCategory);

const seed = ()=> {
    return sync()
        .then(()=>{
            return Promise.all([
                Product.create({name: 'Tennis Raguet'}),
                Category.create({name: 'Sports'}),
                Category.create({name: 'Exercise'}),
                Product.create({name: 'Baseball Bat'}),
            ]);
        })
        .then( result => {
            //console.log(result[0].get());
            const tennisRqguet = result[0];
            const sports = result[1];
            const exercise = result[2];
            const baseballBat = result[3];
            return Promise.all([
                ProductCategory.create({productId: tennisRqguet.id,categoryId: sports.id}),
                ProductCategory.create({productId: tennisRqguet.id,categoryId: exercise.id}),
                ProductCategory.create({productId: baseballBat.id,categoryId: sports.id}),
            ])
        })
}

const sync = ()=>{
    return db.sync({force: true});
};

seed()
 .then(()=>console.log('synched'))
 .then(()=>{
     return Product.findAll({
         include:[{
             model: ProductCategory,
             include: [{
                 model: Category,
                 where: {name: 'Sports'}
             }]
         }]
     });
 })
 .then(products=>{
     products.forEach(product=>{
         console.log(product.name);
         product.product_categories.forEach(productCategory=>{
             console.log(productCategory.category.get())
         });

    });
 })
 .catch(e=>console.log(e));

