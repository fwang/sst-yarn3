import { createRequire as topLevelCreateRequire } from 'module';
const require = topLevelCreateRequire(import.meta.url);

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/lambda.js
async function handler() {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: "Hello World!"
  };
}
__name(handler, "handler");
export {
  handler
};
