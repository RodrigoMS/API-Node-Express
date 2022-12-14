import express from 'express';

const routes = express.Router();

// Serviço oferecido no endereço raiz.
routes.get("/", ( _ , response) => {
    return response
            .status(200)
            .json("Hello World!");
    // return response.send("Hello World!");
});

// Serviço de autenticação via método POST.
// OBS: Na pasta de documentação encontra-se o teste para "Postman".
routes.post("/user", (request, response) => {

    // Realiza a desestruturação dos dados.
    const { email, password } = request.body;

    console.log(request.body);

    // Verificação simples de teste para login,
    // enquanto não se tem validação e banco de dados.
    if(email === "rms@localhost.com" && password === "123456789") {

        // Status 200 - Indica que a requisição foi bem sucedida
        return response.status(200).json(`Acesso permitido.`)
    }
    
    // Status 401 - Indica que a solicitação não foi aplicada porque não possui,
    // credenciais de autenticação válidas para o recurso de destino.
    return response.status(401).json(`Acesso negado.`)
})

// Permite que routes seja importado em outros arquivos.
export default routes;