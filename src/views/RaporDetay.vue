<template>
  <div>
    <rotate-square2 v-if="isLoading"></rotate-square2>


    <div class="overflow-auto">
      Rapor Id : {{ $route.params.raporId }} Group Id :
      {{ $route.params.groupId }}

      <input type="hidden" v-model="$route.params.groupId" />

      <div id="refreshDiv">
        <!-- <div :ref="'dynamicId'+ dynamicId" style="width: 100%; height: 800px"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import * as pbi from "powerbi-client";

import { RotateSquare2 } from "vue-loading-spinner";

import Vue from "vue";
import AxiosPlugin from "vue-axios-cors";
import axios from "axios";
import VueSpinners from 'vue-spinners'
import { SquareSpinner } from 'vue-spinners'

Vue.component('square', SquareSpinner)

Vue.use(VueSpinners)
Vue.use(AxiosPlugin);
export default {
  components: {
	  RotateSquare2
  },
  data() {
    return {
      dynamicId: 1,
      divStatus: true,
      accessTokenText: "",
      raporId: this.$route.params.raporId,
      groupId: this.$route.params.groupId,
      isLoading: true,
    };
  },
  created: function () {},
  watch: {
    $route(to, from) {
      this.PowerBIReport();
    },
  },
  mounted() {
    this.PowerBIReport();
    /*  alert("ebrar tıkladı");
    let self = this;
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
debugger
 var raporId = this.raporId;
	  console.log(raporId);

       var groupId = this.groupId;
	  console.log(groupId);
 var txtEmbedUrl2 =
        "https://app.powerbi.com/reportEmbed?reportId="+raporId+"&groupId="+groupId;

      var permissions = pbi.models.Permissions.All;
		debugger
      var config = {
        type: "report",
        tokenType: pbi.models.TokenType.Aad,
        accessToken: self.accessTokenText,
        embedUrl: txtEmbedUrl2,
        id: raporId,
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
    


        })
        .catch((err) => {
          console.error("Login failed.", err);
          debugger;
        });
    });

*/
  },
  computed: {},

  methods: {
    PowerBIReport() {
      this.isLoading = true;
      debugger;
      let self = this;
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
            debugger;
            console.log(res);
            //  alert(res.access_token);
            // alert(res.data[0].OnaycıKodu);
            console.log("Login success.");
            self.accessTokenText = res.data.powerBIToken;
            console.log(self.accessTokenText);
            debugger;
            var raporId = this.$route.params.raporId;
            console.log(raporId);

            var groupId = this.$route.params.groupId;
            console.log(groupId);
            var txtEmbedUrl2 =
              "https://app.powerbi.com/reportEmbed?reportId=" +
              raporId +
              "&groupId=" +
              groupId;

            var permissions = pbi.models.Permissions.All;
            debugger;
            var config = {
              type: "report",
              tokenType: pbi.models.TokenType.Aad,
              accessToken: self.accessTokenText,
              embedUrl: txtEmbedUrl2,
              id: raporId,
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
            //self.raporGoster = true;
            debugger;
            //var reportContainer = document.getElementById(_id);
            let _id = "dynamicId" + this.dynamicId;
            //var reportContainer = this.$refs[_id];
            $("#refreshDiv").html("");
            $("#refreshDiv").html(
              '<div id="' +
                _id +
                '" style="width: 100%; height: 800px"></div></div>'
            );
            var reportContainer = document.getElementById(_id);
            var report = powerbi.embed(reportContainer, config);
            debugger;

            this.dynamicId = this.dynamicId + 1;
            report.off("loaded");

            report.off("rendered", function () {});

            report.on("error", function () {
              // this.report.off("error");
            });
            this.isLoading = false;
          })
          .catch((err) => {
            console.error("Login failed.", err);
            this.isLoading = false;

            debugger;
          });
      });
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
#loading {
  position: absolute;
  z-index: 1000;
  background-color: white;
  height: 100vh;
  width: 100vw;
  text-align: center;
  line-height: 100vh;
}
.img {
  position: relative;
  margin: auto;
  margin-top: 20%;
}
</style>