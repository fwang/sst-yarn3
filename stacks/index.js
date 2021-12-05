import MyStack from "./MyStack";

export default async function main(app) {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "nodejs12.x",
  });

  new MyStack(app, "my-stack");
}
