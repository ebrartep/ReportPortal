<template>
  <div class="main-menu">
  <ul v-if="products.length > 0">
    <li v-for="product in products" :key="product"><a :href="'/rapor-detay/' + product.id">{{ product.title }}</a></li>
  </ul>
  </div>
</template>

<script>
import Vue from "vue";

import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
Vue.use(VueSidebarMenu);
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

import navMenuItems from "@/navigation/vertical";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import { BLink, BImg } from "bootstrap-vue";
import { provide, computed, ref } from "@vue/composition-api";
import useAppConfig from "@core/app-config/useAppConfig";
import { $themeConfig } from "@themeConfig";
import VerticalNavMenuItems from "./components/vertical-nav-menu-items/VerticalNavMenuItems.vue";
import useVerticalNavMenu from "./useVerticalNavMenu";
import axios from "axios";
import { SidebarMenu } from "vue-sidebar-menu";

export default {
  components: {
    VuePerfectScrollbar,
    VerticalNavMenuItems,
    BLink,
    BImg,
    SidebarMenu,
  },

  data() {
    return {
      url: "https://localhost:5001/api/Kullanici",
      items: [],
      accessTokenText: "",

 products: [
      { id: 1, title: "Hololens" },
      { id: 2, title: "Google Glass" },
      { id: 3, title: "PlayStation 5" }
    ],


	   menu: [
 {
                        header: true,
                        title: 'ALIŞAN A.Ş',
						icon: "http://www.alisangroup.com/css/images/logo-normal.png",
                        hiddenOnCollapse: true
                    },
                    {
                        href: '/',
                        title: 'Group1',
                        icon: 'fas fa-coffee',
                        child: [
                            {
                                href: "'/rapor-detay?raporId='+78878",
                                title: 'RAPOR1'
                            }
                        ]
                    },
					  {
                        title: 'Group2',
                        icon: 'fa fa-chart-area',
                        child: [
                            {
                                href: '/rapor-detay?raporId=8',
                                title: 'RAPOR2'
                            }
                        ]
                    },
					  {
                        title: 'Group3',
                        icon: 'fa fa-chart-area',
                        child: [
                            {
                                href: '/rapor-detay?raporId=9',
                                title: 'RAPOR3'
                            }
                        ]
                    },
                ],
	 
	}
  },
  created: function () {},
  mounted() {
    let self = this;
    this.$nextTick(() => {
      let req = {
        kullaniciAdi: "Adem.KALEM@alisangroup.com",
        sifre: "123456",
        token: "string",
        isIcMusteri: false,
      };
      let url = "https://localhost:5001/api/Kullanici";

      axios
        .post(url, req, { headers: { "content-type": "application/json" } })
        .then((res) => {
          console.log(res);
          //  alert(res.access_token);
          // alert(res.data[0].OnaycıKodu);
          console.log("Login success.");
          self.accessTokenText = res.data.powerBIToken;

          var uzunluk = res.data.groupListesi.length;
          for (var item = 0; item < uzunluk; item++) {
            self.items = res.data.groupListesi[item].groupAdi;

            console.log(self.items);
          }
        })
        .catch((err) => {
          console.error("Login failed.", err);
          debugger;
        });
    });
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },

  props: {
    isVerticalMenuActive: {
      type: Boolean,
      required: true,
    },
    toggleVerticalMenuActive: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const {
      isMouseHovered,
      isVerticalMenuCollapsed,
      collapseTogglerIcon,
      toggleCollapsed,
      updateMouseHovered,
    } = useVerticalNavMenu(props);

    const { skin } = useAppConfig();

    // Shadow bottom is UI specific and can be removed by user => It's not in `useVerticalNavMenu`
    const shallShadowBottom = ref(false);

    provide("isMouseHovered", isMouseHovered);

    const perfectScrollbarSettings = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
    };

    const collapseTogglerIconFeather = computed(() =>
      collapseTogglerIcon.value === "unpinned" ? "CircleIcon" : "DiscIcon"
    );

    // App Name
    const { appName, appLogoImage } = $themeConfig.app;

    return {
      navMenuItems,
      perfectScrollbarSettings,
      isVerticalMenuCollapsed,
      collapseTogglerIcon,
      toggleCollapsed,
      isMouseHovered,
      updateMouseHovered,
      collapseTogglerIconFeather,

      // Shadow Bottom
      shallShadowBottom,

      // Skin
      skin,

      // App Name
      appName,
      appLogoImage,
    };
  },
};
</script>

<style lang="scss">
@import "~@core/scss/base/core/menu/menu-types/vertical-menu.scss";
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');
</style>
