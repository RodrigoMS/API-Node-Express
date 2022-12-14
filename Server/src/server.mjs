import Express from "express";
import cors from "cors";

import routes from "./router.js";
import routesValidate from "./middlewares/routes-validate.js";

// Instancia o express.
const app = Express();

// Definição da interface de rede.
const port = 3000;

// Definição das aplicações externas que podem acessar a API.
const corsOptions = {
  origin: "http://localhost:5173", // Live Server do VS Code.
  optionsSuccessStatus: 200, // Para legacy browsers (IE11, várias SmartsTVs)
};

// Aplica cors a todas as rotas.
app.use(cors(corsOptions));

// Analisa solicitações com carga JSON.
// Os parâmetros opcionais tem propriedades como inflate, limit, type entre outros.
app.use(Express.json());

// Encaminhar para arquivo de rotas.
app.use(routes);

// Necessário para a validação de dados.
// Ele não é a validação em si mais serve para capturar o erro para 
// informar o usuário.
// Fica sempre depois das rotas pois são as rotas que vão gerar os erros e
// ele esta aqui para capturar estes erros.
// O authLoginValidation gera o erro e o handleError captura este erro para 
// devolver uma resposta.
app.use(routesValidate);

// Escuta solicitações e serve a aplicação Node.
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});