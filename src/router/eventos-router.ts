import express, {Router} from "express";
import { getEventos, getEventosById, postEvento, putEvento, delEvento } from "../controller/eventos-controller"

const Eventsrouter = express.Router();

Eventsrouter.get("/", getEventos);
Eventsrouter.get("/:id", getEventosById);
Eventsrouter.post("/", postEvento);
Eventsrouter.put("/:id", putEvento);
Eventsrouter.delete("/:id", delEvento);

export default Eventsrouter;