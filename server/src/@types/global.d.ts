import { Model } from 'sequelize'

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
