import Express from "express";
import cors from "cors";

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

app.use(Express.json());

// Serviço oferecido no endereço raiz.
app.get("/", ( _ , response) => {
  return response
        .status(200)
        .json("Hello World!");
  // return response.send("Hello World!");
});

// Escuta solicitações e serve a aplicação Node.
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});