import express from "express";
import OpenAI from "openai";

import constants from "../constants.js";

const router = express.Router();
const {
    openAiApi: { clientSecret },
} = constants;

const openai = new OpenAI({ apiKey: clientSecret });

router
    .get(`/`, async (req, res) => {
        try {
            const chatCompletion = await openai.chat.completions.create({
                messages: [
                    { role: "user", content: "Translate this into Spanish: This is a test" },
                ],
                model: "gpt-3.5-turbo",
            });

            const assistantResponse = chatCompletion.choices[0].message.content;

            res.json({ response: assistantResponse });
        } catch (e) {
            res.status(500).json({ error: "Internal Server Error. " + e });
        }
    })
    .post(`/`, async (req, res) => {
        const { translationText, language } = req.body;
        console.log(req.body);
        try {
            const translationCompletion = await openai.chat.completions.create({
                messages: [
                    {
                        role: "user",
                        content: `Translate the following phrase into ${language} and respond with only the translated text.: ${translationText}.`,
                    },
                ],
                model: "gpt-3.5-turbo",
            });

            const assistantResponse = translationCompletion.choices[0].message.content;

            res.json({ response: assistantResponse });
        } catch (e) {
            res.status(500).json({ error: "Server Error fetching translation.", openAIError: e });
        }
    });

export default router;
