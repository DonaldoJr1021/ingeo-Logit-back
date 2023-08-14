const repository = require('../repositories/cliente.repository');
// Handlers for repository
module.exports = () => ({
    get: async (req, res) => {
        const repositoryResp = await repository.listCliente();
        let status = repositoryResp.code;
        return res.status(status).send(repositoryResp);
    },
    post: async (req, res) => {
        let cliente = req.body;
        const repositoryResponse = await repository.createCliente(cliente);
        return res.send(repositoryResponse)
    },
    put: async (req, res) => {
        let idCliente = req.params.id;
        let cliente = req.body;
        const respositorieResponse = await repository.updateCliente(idCliente, cliente);
        return res.send(respositorieResponse)
    },
    delete: async (req, res) => {
        let idCliente = req.params.id;
        const data = await repository.deleteClient(idCliente);
        return res.send(data);
    }
});