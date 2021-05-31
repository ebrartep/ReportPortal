<template>
  <div class="overflow-auto">

    <b-table id="my-table" :fields="fields" :items="items" striped responsive>
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>
      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col md="4" class="mb-1">
              <strong>Ad Soyad : </strong>{{ row.item.Ad +" "+row.item.Soyad }}
            </b-col>

            <b-col md="4" class="mb-1">
              <strong>Sicil No : </strong>{{ row.item.SicilNo }}
            </b-col>
            <b-col md="4" class="mb-1">
              <strong>Yönetici Ad Soyad : </strong>{{row.item.BYoneticiAd + " " +row.item.BYoneticiSoyad}}
            </b-col>
          </b-row>

          <b-button
            size="sm"
            variant="outline-secondary"
            @click="row.toggleDetails"
          >
            Hide Details
          </b-button>
        </b-card>
      </template>
      <template #cell(actions)="row">
        <b-button
          size="sm"
          @click="detailUserModal(row.item, row.item.SicilNo, $event.target)"
          class="mr-1"
        >
          Info modal
        </b-button>
        <b-button size="sm" @click="toggle(item.SicilNo)">
          {{ row.detailsShowing ? "Hide" : "Show" }} Details
        </b-button>
      </template>
      <template #cell(show_details)="row">
        <b-form-checkbox
          v-model="row.detailsShowing"
          plain
          class="vs-checkbox-con"
          @change="row.toggleDetails"
        >
          <span class="vs-checkbox">
            <span class="vs-checkbox--check">
              <i class="vs-icon feather icon-check" />
            </span>
          </span>
          <span class="vs-label">{{
            row.detailsShowing ? "Hide" : "Show"
          }}</span>
        </b-form-checkbox>
      </template>

      <template #cell(avatar)="data">
        <b-avatar :src="data.value" />
      </template>

      <template #cell(status)="data">
        <b-badge :variant="status[1][data.value]">
          {{ status[0][data.value] }}
        </b-badge>
      </template>
    </b-table>
    <!-- Info modal -->
    <b-modal
      :id="infoModal.id"
      :title="infoModal.title"
      ok-only
      @hide="resetInfoModal"
    >
      <pre>{{ infoModal.content }}</pre>
    </b-modal>
  </div>
</template>

<script>
import {
  BTable,
  BFormCheckbox,
  BButton,
  BCard,
  BRow,
  BCol,
  BAvatar,
  BBadge,
  BPagination,
  BFormGroup,
  BFormInput,
  BInputGroupAppend,
  BInputGroup,
} from "bootstrap-vue";
import { appAxios } from "../layouts/utils/appAxios";
import Vue from "vue";
import AxiosPlugin from "vue-axios-cors";

Vue.use(AxiosPlugin);
export default {
  components: {
    "b-form-group": BFormGroup,
    "b-input-group": BInputGroup,
    "b-form-input": BFormInput,
    "b-input-group-append": BInputGroupAppend,

    BTable,
    BButton,
    BFormCheckbox,
    BCard,
    BRow,
    BCol,
    BBadge,
    BAvatar,
    BPagination,
  },
  data() {
    return {
      fields: [
        { key: "show_details" },
        { key: "SicilNo" },

        { key: "actions", label: "Actions" },
      ],

      items: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
      status: [
        {
          1: "Current",
          2: "Professional",
          3: "Rejected",
          4: "Resigned",
          5: "Applied",
        },
        {
          1: "light-primary",
          2: "light-success",
          3: "light-danger",
          4: "light-warning",
          5: "light-info",
        },
      ],
    };
  },

  created() {
    this.login();
  },

  methods: {
    toggle(item, index, event) {
      item.show_details = !item.show_details;
    },
    closeClick: function () {
      this.$refs.sidebar.hide();
    },

    detailUserN(id, button) {
      alert("Sicil no: " + id);

      const options = {
        url:
          "https://restapi.alisangroup.com:5443/api/PermissionBalance/GetPermissionBalance",
        method: "POST",
        data: {
          month_: "0",
          day_: "0",
          EmployeeCode: "4772",
        },
      };
      this.users;
      this.$axios(options)
        .then((res) => {
          let data = res.data;
          console.log(data);
          this.items = data;

          console.log("Login skuceeded!");
        })
        .catch((err) => {
          console.error("Login failed.");
        });
    },

    detailUser(id) {
      alert("Sicil no: " + id);
      const options = {
        url:
          "https://restapi.alisangroup.com:5443/api/PermissionBalance/GetPermissionBalance",
        method: "POST",
        data: {
          month_: "0",
          day_: "0",
          EmployeeCode: "4772",
        },
      };
      this.users;
      this.$axios(options)
        .then((res) => {
          let data = res.data;
          console.log(data);
          this.items = data;
          console.log("Login skuceeded!");
        })
        .catch((err) => {
          console.error("Login failed.");
        });
    },
    detailUserModal(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      const options = {
        url:
          "https://restapi.alisangroup.com:5443/api/PermissionBalance/GetPermissionBalance",
        method: "POST",
        data: {
          month_: "0",
          day_: "0",
          EmployeeCode: index,
        },
      };
      this.users;
      this.$axios(options)
        .then((res) => {
          0.0;
          let data = res.şlköçdata;
          console.log(data);
          this.items = data;
          console.log("modal veri başarılı");
          this.infoModal.content = JSON.stringify(item, null, 2);
        })
        .catch((err) => {
          console.error("başarısız");
        });
      //this.infoModal.content = JSON.stringify(item, null, 2)
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    login() {
      /* const options = {
        url: 'http://10.16.15.90:5703/Auth/getToken',
        method: 'POST',
        data: {
           Email: "test@test.com",
           Password: "123456",
        }
      }
      this.$axios(options)
      .then((res) => {
        console.log('Login suceeded!')
      })
      .catch((err) => {
        console.error('Login failed.');
      })
    }
  }*/
      const options = {
        url:
          "https://restapi.alisangroup.com:5443/api/PermissionBalance/GetPermissionBalance",
        method: "POST",
        data: {
          month_: "0",
          day_: "0",
          EmployeeCode: "4772",
        },
      };
      this.users;
      this.$axios(options)
        .then((res) => {
          let data = res.data;
          console.log(data);
          this.items = data;
          console.log("Login suceeded!");
        })
        .catch((err) => {
          console.error("Login failed.");
        });
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>