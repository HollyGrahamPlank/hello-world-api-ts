import express from "express";
import * as http from "http";
import { API_SPEC_PATH } from "./config/apiValidator.config.js";
import { HTTP_PORT } from "./config/http.config.js";
import createOpenApiValidatorMiddleware from "./middleware/openApiValidator.middleware.js";

async function runApp(): Promise<void> {
  // Construct the express app with an HTTP server explicitly
  const app = express();
  const httpServer = http.createServer(app);

  //
  //  Middleware
  //

  app.use(express.json());
  app.use(createOpenApiValidatorMiddleware(API_SPEC_PATH));

  //
  //  EXECUTE
  //

  // Start listening on the HTTP server. If there's an error, REJECT!
  // (we promisify this so that in the future we can easily wait for
  // the server to start before doing some other action.)
  await new Promise<void>((resolve, reject) => {
    httpServer.listen(HTTP_PORT, () => resolve());
    httpServer.on("error", (err) => reject(err));
  });

  console.log(`Server running on port ${HTTP_PORT}`);
}

export default runApp;
