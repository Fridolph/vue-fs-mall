"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const koa_controllers_1 = require("koa-controllers");
const models_1 = require("./models");
console.log('db: ', models_1.default);
let app = new Koa();
koa_controllers_1.useControllers(app, __dirname + '/controllers/**/*.js', {
    multipart: {
        dest: './uploads'
    }
});
app.listen(4000);
//# sourceMappingURL=app.js.map