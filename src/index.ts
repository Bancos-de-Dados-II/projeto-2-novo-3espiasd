import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { conectar } from './database/mongo';
import Eventosrouter from './router/eventos-router';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

conectar();

app.use("/eventos", Eventosrouter);

app.get('/', (req, res) => {
  res.send('API funcionando!'); 
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
