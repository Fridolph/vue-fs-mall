import {Controller, Get, Ctx, Post} from 'koa-controllers'
import {Context} from 'koa'

/**
 * 控制器是通过class来实现的，但不是随便一个class就能成为控制器
 * 类似继承，koa-controller为我们提供了一个装饰器 Controller
 * 通过这个装饰器我们就可以把一个普通类变成具有控制器特征的 Koa路由控制类
 */
@Controller
export class Main {

  @Get('/')
  public async index(@Ctx ctx: Context) {
    // 我们希望用户在通过get方式访问 / 时执行该方法
    // 我们就可以使用 @Get 装饰器来 装饰该方法
    ctx.body = 'hello Koa TS'
  }

  @Post('/')
  public async indexPost(@Ctx ctx: Context) {
    ctx.body = {
      code: 0,
      data: 'hello Post Index'
    }
  }
}
