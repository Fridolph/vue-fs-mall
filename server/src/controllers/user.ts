
import { Controller, Get, Ctx, Post } from 'koa-controllers'
import { Context } from 'koa'
// import db from '../models'
import { Model } from 'sequelize'

@Controller
export class User {

  @Get('/user')
  public async user( @Ctx ctx: Context ) {
    let userList = await (<Model<any, any>>ctx.state.db['user']).findAll()
    // let userList = await (<Model<any, any>>ctx.state.db['user']).scope('zmouse').findAll()
    ctx.body = userList
  }
}
