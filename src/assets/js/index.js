import Firebase from "./utils/Firebase";


class Main {
  constructor() {
    const ex = new Firebase();
    ex.console(" web starter kit");

  }
}


window.addEventListener("DOMContentLoaded", () => {
  new Main();

});
