## Sequelize

Sequelize 是一个基于Promise的Node.js ORM. 它具有强大是事务支持、关联支持、读取和复制等功能

ORM 对象关系映射 Object Relational Mapping

通过对象来映射和操作数据库

### 模型

用来表述（描述）数据库表字段信息的对象，每一个模型对象表示数据库中的一个表，后续对数据库的操作都是通过对应的模型对象来完成的

## 定义模型

options: 模型(表)的设置

timestamps: 是否给每条记录添加 createdAt 和 updatedAt 字段，并在添加新数据和更新数据的时候自动设置这两个字段的值，默认为true

paranoid: 设置deletedAt字段，当删除一条记录的时候，并不是真的销毁记录，而是通过该字段来标识，即保留数据，进行假删除，默认为false

---

## 模型对象实例操作

- OM.get(key:String) 获取某个属性（字段）的值
- OM.set(key:String, value:any)  设置某个属性（字段）的值
- OM.validate() 验证模型数据

- OM.save()  验证该实例，如果通过验证，则持久化到数据库中
- OM.update(updates: Object) updates 要更新的字段，调用该方法等同于 set + save
- OM.destroy() 销毁该实例（假删除或真删除）
