import { Router } from "express";
import { getMessages, postMessage } from "../controllers/message.controller";
import { validate } from "../middlewares/validate";
import { messageSchema } from "../validators/message.validator";

const router = Router();

router.get("/messages", getMessages);
router.post("/messages", validate(messageSchema), postMessage);

export default router;
