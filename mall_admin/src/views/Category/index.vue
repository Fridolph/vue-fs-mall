<template>
  <div class="page-category">
    <Tabs value="分类管理">
      <TabPane
        label="分类管理"
        name="分类管理"
      >
        <div class="controll-wrapper">
          <Button type="primary" @click="appendModal(0)">添加顶级分类</Button>
          <Tree
            :data="categoriesTree"
            :render="renderContent"
          ></Tree>
        </div>
      </TabPane>
      <TabPane
        label="添加分类"
        name="添加分类"
      >
        添加分类
      </TabPane>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface ICategoryItem {
  id: number
  pid: number
  nodeKey: number,
  name: string,
  children: Array<any> | null,
  createdAt?: string,
  updatedAt?: string
}

@Component
export default class Category extends Vue {
  // 原始数据
  categories: object[] = []
  // tree化后的数据
  categoriesTree: object[] = []
  addCategroyModal: boolean = false
  addCategoryLoading: boolean = false
  currentCategoryName: string = ''

  buttonProps: object = {
    type: 'default',
    size: 'small',
  }

  created() {
    this.getCategories();
  }

  async getCategories() {
    try {
      let res = await this.$axios.get('/api/admin/category')
      // console.log('data: ', res)
      if (res.code === 0) {
        this.categories = res.data
        this.categoriesTree = this.formatTree(0)
        console.log('categoriesTree: ', this.categoriesTree)
      }
    } catch (e) {
      console.error(e)
    }
  }

  formatTree(id: number): any[] {
    let data = this.categories.filter((item: any) => item.pid === id)
    data.forEach((item: any) => {
      item.children = this.formatTree(item.id)
    })
    return data
  }

  renderContent(h, { root, node, data }) {
    return h('span', {
      style: {
        display: 'inline-block',
        width: '100%'
      }
    }, [
        h('span', [
          h('Icon', {
            props: {
              type: 'ios-paper-outline'
            },
            style: {
              marginRight: '8px'
            }
          }),
          h('span', data.name)
        ]),
        h('span', {
          style: {
            display: 'inline-block',
            float: 'right',
            marginRight: '32px'
          }
        }, [
            h('Button', {
              props: Object.assign({}, this.buttonProps, {
                icon: 'ios-add'
              }),
              style: {
                marginRight: '8px'
              },
              on: {
                click: () => { this.appendModal(data.pid) }
              }
            }),
            h('Button', {
              props: Object.assign({}, this.buttonProps, {
                icon: 'ios-remove'
              }),
              on: {
                click: () => { this.removeModal(root, node, data) }
              }
            })
          ])
      ]);
  }

  appendModal(pid: number) {
    this.$Modal.confirm({
      onOk: () => {
        this.addCategory(pid)
      },
      render: h => {
        return h('div', [
          h('h4', '添加分类'),
          h('Input', {
            props: {
              placeholder: '请输入要添加的分类名'
            },
            on: {
              input: (val: string) => {
                this.currentCategoryName = val
              }
            }
          })
        ])
      }
    })
  }

  async addCategory(pid: number) {
    // pid: 0 顶级
    this.addCategoryLoading = true
    try {
      let res = await this.$axios.post('/api/admin/category/add', {
        pid,
        name: this.currentCategoryName
      })
      if (res.code === 0) {
        await this.getCategories()
        this.$Message.success(`添加分类: ${this.currentCategoryName}`)
        this.currentCategoryName = ''
        this.addCategoryLoading = false
      }
    } catch (e) {
      console.error(e)
      this.addCategoryLoading = false
    }
  }

  async append(data: ICategoryItem) {
    console.log('append', data)
    // const children = data.children || []
    // try {
    //   let res = await this.$axios.post('/api/admin/category/add', {
    //     pid: data.pid,
    //     name: '新增节点'
    //   })
    //   if (res.code === 0) {
    //     children.push(res.data)
    //   }
    // } catch (e) {
    //   console.error(e)
    // }

    // children.push({
    //   name: 'appended node',
    //   expand: true
    // });
    // this.$set(data, 'children', children)
  }

  removeModal(root, node, data) {
    // console.log(node, data)
    // const parentKey = root.find(el => el === node).parent
    // const parent = root.find(el => el.nodeKey === parentKey).node
    // const index = parent.children.indexOf(data)
    // parent.children.splice(index, 1)
    this.$Modal.confirm({
      title: '删除分类',
      content: `确定删除分类 - <b>${data.name}</b>`,
      onOk: () => {
        console.log('确定删除')
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.controll-wrapper
  width 600px
</style>
