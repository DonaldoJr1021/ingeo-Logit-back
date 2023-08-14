const repository = require('../repositories/envioTerrestre.repository');
// Handlers for repository
module.exports = () => ({
    get: async (req, res) => {
        const repositoryResp = await repository.listEnvioTerrestre();
        let status = repositoryResp.code;
        return res.status(status).send(repositoryResp);
    },
    post: async (req, res) => {
        let envioTerrestre = req.body;
        const repositoryResponse = await repository.createEnvioTerrestre(envioTerrestre);
        return res.send(repositoryResponse)
    },
    put: async (req, res) => {
        let idEnvioTerrestre = req.params.id;
        let envioTerrestre = req.body;
        const respositorieResponse = await repository.updateEnvioTerrestre(idEnvioTerrestre, envioTerrestre);
        return res.send(respositorieResponse)
    },
    delete: async (req, res) => {
        let idEnvioTerrestre = req.params.id;
        const data = await repository.deleteEnvioTerrestre(idEnvioTerrestre);
        return res.send(data);
    }
});