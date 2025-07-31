import express, {Router} from "express";
import { getEventos, getEventosById, postEvento, putEvento, delEvento } from "../controller/eventos-controller"

const Eventosrouter = express.Router();

Eventosrouter.get("/", getEventos);
Eventosrouter.get("/:id", getEventosById);
Eventosrouter.post("/", postEvento);
Eventosrouter.put("/:id", putEvento);
Eventosrouter.delete("/:id", delEvento);

export default Eventosrouter;