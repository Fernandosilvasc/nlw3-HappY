import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.66:3333",
});

export default api;

// baseURL  ==>
//    #########---MOBILE---########
//    get your current IP and increment baseURL: "http://{currentIP}:{PORT number}"
//    #########---EMULATOR---########
//    to IOS use : "http://localhost:{PORT number}"
//    to ANDROID : first go to terminal and type "adb reverse tcp:{PORT number} tcp:{PORT number}" and after that use "http://localhost:{PORT number}"