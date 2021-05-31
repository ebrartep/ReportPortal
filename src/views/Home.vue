<template>
  <div class="overflow-auto">
    <!-- submit buttons -->
    <b-button type="submit" variant="primary" block @click="PowerBIReport">
      Rapor Getir
    </b-button>
    <div id="reportContainer2" style="width: 100%; height: 800px"></div>
  </div>
</template>

<script>
import * as pbi from "powerbi-client";

import {} from "bootstrap-vue";
import vSelect from "vue-select";
import store from "@/store/index";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import AxiosPlugin from "vue-axios-cors";
import Vue from "vue";
import { BButton } from "bootstrap-vue";
import axios from "axios";

Vue.use(AxiosPlugin);
export default {
  components: {
    BButton,
  },
  data() {
    return {
      accessTokenText: "",
    };
  },
  created: function () {},
  mounted() {
   /* let self = this;
    this.$nextTick(() => {
		console.log(this.$route.name);
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
          console.log(self.accessTokenText);
        })
        .catch((err) => {
          console.error("Login failed.", err);
          debugger;
        });
    });*/
  },
  computed: {},

  methods: {
    PowerBIReport() {
      let self = this;

      var txtEmbedUrl2 =
        "https://app.powerbi.com/reportEmbed?reportId=cb4288cb-6924-479b-9bca-4f58748c8ea6&groupId=2fd1b375-bbff-492e-b07f-2fa8737a254d";

      // Read report Id from textbox
      var reportId = "cb4288cb-6924-479b-9bca-4f58748c8ea6";

      var groupId = "2fd1b375-bbff-492e-b07f-2fa8737a254d";

      var permissions = pbi.models.Permissions.All;
		debugger
      var config = {
        type: "report",
        tokenType: pbi.models.TokenType.Aad,
        accessToken: self.accessTokenText,
        embedUrl: txtEmbedUrl2,
        id: reportId,
        permissions: permissions,
        settings: {
          panes: {
            filters: {
              visible: true,
            },
            pageNavigation: {
              visible: true,
            },
          },
        },
      };

      let powerbi = new pbi.service.Service(
        pbi.factories.hpmFactory,
        pbi.factories.wpmpFactory,
        pbi.factories.routerFactory
      );
      var reportContainer = document.getElementById("reportContainer2");
      var report = powerbi.embed(reportContainer, config);

      report.off("loaded");

      report.off("rendered");

      report.on("error", function () {
        // this.report.off("error");
      });
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>