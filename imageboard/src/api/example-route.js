import api from "./index";

//// btw export default means that when importing we can use like this:
//// E.g.
// import getExample from "./example-route";
// getExample();
export default {
    async getExample() {
        const response = await api.get("/"); // corresponds to our thingy in backend index.js !!
        console.log('request response: ', response); // so in f12 u can check out what else is in our response
        return response.data;
    },
};