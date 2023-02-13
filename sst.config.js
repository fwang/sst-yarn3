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

function MyStack({ stack }) {
  const api = new Api(stack, "Api", {
    routes: {
      "GET /": "src/lambda.handler",
    },
  });

  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
