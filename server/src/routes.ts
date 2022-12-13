import express from 'express';

const routes = express.Router();

// Serviço oferecido no endereço raiz.
routes.get("/", ( _ , response) => {
    return response
            .status(200)
            .json("Hello World!");
    // return response.send("Hello World!");
});

export default routes;