class MySQL {
  host: string
  port: number
  username: string
  password: string
  dbname: string

  public static instance: null|MySQL

  private constructor(
    host = '127.0.0.1',
    port = 3306,
    username = '',
    password = '',
    dbname = ''
  ) {
    this.host = host
    this.port = port
    this.username = username
    this.password = password
    this.dbname = dbname
  }

  public static getInstance() {
    if (!MySQL.instance) {
      MySQL.instance = new MySQL()
    }
    return MySQL.instance
  }

  query() {}
  insert() {}
  update() {}
}

let db = MySQL.getInstance()
db.query()
db.update()
db.insert()
