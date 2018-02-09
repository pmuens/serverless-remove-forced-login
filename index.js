class RemoveForcedLogin {
  constructor() {
    this.originalToken = process.env.SERVERLESS_TOKEN;
    this.fakeToken = "canIHazToken?!";
    this.hooks = {
      // serverless run
      "before:run:run": this.openSesame.bind(this),
      "after:run:run": this.closeSesame.bind(this),
      // serverless emit
      "before:emit:emit": this.openSesame.bind(this),
      "after:emit:emit": this.closeSesame.bind(this)
    };
  }

  openSesame() {
    process.env.SERVERLESS_TOKEN = this.fakeToken;
  }

  closeSesame() {
    process.env.SERVERLESS_TOKEN = this.originalToken;
  }
}

module.exports = RemoveForcedLogin;
