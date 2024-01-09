const constants = {
    formstackApi: {
        baseUrl: process.env.FORMSTACK_API_ENDPOINT,
        tokenEndpoint: process.env.FORMSTACK_API_TOKEN,
        clientId: process.env.FORMSTACK_API_CLIENT_ID,
        clientSecret: process.env.FORMSTACK_API_CLIENT_SECRET,
    },
};

export default constants;
