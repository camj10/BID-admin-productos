const ProductoController = require('../controllers/producto.controller');
module.exports = function(app){
    app.get('/api', ProductoController.index);
    app.post('/api/producto', ProductoController.createProducto);
    app.get('/api/producto',ProductoController.getAllProducto);
    app.get('/api/producto/:id',ProductoController.getProducto);
    app.put('/api/producto/:id',ProductoController.updateProducto);
    app.delete('/api/producto/:id',ProductoController.deleteProducto);
}