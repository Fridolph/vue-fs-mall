<template>
  <Sider
    collapsible
    :collapsed-width="collapsedWidth"
    v-model="isCollapsed"
    class="fixed-sider"
    @on-collapse="handleCollapse"
  >
    <router-link class="logo" to="/">
      <Icon type="logo-javascript" />
      <span
        style="margin-left: 10px;font-size: 20px"
        v-show="!isCollapsed"
      >Mall CMS</span>
    </router-link>
    <Menu
      :active-name="routeNameActive"
      theme="dark"
      width="auto"
      :class="menuitemClasses"
    >
      <!-- <MenuItem name="1-1" to="/">
        <Icon type="ios-navigate"></Icon>
        <span>Option 1</span>
      </MenuItem> -->
      <MenuItem v-for="v in menus" :key="v.name" :name="v.name" :to="v.path">
        <Tooltip v-if="isCollapsed" :content="v.name" transfer placement="right">
          <Icon :type="v.iconType"></Icon>
        </Tooltip>
        <Icon v-else :type="v.iconType"></Icon>
        <span>{{ v.name }}</span>
      </MenuItem>
    </Menu>
  </Sider>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { IState, IGetters } from '@/store';
import menuItems from '@/data/menuItems';

@Component
export default class LayoutSider extends Vue {
  // 菜单数组
  private menus: object[] = [];

  get isCollapsed(): boolean {
    return this.$store.state.isCollapsed;
  }

  get routeNameActive() {
    const state: IState = this.$store.state;
    return state.currentMenuitem;
  }

  get collapsedWidth() {
    const getters: IGetters = this.$store.getters;
    return getters.collapsedWidth;
  }
  get menuitemClasses() {
    const getters: IGetters = this.$store.getters;
    return getters.menuitemClasses;
  }

  public created() {
    // console.log(this.$route)
    this.menus = menuItems;
  }

  public handleCollapse(status: boolean): void {
    this.$store.commit('setCollapse', status);
  }
}
</script>

<style lang="stylus">
.layout
  .logo
    display block
    color #fff
    line-height 63px
    text-align center
    i
      font-size 24px
      transform translateY(-4px)

  .fixed-sider
    position: fixed
    height: 100vh
    left: 0
    overflow: auto
    .menus
      span
        display: inline-block
        overflow: hidden
        width: 69px
        text-overflow: ellipsis
        white-space: nowrap
        vertical-align: bottom
        transition: width .2s ease .2s

    .menus
      i
        transform: translateY(-2px)
        transition: font-size .2s ease, transform .2s ease
        vertical-align: middle
        font-size: 18px

    .collapsed-menu
      span
        width: 0px
        transition: width .2s ease

    .collapsed-menu
      i
        transform: translateX(5px)
        transition: font-size .2s ease .2s, transform .2s ease .2s
        vertical-align: middle
        font-size: 22px
</style>
