import express from "express";
import { createEventAdapter } from '@slack/events-api';
import { WebClient } from '@slack/web-api';
import { PORT } from "./envConfig";

const app = express();
const port = PORT || 3001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
