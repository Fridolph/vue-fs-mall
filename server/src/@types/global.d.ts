import { Model } from 'sequelize'
import * as Koa from 'koa'

declare global {
  interface IConf {
    // [key: string]: any
    // [index: number]: any
    username: string,
    password: null|string,
    database: string,
    host: string,
    dialect: string,
    timezone: string
  }

  interface IDB {
    [key: string]: any
    [index: number]: any
  }
}

declare module 'koa'{
  interface IBody {
    [key: string]: any
  }
  interface Request {
    body: IBody | null | undefined
    rowBody: {} | null | undefined
  }
}
