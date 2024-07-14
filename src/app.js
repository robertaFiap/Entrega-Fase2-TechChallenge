import "dotenv/config"
import express from "express";
import conectaNaDataBase from "./Config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDataBase();

conexao.on("error", (erro) => {
    console.error("erro de conexao", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feito com sucesso");
});

const app = express();
routes(app);

export default app;