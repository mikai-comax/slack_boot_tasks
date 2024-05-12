import dotenv from "dotenv";
dotenv.config();
export const PORT = process.env.PORT;
export const SLACK_SIGNING_SECRET = process.env.SLACK_SIGNING_SECRET;
export const SLACK_BOT_TOKEN = process.env.SLACK_BOT_TOKEN;
