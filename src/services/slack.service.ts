import { createEventAdapter } from "@slack/events-api";
import { WebClient } from "@slack/web-api";
import { SLACK_SIGNING_SECRET, SLACK_BOT_TOKEN } from "../envConfig";

const slackEvents = createEventAdapter(SLACK_SIGNING_SECRET);
const webClient = new WebClient(SLACK_BOT_TOKEN);

slackEvents.on("message", async (event) => {
  console.log(`Received a message: ${event.text}`);
  if (event.text?.includes("butterflies")) {
    await webClient.chat.postMessage({
      channel: event.channel,
      text: "I noticed you mentioned butterflies!",
    });
  }
});

export const processSlackEvent = async (eventData: any) => {
  return slackEvents.emit(eventData);
};
