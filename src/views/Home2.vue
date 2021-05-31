<template>
  <div class="overflow-auto">

    <b-col lg="3" class="my-1" style="float: right">
      <b-form-group
        label-for="filter-input"
        label-align-sm="right"
        label-size="sm"
      >
        <b-input-group size="sm">
          <b-form-input
            style="color: black !important"
            id="filter-input"
            v-model="filter"
            type="search"
            placeholder="Arama yapınız..."
          ></b-form-input>

          <b-input-group-append>
            <b-button
              style="background-color: #6a60e7 !important"
              :disabled="!filter"
              @click="filter = ''"
              >Temizle</b-button
            >
          </b-input-group-append>
        </b-input-group>
      </b-form-group>
    </b-col>

     <select v-model="selected" @change="onChange($event)"  variant="gradient-primary"  label="Arama yapınız...">
      <option  value="">Seçiniz</option>

      <option
        v-for="(item, index) in filterItems"
        :key="index"
        :value="item.id"
      >
        {{ item.companyName }}
      </option>
    </select>
    <span>Seçilen: {{ selected }}</span>

    <b-table
      id="my-table"
      :items="items"
      :filter="filter"
      :fields="fields"
      :filter-included-fields="filterOn"
      :per-page="perPage"
      :current-page="currentPage"
      striped
      responsive
    >
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

      <template #row-details="row">
        <b-card>
          <b-row class="mb-2">
            <b-col md="4" class="mb-1">
              <strong>Name : </strong>{{ row.item.name }}
            </b-col>

            <b-col md="4" class="mb-1">
              <strong>Company Name : </strong>{{ row.item.companyName }}
            </b-col>
            <b-col md="4" class="mb-1">
              <strong>City : </strong>{{ row.item.city }}
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

      <template #cell(avatar)="data">
        <b-avatar :src="data.value" />
      </template>

      <template #cell(status)="data">
        <b-badge :variant="status[1][data.value]">
          {{ status[0][data.value] }}
        </b-badge>
      </template>
    </b-table>

    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      size="ml"
      style="float: right"
    ></b-pagination>
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
import vSelect from "vue-select";

export default {
  components: {
    "b-form-group": BFormGroup,
    "b-input-group": BInputGroup,
    "b-form-input": BFormInput,
    "b-input-group-append": BInputGroupAppend,

    vSelect,
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
      url: "https://6053138445e4b30017290bdc.mockapi.io",
      rows: 100,
      perPage: 10,
      currentPage: 1,
      filter: null,
      filterOn: [],
      filterByFormatted: true,
      fields: ["show_details", "id", "name", "companyName", "city"],
      items: [],
      filterItems: [],
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
      selected: undefined,
      dropDown: [],
    };
  },
  created() {
    let self = this;
    this.$axios
      .get(self.url + "/UserApp/users")
      .then((res) => {
        self.items = res.data;
        self.names = res.data;
        self.filterItems = res.data;
      });
  },
  computed: {
    rows() {
      return this.items.length;
    },
    filteredItems() {
      return this.items.filter((item) => {
        let keep = true;

        // This is a basic equality filter. What I did in the actual code was to have an object with filter functions for each key. If a key was missing, it defaulted to straight equality.
        this.fieldKeys.forEach((key) => {
          keep =
            keep &&
            (this.selectVal[key] === undefined ||
              item[key] === this.selectVal[key]);
        });

        return keep;
      });
    },

    fieldKeys() {
      return Object.keys(this.items[0]);
    },
  },

  methods: {
    details(item) {
      alert(JSON.stringify(item));
    },
    onChange(event) {
      console.log(event.target.value);
      if (event.target.value === "") {
        let self = this;
        this.$axios
          .get("https://6053138445e4b30017290bdc.mockapi.io/UserApp/users")
          .then((res) => {
            self.items = res.data;
            self.filterItems = res.data;
          });
      } else {
        let self = this;
        let url = "https://6053138445e4b30017290bdc.mockapi.io/UserApp/users/";
        this.$axios
          .get(url + event.target.value)
          .then(function (response) {
            self.items = [];
            self.items.push(response.data);

            console.log(self.items);

            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
      }
    },
  },
};
</script>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>