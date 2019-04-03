"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_controllers_1 = require("koa-controllers");
let AdminCategory = class AdminCategory {
    async index(ctx) {
        try {
            let categoryModel = ctx.state.db['category'];
            let categories = await categoryModel.findAll();
            ctx.body = {
                code: 0,
                data: categories
            };
        }
        catch (e) {
            ctx.body = {
                code: 1,
                msg: 'something error...'
            };
        }
    }
    async add(ctx) {
        let { pid, name } = ctx.request.body;
        if (name == '') {
            ctx.body = { code: 1, msg: '分类名称不能为空' };
            return;
        }
        let categoryModel = ctx.state.db['category'];
        let category = await categoryModel.build({
            pid,
            name
        });
        await category.save();
        ctx.body = { code: 0, data: category, msg: '成功添加顶级分类' };
    }
    async remove(ctx) {
        let { id } = ctx.request.body;
        let categoryModel = ctx.state.db['category'];
    }
};
__decorate([
    koa_controllers_1.Get('/admin/category'),
    __param(0, koa_controllers_1.Ctx),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminCategory.prototype, "index", null);
__decorate([
    koa_controllers_1.Post('/admin/category/add'),
    __param(0, koa_controllers_1.Ctx),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminCategory.prototype, "add", null);
__decorate([
    koa_controllers_1.Post('/admin/category/remove'),
    __param(0, koa_controllers_1.Ctx),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminCategory.prototype, "remove", null);
AdminCategory = __decorate([
    koa_controllers_1.Controller
], AdminCategory);
exports.AdminCategory = AdminCategory;
//# sourceMappingURL=category.js.map