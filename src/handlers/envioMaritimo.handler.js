const repository = require('../repositories/envioMaritimo.repository');
// Handlers for repository
module.exports = () => ({
    get: async (req, res) => {
        const repositoryResp = await repository.listEnvioMaritimo();
        let status = repositoryResp.code;
        return res.status(status).send(repositoryResp);
    },
    post: async (req, res) => {
        let envioMaritimo = req.body;
        const repositoryResponse = await repository.createEnvioMaritimo(envioMaritimo);
        return res.send(repositoryResponse)
    },
    put: async (req, res) => {
        let idEnvioMaritimo = req.params.id;
        let envioMaritimo = req.body;
        const respositorieResponse = await repository.updateEnvioMaritimo(idEnvioMaritimo, envioMaritimo);
        return res.send(respositorieResponse)
    },
    delete: async (req, res) => {
        let idEnvioMaritimo = req.params.id;
        const data = await repository.deleteEnvioMaritimo(idEnvioMaritimo);
        return res.send(data);
    }
});