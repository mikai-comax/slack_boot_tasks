import express from "express";
import { handleSlackEvents } from "../controllers/slack.controller";
const slackRouter = express.Router();
slackRouter.post("/slack/events", handleSlackEvents);
export { slackRouter };
