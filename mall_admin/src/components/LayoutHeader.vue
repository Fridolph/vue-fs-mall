<template>
  <Header :style="`transition: all 0.4s ease-in-out;position:fixed;top: 0;left: ${collapsedWidth}px; width: calc(100% - ${collapsedWidth}px)`">
    <Dropdown
      trigger="click"
      style="float: right"
    >
      <a href="javascript:void(0)">
        Admin
        <Icon type="ios-arrow-down"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem>退出</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </Header>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class LayoutSider extends Vue {
  @Prop(Boolean) isCollapsed: boolean

  get menuitemClasses(): string[] {
    return [
      'menu-item',
      this.isCollapsed ? 'collapsed-menu' : ''
    ]
  }

  get collapsedWidth(): number {
    return this.isCollapsed ? 78 : 200
  }
}
</script>
