<template>
  <div id="app">
    <div class="layout">
      <Layout :style="{minHeight: '100vh'}">

        <LayoutSider @collapse="collapse" :isCollapsed="isCollapsed" />

        <Layout :style="`transition:all 0.4s ease-in-out;margin-left: ${collapsedWidth}px`">

          <LayoutHeader :isCollapsed="isCollapsed" />

          <Content class="router-view-content">
            <Breadcrumb :style="{margin: '16px 0'}">
              <BreadcrumbItem>Home</BreadcrumbItem>
              <BreadcrumbItem>Components</BreadcrumbItem>
              <BreadcrumbItem>Layout</BreadcrumbItem>
            </Breadcrumb>

            <Card>
              <div style="min-height: calc(100vh - 167px)">
                <router-view />
              </div>
            </Card>

          </Content>

        </Layout>
      </Layout>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import LayoutSider from '@/components/LayoutSider.vue'
import LayoutHeader from '@/components/LayoutHeader.vue'

@Component({
  components: {
    LayoutSider,
    LayoutHeader
  }
})
export default class App extends Vue {
  isCollapsed: boolean = false

  get menuitemClasses(): string[] {
    return [
      'menu-item',
      this.isCollapsed ? 'collapsed-menu' : ''
    ]
  }

  get collapsedWidth(): number {
    return this.isCollapsed ? 78 : 200
  }

  collapse(status: boolean): void {
    this.isCollapsed = status
  }
}
</script>

<style lang="stylus">
.layout
  .logo
    color #fff
    line-height 63px
    text-align center

  .fixed-sider
    position: fixed
    height: 100vh
    left: 0
    overflow: auto

  .router-view-content
    width: 100%
    margin-top: 64px
    height: calc(100vh - 64px)
    padding: 0 16px 16px
    overflow: hidden
    overflow-y: auto

  .ivu-layout-header
    background-color #515a6e

  .layout-con
    height: 100%
    width: 100%

  .menu-item span
    display: inline-block
    overflow: hidden
    width: 69px
    text-overflow: ellipsis
    white-space: nowrap
    vertical-align: bottom
    transition: width .2s ease .2s

  .menu-item i
    transform: translateX(0px)
    transition: font-size .2s ease, transform .2s ease
    vertical-align: middle
    font-size: 16px

  .collapsed-menu span
    width: 0px
    transition: width .2s ease

  .collapsed-menu i
    transform: translateX(5px)
    transition: font-size .2s ease .2s, transform .2s ease .2s
    vertical-align: middle
    font-size: 22px

</style>
