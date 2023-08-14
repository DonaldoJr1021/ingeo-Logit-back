const repository = require('../repositories/puerto.repository');
// Handlers for repository
module.exports = () => ({
    get: async (req, res) => {
        const repositoryResp = await repository.listPuerto();
        let status = repositoryResp.code;
        return res.status(status).send(repositoryResp);
    },
    post: async (req, res) => {
        let puerto = req.body;
        const repositoryResponse = await repository.createPuerto(puerto);
        return res.send(repositoryResponse)
    },
    put: async (req, res) => {
        let idPuerto = req.params.id;
        let puerto = req.body;
        const respositorieResponse = await repository.updatePuerto(idPuerto, puerto);
        return res.send(respositorieResponse)
    },
    delete: async (req, res) => {
        let idPuerto = req.params.id;
        const data = await repository.deletePuerto(idPuerto);
        return res.send(data);
    }
});