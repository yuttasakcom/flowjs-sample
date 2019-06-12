// @flow

import Koa from "koa";

const app = new Koa();

const port = process.env.PORT || "3000";

app.listen(port);

console.log(`Server running at http://localhost:${port}`);
