import express from "express";
import axios from "axios";
import url from "url";

import constants from "../constants.js";

const router = express.Router();
const {
    formstackApi: { baseUrl, tokenEndpoint, clientId, clientSecret },
} = constants;

router
    .get(`/`, (req, res) =>
        res.redirect(
            `https://www.formstack.com/api/v2/oauth2/authorize?client_id=${clientId}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauthorization&response_type=code`
        )
    )
    .post(`/`, async (req, res) => {
        const formstackUserData = req.body;

        const params = new url.URLSearchParams({
            grant_type: "authorization_code",
            client_id: clientId,
            redirect_uri: "http://localhost:3000/authorization/success",
            client_secret: clientSecret,
            code: formstackUserData.code,
        });

        try {
            const response = await axios.post(`${baseUrl}${tokenEndpoint}`, params.toString());

            res.json(response.data);
        } catch (e) {
            res.json(e);
        }
    });

export default router;
