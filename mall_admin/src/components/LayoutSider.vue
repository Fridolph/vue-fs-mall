<template>
  <Sider
    collapsible
    :collapsed-width="collapsedWidth"
    v-model="isCollapsed"
    class="fixed-sider"
    @on-collapse="handleCollapse"
  >
    <h1 class="logo">
      <Icon type="logo-javascript" />
      <span
        style="margin-left: 10px;font-size: 20px"
        v-show="!isCollapsed"
      >Mall CMS</span>
    </h1>
    <Menu
      active-name="1-2"
      theme="dark"
      width="auto"
      :class="menuitemClasses"
    >
      <MenuItem name="1-1" to="/">
        <Icon type="ios-navigate"></Icon>
        <span>Option 1</span>
      </MenuItem>
      <MenuItem name="1-2" to="/about">
        <Icon type="ios-alarm-outline" />
        <span>Option 2</span>
      </MenuItem>
      <MenuItem name="1-3" to="/about">
        <Icon type="md-aperture" />
        <span>Option 3</span>
      </MenuItem>
    </Menu>
  </Sider>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class LayoutSider extends Vue {
  @Prop(Boolean) isCollapsed: boolean

  // 菜单数组
  private menus: Array<object> = []

  get menuitemClasses(): string[] {
    return [
      'menu-item',
      this.isCollapsed ? 'collapsed-menu' : ''
    ]
  }

  get collapsedWidth(): number {
    return this.isCollapsed ? 78 : 200
  }

  created() {

  }

  handleCollapse(status: boolean): void {
    console.log('status: ', status)
    this.$emit('collapse', status)
  }
}
</script>
