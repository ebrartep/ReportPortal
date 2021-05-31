<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <!-- Brand logo-->
      <b-link class="brand-logo">
        <img src="http://www.alisangroup.com/css/images/logo-normal.png">
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col lg="8" class="d-none d-lg-flex align-items-center p-5">
        <div
          class="w-100 d-lg-flex align-items-center justify-content-center px-5"
        >
          <b-img fluid :src="imgUrl" alt="Login V2" />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col lg="4" class="d-flex align-items-center auth-bg px-2 p-lg-5">
        <b-col sm="8" md="6" lg="12" class="px-xl-2 mx-auto">
          <b-card-title title-tag="h2" class="font-weight-bold mb-1">
            Alışan Lojistik A.Ş. Tedarikçi Portalı 🚚
          </b-card-title>
          <b-card-text class="mb-2">
            Vergi/TC No ve şifrenizi girerek hesabınıza giriş yapabilirsiniz.
          </b-card-text>

          <!-- form -->
          <validation-observer ref="loginValidation">
            <b-form class="auth-login-form mt-2" @submit.prevent>
          
              <!-- Sicil No-->
              <b-form-group label="Vergi/TC No">
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
                    placeholder="Vergi/TC No giriniz.."
                    autofocus
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- forgot password -->
              <b-form-group>
                <div class="d-flex justify-content-between">
                  <label for="login-password">Şifre</label>
                  <b-link :to="{ name: 'auth-forgot-password-v2' }">
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
                      id="login-password"
                      v-model="password"
                      :state="errors.length > 0 ? false : null"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      name="login-password"
                      placeholder="············"
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

              <!-- submit buttons -->
              <b-button
                type="submit"
                variant="primary"
                block
                @click="validationForm"
              >
                Giriş Yap
              </b-button>
            </b-form>
          </validation-observer>
        </b-col>
      </b-col>
      <!-- /Login-->
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from "vee-validate";
import VuexyLogo from "@core/layouts/components/Logo.vue";
import {
  BRow,
  BCol,
  BLink,
  BFormGroup,
  BFormInput,
  BInputGroupAppend,
  BInputGroup,
  BFormCheckbox,
  BCardText,
  BCardTitle,
  BImg,
  BForm,
  BButton,
} from "bootstrap-vue";
import { required, email } from "@validations";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import store from "@/store/index";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import AxiosPlugin from "vue-axios-cors";
import Vue from "vue";

Vue.use(AxiosPlugin);
export default {
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BFormCheckbox,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    VuexyLogo,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      status: "",
      password: "",
      userEmail: "",
      sicilNo: "",
      sideImg: require("@/assets/images/pages/login-v2.svg"),
      // validation rulesimport store from '@/store/index'
      required,
      email,
    };
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === "dark") {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require("@/assets/images/pages/login-v2-dark.svg");
        return this.sideImg;
      }
      return this.sideImg;
    },
  },
  methods: {
    validationForm() {
      this.$refs.loginValidation.validate().then((success) => {
        if (success) {
          this.$toast({
            component: ToastificationContent,
            props: {
              title: "Giriş Başarılı",
              icon: "EditIcon",
              variant: "success",
            },
          });
        }

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
      });
    },
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>
