const request = require('supertest');
const baseURL = 'http://localhost:4100';
const app_test = require('../src/app');

/**
 * Test the /GET route
 * Developer: Donaldo Parra
 */
// Describe the /GET route for testing Cliente
describe('Clientes Tests GET /cliente', () => {
    test('Should respond with all Clientes', async () => {
        const res = await request(app_test).get('/cliente').send();
        let status = res.body?.code;
        expect(status).toBe(200);
    });

    test('Should respond with a array', async () => {
        const res = await request(app_test).get('/cliente').send();
        let infoRes = res.body?.data;
        expect(infoRes).toBeInstanceOf(Array);
    });
});

/**
 * Test the /POST route
 * Developer: Donaldo Parra
 */
// Describe the /POST route for testing Cliente
describe('Cliente Tests POST /createCliente', () => {

    test('Should respond with Cliente created', async () => {
        let cliente = {
            nombre: 'Test',
            email: 'pruebatest@example.com',
            telefono: '1234567890',
            direccion: 'Cl 56 #15-115 Barranquilla',      
        }
        const res = await request(app_test).post('/createCliente').send(cliente);
        console.log("Crear Cliente " , res)
        let status = res.body?.code;
        expect(status).toBe(200);
    });

    
    test('Should have a content-type: application/json in header', async () => {
        const res = await request(app_test).post('/createCliente').send();
        let infoRes = res.header['content-type'];
        expect(infoRes).toEqual(expect.stringContaining('json'));
    });

    test('Should respond with a idCliente', async () => {
        let cliente = {
            nombre: 'Test',
            email: 'pruebatest@example.com',
            telefono: '1234567890',
            direccion: 'Cl 56 #15-115 Barranquilla',      
        }
        const res = await request(app_test).post('/createCliente').send(cliente);
        let idClient = res.body?.data?._id;
        expect(idClient).toBeDefined();
    });
});