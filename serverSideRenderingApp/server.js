import fastify from "fastify";
import fastifyStatic from "@fastify/static";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";
import { renderToString } from "react-dom/server";
import { createElement as h } from "react";
import App from "./App.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const shell = readFileSync(path.join(__dirname, "dist", "index.html"), "utf8");

const app = fastify();

app.register(fastifyStatic, {
  root: path.join(__dirname, "dist"),
});

const parts = shell.split("<!-- SSR content will be injected here -->"); // split the HTML shell into two parts at the placeholder comment, make sure to include the same comment in your index.html file where you want the React app to be injected
app.get("/", (req, reply) => {
  reply.raw.write(parts[0]); // flush the first part of the HTML shell
  const reactApp = renderToString(h(App)); // render the React app to a string
  reply.raw.write(reactApp); // write the rendered React app to the response
  reply.raw.write(parts[1]); // flush the remaining part of the HTML shell
  reply.raw.end(); // end the response
});

app.listen({
  port: 3000,
});

// whenever I change my server code, I need to restart the server for the changes to take effect. We also need to run npm run build to rebuild the client-side code after making changes to it, since the server is serving the static files from the dist directory.
