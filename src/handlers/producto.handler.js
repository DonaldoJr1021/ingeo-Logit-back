const repository = require('../repositories/producto.repository');
// Handlers for repository
module.exports = () => ({
    get: async (req, res) => {
        const repositoryResp = await repository.listProducto();
        let status = repositoryResp.code;
        return res.status(status).send(repositoryResp);
    },
    post: async (req, res) => {
        let Producto = req.body;
        const repositoryResponse = await repository.createProducto(Producto);
        return res.send(repositoryResponse)
    },
    put: async (req, res) => {
        let idProducto = req.params.id;
        let Producto = req.body;
        const respositorieResponse = await repository.updateProducto(idProducto, Producto);
        return res.send(respositorieResponse)
    },
    delete: async (req, res) => {
        let idProducto = req.params.id;
        const data = await repository.deleteProducto(idProducto);
        return res.send(data);
    }
});