import { Request, Response } from 'express';
import { processSlackEvent } from '../services/slack.service';

export const handleSlackEvents = async (req: Request, res: Response) => {
    try {
        const result = await processSlackEvent(req.body);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send('error when connect to slack events');
    }
};
