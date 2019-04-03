<template>
  <div id="app">
    <div class="layout">
      <Layout :style="{minHeight: '100vh'}">

        <LayoutSider />

        <Layout :style="`transition:all 0.2s ease;margin-left: ${collapsedWidth}px`">

          <LayoutHeader />

          <Content class="router-view-content">
            <Breadcrumb :style="{margin: '16px 0'}">
              <BreadcrumbItem>{{ routeName }}</BreadcrumbItem>
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
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IState, IGetters } from '@/store';
import LayoutSider from '@/components/LayoutSider.vue';
import LayoutHeader from '@/components/LayoutHeader.vue';

@Component({
  components: {
    LayoutSider,
    LayoutHeader,
  },
})
export default class App extends Vue {
  public isCollapsed: boolean = false;

  get collapsedWidth(): number {
    const getters: IGetters = this.$store.getters;
    return getters.collapsedWidth;
  }

  get routeName(): string {
    return this.$route.name;
  }
}
</script>

<style lang="stylus">
body
  min-width 1000px
  min-height 600px
  overflow hidden

.layout
  .router-view-content
    width: 100%
    margin-top: 64px
    height: calc(100vh - 64px)
    padding: 0 16px 16px
    overflow: hidden
    overflow-y: auto
</style>
