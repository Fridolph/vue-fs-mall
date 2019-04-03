<template>
  <Header :style="`transition: all 0.2s ease;position:fixed;top: 0;left: ${collapsedWidth}px; width: calc( 100% - ${collapsedWidth}px )`">
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
import { Vue, Component, Prop } from 'vue-property-decorator';
import { IState, IGetters } from '@/store';

@Component
export default class LayoutSider extends Vue {
  get isCollapsed() {
    const state: IState = this.$store.state;
    return state.isCollapsed;
  }
  get collapsedWidth() {
    const getters: IGetters = this.$store.getters;
    return getters.collapsedWidth;
  }
  get menuitemClasses() {
    const getters: IGetters = this.$store.getters;
    return getters.menuitemClasses;
  }
}
</script>

<style lang="stylus">
.layout
  .ivu-layout-header
    background-color #515a6e
</style>
