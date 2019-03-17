## mySQL特点

- 数据以表格形式出现
- 表格中的每一行表示一组数据
- 表格中的每一列表示某组数据对应的字段（属性）
- 若干个这样的行和列就组成了一张表
- 若干个表格组成了一个库

mySQL服务就是维护了若干个这样的库

## 操作

### 创建

```bash
# 连接
mysql -uroot -p

# 查看所有数据库
show databases;

# 选择要操作的数据库
use <database>;

# 创建新的数据库
create database <database>;
```


查询

```bash
connection.query(SQL语句)

# 返回值依据其操作来决定
SELECT: [数据集合，字段集合]
```
