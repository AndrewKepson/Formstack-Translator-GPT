import axios from "axios";
import ReactHtmlParser, { convertNodeToElement } from "react-html-parser";

const FORMSTACK_CLIENT_ID = null;

export const formsApi = axios.create({
  baseURL: `https://www.formstack.com/api/v2`,
  //   params: {
  //     api_key: ``,
  //   },
});

export const processFormHTML = (html) => {
  const htmlElements = ReactHtmlParser(html)
    .filter((el) => el !== null)
    .map((el) => el.props.children)
    .filter((el) => el.type === "body");
  // const body = htmlElements[0].props.children.filter(el => el.type === 'body')
  // const body = htmlElements
  // const form = body.props.children[0]

  return htmlElements;
};
