<template>
  <div
    class="main-menu menu-fixed menu-accordion menu-shadow"
    :class="[
      {
        expanded:
          !isVerticalMenuCollapsed ||
          (isVerticalMenuCollapsed && isMouseHovered),
      },
      skin === 'semi-dark' ? 'menu-dark' : 'menu-light',
    ]"
    @mouseenter="updateMouseHovered(true)"
    @mouseleave="updateMouseHovered(false)"
  >
    <!-- main menu header-->
    <div class="expanded">
      <slot
        name="header"
        :toggleVerticalMenuActive="toggleVerticalMenuActive"
        :toggleCollapsed="toggleCollapsed"
        :collapseTogglerIcon="collapseTogglerIcon"
      >
        <ul class="nav navbar-nav flex-row" >
          <!-- Logo & Text -->
          <li class="nav-item mr-auto">
            <!-- <b-link class="navbar-brand" to="/">
              <span class="brand-logo">
                <b-img :src="appLogoImage" alt="logo" />
              </span>-->
            <b-link class="brand-logo">
              <img
                src="http://www.alisangroup.com/css/images/logo-normal.png"
              />
            </b-link>
          </li>

          <!-- Toggler Button -->
          <li class="nav-item nav-toggle" style="display: none">
            <b-link class="nav-link modern-nav-toggle">
              <feather-icon
                icon="XIcon"
                size="20"
                class="d-block d-xl-none"
                @click="toggleVerticalMenuActive"
              />
              <feather-icon
                :icon="collapseTogglerIconFeather"
                size="20"
                class="d-none d-xl-block collapse-toggle-icon"
                @click="toggleCollapsed"
              />
            </b-link>
          </li>
        </ul>
      </slot>
    </div>
    <!-- / main menu header-->

    <!-- Shadow -->
    <div :class="{ 'd-block': shallShadowBottom }" class="shadow-bottom" />

    <!-- main menu content-->
    <vue-perfect-scrollbar
      :settings="perfectScrollbarSettings"
      class="main-menu-content scroll-area"
      tagname="ul"
      @ps-scroll-y="
        (evt) => {
          shallShadowBottom = evt.srcElement.scrollTop > 0;
        }
      "
    >
      <vertical-nav-menu-items
        :items="menu"
        class="navigation navigation-main"
      />
    </vue-perfect-scrollbar>
    <!-- /main menu content-->
  </div>
</template>

<script>
import Vue from "vue";

import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
Vue.use(VueSidebarMenu);
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCoffee);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

import navMenuItems from "@/navigation/vertical";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import { BLink, BImg, BDropdown, BDropdownItem } from "bootstrap-vue";
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
    BDropdownItem,
    BDropdown,
  },

  data() {
    return {
      url: "https://localhost:5001/api/Kullanici",
      items: [],
      accessTokenText: "",
      menu: [
        {
          title: "Müşteri İlişkileri",
          icon: "HomeIcon",
          tag: "",
          children: [
            {
              title: "Basf Antrepo Stok",
              //    route:{path: '/rapor-detay/aaa/444'}
              //route:{path: 'rapor-detay', query: { raporId: 'test',groupId:'444' }}
              route: {
                name: "rapor-detay",
                params: { raporId: "6095e40b-adf1-4388-aac4-f6ee44264b46", groupId: "7cea83ff-f49b-4666-af5c-7063386d40da" },
              },
            },
            {
              title: "Basf Depo Stok",
              // route:{path: 'rapor-detay', query: { raporId: 'public',groupId:'111' }}

              // route:{path: 'rapor-detay/:raporId/:groupId', params: { raporId: 'private',groupId:'11' }}
              // route:{path: '/rapor-detay/bbb/111'}
              route: {
                name: "rapor-detay",
                params: { raporId: "a9637411-880d-4545-8c7c-1de1b5cbfe3a", groupId: "7cea83ff-f49b-4666-af5c-7063386d40da" },
              },
            },
          ],
        },
		{
          title: "Alos Raporları",
          icon: "HomeIcon",
          tag: "",
          children: [
            {
              title: "Kiralık Araç Mütabakat Liste",
              //    route:{path: '/rapor-detay/aaa/444'}
              //route:{path: 'rapor-detay', query: { raporId: 'test',groupId:'444' }}
              route: {
                name: "rapor-detay",
                params: { raporId: "90ff8231-dbcb-4a93-a30f-1a292836827e", groupId: "f85a3f61-8062-4096-80b1-b397aa513147" },
              },
            },
            {
              title: "Faturası Kesilmemiş Alışlar",
              // route:{path: 'rapor-detay', query: { raporId: 'public',groupId:'111' }}

              // route:{path: 'rapor-detay/:raporId/:groupId', params: { raporId: 'private',groupId:'11' }}
              // route:{path: '/rapor-detay/bbb/111'}
              route: {
                name: "rapor-detay",
                params: { raporId: "781cb49c-8097-459e-aca3-2cd67f1433d6", groupId: "f85a3f61-8062-4096-80b1-b397aa513147" },
              },
            },
          ],
        },
      ],
    };
  },

  created: function () {},
  mounted() {
   /* let self = this;
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
    });*/
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
      shallShadowBottom,
      skin,
      appName,
      appLogoImage,
    };
  },
};
</script>

<style lang="scss">
@import "~@core/scss/base/core/menu/menu-types/vertical-menu.scss";
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600");
</style>
