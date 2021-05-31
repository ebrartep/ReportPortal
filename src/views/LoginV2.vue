<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">
      <!-- Login v1 -->
      <b-card class="mb-0">
        <b-link class="brand-logo">
          <vuexy-logo />

          <h2 class="brand-text text-primary ml-1">Alışan</h2>
        </b-link>

        <b-card-title class="mb-1"> Portalimize Hoşgeldiniz! 👋 </b-card-title>
        <b-card-text class="mb-2">
          Email ve şifrenizi girerek hesabınıza giriş yapabilirsiniz.
        </b-card-text>

        <!-- form -->
        <validation-observer ref="loginForm" #default="{ invalid }">
          <b-form class="auth-login-form mt-2" @submit.prevent>
            <!-- email -->

            <b-form-group label-for="email" label="Email">
              <validation-provider
                #default="{ errors }"
                name="Email"
                rules="required|email"
              >
                <b-form-input
                  id="email"
                  v-model="userEmail"
                  name="login-email"
                  :state="errors.length > 0 ? false : null"
                  placeholder="john@example.com"
                  autofocus
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- Sicil No-->
            <b-form-group label="Sicil No">
              <validation-provider
                #default="{ errors }"
                name="SicilNo"
                rules="required"
              >
                <b-form-input
                  id="sicilNo"
                  v-model="sicilNo"
                  name="login-email"
                  :state="errors.length > 0 ? false : null"
                  placeholder="Sicil No giriniz.."
                  autofocus
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
            <!-- password -->
            <b-form-group>
              <div class="d-flex justify-content-between">
                <label for="password">Şifre</label>
                <b-link :to="{ name: 'auth-forgot-password-v1' }">
                  <small>Şifrenizi mi unuttunuz?</small>
                </b-link>
              </div>
              <validation-provider
                #default="{ errors }"
                name="Password"
                rules="required"
              >
                <b-input-group
                  class="input-group-merge"
                  :class="errors.length > 0 ? 'is-invalid' : null"
                >
                  <b-form-input
                    id="password"
                    v-model="password"
                    :type="passwordFieldType"
                    class="form-control-merge"
                    :state="errors.length > 0 ? false : null"
                    name="login-password"
                    placeholder="Şifre"
                  />

                  <b-input-group-append is-text>
                    <feather-icon
                      class="cursor-pointer"
                      :icon="passwordToggleIcon"
                      @click="togglePasswordVisibility"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- checkbox -->
            <b-form-group>
              <b-form-checkbox
                id="remember-me"
                v-model="status"
                name="checkbox-1"
              >
                Beni Hatırla
              </b-form-checkbox>
            </b-form-group>

            <!-- submit button -->
            <b-button
              variant="primary"
              type="submit"
              block
              v-on:click="GirisYap"
              :disabled="invalid"
            >
              Giriş Yap
            </b-button>
          </b-form>
        </validation-observer>
      </b-card>

      <!-- /Login v1 -->
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import {
  BButton,
  BForm,
  BFormInput,
  BFormGroup,
  BCard,
  BLink,
  BCardTitle,
  BCardText,
  BInputGroup,
  BInputGroupAppend,
  BFormCheckbox,
} from "bootstrap-vue";
import VuexyLogo from "@core/layouts/components/Logo.vue";
import { required, email } from "@validations";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import AxiosPlugin from "vue-axios-cors";
import Vue from "vue";

Vue.use(AxiosPlugin);

export default {
  components: {
    // BSV
    BButton,
    BForm,
    BFormInput,
    BFormGroup,
    BCard,
    BCardTitle,
    BLink,
    VuexyLogo,
    BCardText,
    BInputGroup,
    BInputGroupAppend,
    BFormCheckbox,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      userEmail: "",
      password: "",
      sicilNo: "",
      status: "",
      // validation rules
      required,
      email,
      items: [],
    };
  },
  methods: {
    GirisYap: function (event) {
      let self = this;
      let SicilNo = this.sicilNo;

      alert(SicilNo);
      const options = {
        url:
          "https://restapi.alisangroup.com:5443/api/PermissionBalance/GetPermissionBalance",
        method: "POST",
        data: {
          month_: "0",
          day_: "0",
          EmployeeCode: SicilNo,
        },
      };
      this.$axios(options)
        .then((res) => {
          console.log(res);
          alert(res.data[0].Ad);
          alert(res.data[0].OnaycıKodu);

          if (res.data[0].OnaycıKodu == "4714") {
            self.$store.state.employeeCode = SicilNo;
            this.$router.push("/second-page");
            //this.$store.dispatch("addDataAction",SicilNo)
            console.log("Login success.");
          } else {
			self.$store.state.employeeCode = SicilNo;
            this.$router.push("/resetpassword");
          }
        })
        .catch((err) => {
          console.error("Login failed.");
        });
    },
    change: function (e) {
      this.description = e.target.value;
    },
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
    },
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>
