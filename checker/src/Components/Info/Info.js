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
      auth_token: "",
      project: "",
      tasks: "",
      checks: "",
    });
  }
}
export default new Info();
