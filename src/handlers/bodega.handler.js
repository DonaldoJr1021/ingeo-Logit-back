const repository = require('../repositories/bodega.repository');
// Handlers for repository
module.exports = () => ({
    get: async (req, res) => {
        const repositoryResp = await repository.listBodega();
        let status = repositoryResp.code;
        return res.status(status).send(repositoryResp);
    },
    post: async (req, res) => {
        let bodega = req.body;
        const repositoryResponse = await repository.createBodega(bodega);
        return res.send(repositoryResponse)
    },
    put: async (req, res) => {
        let idBodega = req.params.id;
        let bodega = req.body;
        const respositorieResponse = await repository.updateBodega(idBodega, bodega);
        return res.send(respositorieResponse)
    },
    delete: async (req, res) => {
        let idBodega = req.params.id;
        const data = await repository.deleteClient(idBodega);
        return res.send(data);
    }
});