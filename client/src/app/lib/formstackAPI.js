import dotenv from "dotenv";
import { redirect } from "react-router-dom";
dotenv.config();

const FORMSTACK_CLIENT_ID = process.env.FORMSTACK_CLIENT_ID;
const FORMSTACK_API_KEY = process.env.FORMSTACK_API_KEY;
const BASE_URL = "https://www.formstack.com/api/v2";

const fetchFormstackAPI = async (endpoint, method, body) => {
  const headers = {
    Host: "www.formstack.com",
    Authorization: `Bearer ${FORMSTACK_API_KEY}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  const response = await fetch(`${BASE_URL}/${endpoint}`, {
    method,
    headers,
    body: JSON.stringify(body),
  });

  const json = await response.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error(`Failed to fetch Forsmtack API: ${json.errors}`);
  }

  return json.data;
};

export const authorizeFormstack = async (redirectUri) => {
  const endpoint = `/oauth2/authorize?client_id=${FORMSTACK_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=code`;
};

export const getAllForms = async () => {
  const endpoint = `/api/v2/form.json?`;
  const method = "GET";
  const body = {
    folders: true,
  };

  return await fetchFormstackAPI(endpoint, method, body);
};

export const getFolderForms = async (folder) => {
  const url = `/form.json`;
  const method = "GET";
  const body = {
    folder: folder,
  };

  return await fetchFormstackAPI(url, method, body);
};

export const getFormById = async (formId) => {
  const endpoint = `/${formId}.json`;
  const method = "GET";

  return await fetchFormstackAPI(endpoint, method);
};

export const getFormFields = async (formId) => {
  const endpoint = `/form/${formId}/field.json`;
  const method = "GET";

  return await fetchFormstackAPI(endpoint, method);
};
