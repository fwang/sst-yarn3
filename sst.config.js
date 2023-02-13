import { Api, Stack } from "sst/constructs";

export default {
  config() {
    return {
      name: "sst-yarn3",
      region: "us-east-1",
    };
  },
  async stacks(app) {
    app.setDefaultRemovalPolicy("destroy");
    app.stack(MyStack);
  },
};

class MyStack extends Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Create a HTTP API
    const api = new Api(this, "Api", {
      routes: {
        "GET /": "src/lambda.handler",
      },
    });

    // Show the endpoint in the output
    this.addOutputs({
      ApiEndpoint: api.url,
    });
  }
}
