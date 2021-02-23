// npm i -S mobx
import { extendObservable } from "mobx";

class Info {
  constructor() {
    extendObservable(this, {
      name: "",
      linkedinUser: "",
      githubUser: "",
      twitterUser: "",
      profilePicture: "https://i.imgur.com/j2maKR4.png",
      HolbieUrl: "https://intranet.hbtn.io",
      auth_token: "",
      projectName: "",
      project: "",
      tasks: "",
      correctionId: "",
      checks: "",
      proxy: "https://thingproxy.freeboard.io/fetch/",
    });
  }
}
export default new Info();
