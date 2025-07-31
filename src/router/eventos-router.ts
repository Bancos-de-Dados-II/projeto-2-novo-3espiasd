import  {Router} from "express";
import { getEventos, getEventosById, postEvento, putEvento, delEvento } from "../controller/eventos-controller"

const eventsRouter = Router();

eventsRouter.get("/", getEventos);
eventsRouter.get("/:id", getEventosById);
eventsRouter.post("/", postEvento);
eventsRouter.put("/:id", putEvento);
eventsRouter.delete("/:id", delEvento);

export default eventsRouter;