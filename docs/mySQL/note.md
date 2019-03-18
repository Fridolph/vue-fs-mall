## mySQL特点

- 数据以表格形式出现
- 表格中的每一行表示一组数据
- 表格中的每一列表示某组数据对应的字段（属性）
- 若干个这样的行和列就组成了一张表
- 若干个表格组成了一个库

mySQL服务就是维护了若干个这样的库
# 数据库

存储引擎 数据在计算器上的存储方式

MySQL常见存储引擎： InnoDB、MyISAM等

- InnoDB 优势在于提供了良好的事务处理、崩溃修复能力和并发控制。缺点是读写效率较差，占用的数据空间相对较大
- MyISAM 优势在于占用空间小，处理速度快。缺点是不支持事务的完整性和并发性


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
