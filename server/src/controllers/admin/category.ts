import { Controller, Get, Ctx, Post } from 'koa-controllers'
import {Context} from 'koa'
import {Model} from 'sequelize'

@Controller
export class AdminCategory {
  @Get('/admin/category')
  public async index(@Ctx ctx: Context) {
    try {
      let categoryModel: Model<any, any> = ctx.state.db['category']
      let categories = await categoryModel.findAll()
      ctx.body = {
        code: 0,
        data: categories
      }
    } catch (e) {
      ctx.body = {
        code: 1,
        msg: 'something error...'
      }
    }
  }

  @Post('/admin/category/add')
  public async add(@Ctx ctx: Context) {
    console.log(ctx.request.body)
    let {id, name} = ctx.request.body
    if (name == '') {
      ctx.body = { code: 1, msg: '分类名称不能为空' }
      return
    }

    let categoryModel: Model<any, any> = ctx.state.db['category']
    let category = await categoryModel.build({
      pid: id,
      name
    })
    await category.save()
    ctx.body = { code: 0, data: category, msg: '成功添加顶级分类' }
  }

  @Post('/admin/category/remove')
  public async remove(@Ctx ctx: Context) {
    let {id} = ctx.request.body
    let categoryModel: Model<any, any> = ctx.state.db['category']
    // let category = await categoryModel
  }
}
