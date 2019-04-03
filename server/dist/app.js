"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const koa_controllers_1 = require("koa-controllers");
const KoaBodyParser = require("koa-bodyparser");
const models_1 = require("./models");
let app = new Koa();
app.use(async (ctx, next) => {
    ctx.state.db = models_1.default;
    await next();
});
app.use(KoaBodyParser());
koa_controllers_1.useControllers(app, __dirname + '/controllers/**/*.js', {
    multipart: {
        dest: './uploads'
    }
});
app.listen(3002);
console.log('server is running at port 3002...');
//# sourceMappingURL=app.js.map