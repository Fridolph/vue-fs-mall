## sequelize db:seed:all 出现错误

MYSQL:Unknown column '字段名' in 'field list' 错误

这个错误是说表中的这个字段不存在

而在检查SQL语句完全无误后，可以检查下表中的数据类型设置或者字符编码格式. 比如我出现这个错误时，是因为我本身数据库使用的是gbk格式，但是后来我加了个字段是utf8编码格式的，表中字段编码格式不同，导致了这个错误

实际上 是因为在第一次migrate时写错了所以mysql少了一列，但db:seed:all是按完全态来生成的，最终报错，一行行调了好久才发现… 所以这种情况下，如果有TS的interface说不准很快就能debug到位置了~
