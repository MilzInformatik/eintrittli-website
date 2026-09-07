// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import NavbarTitle from './NavbarTitle.vue'
import HomeHero from './HomeHero.vue'
import FeaturesIntro from './FeaturesIntro.vue'
import HomeSections from './HomeSections.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'nav-bar-title-before': () => h(NavbarTitle),
      'home-hero-before': () => h(HomeHero),
      'home-features-before': () => h(FeaturesIntro),
      'home-features-after': () => h(HomeSections)
    })
  }
} satisfies Theme
