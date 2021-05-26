<template>
  <div class="login">
    <h1 class="login__title">Log In</h1>
    <div class="login__inner">
      <div class="login__google">
        <div class="login__google__link">
          <icon-base title="google" width="25" height="25"></icon-base>
        </div>
        <span class="login__google__link">Use Google Account</span>
      </div>
      <div class="login__or">
        <span>or</span>
      </div>
      <form class="login__form" @submit.prevent="submitHandler">
        <div class="login__form__inner">
          <div>
            <app-input
              class-name="login__form__email"
              type="email"
              id="email"
              v-model:value.trim="v$.email.$model"
            >
              Email
            </app-input>

            <small
              v-if="v$.email.$dirty && v$.email.required.$invalid"
              :class="{ invalid: v$.email.$invalid }"
              class="helper-text"
              >Enter Email</small
            >
            <small
              v-else-if="v$.email.$dirty && v$.email.email.$invalid"
              :class="{ invalid: v$.email.$invalid }"
              class="helper-text"
              >{{ v$.email.email.$message }}</small
            >
          </div>

          <div>
            <app-input
              class-name="login__form__pass"
              type="password"
              id="pass"
              v-model:value.trim="v$.password.$model"
            >
              Password
            </app-input>

            <small
              v-if="v$.password.$dirty && v$.password.required.$invalid"
              :class="{ invalid: v$.password.required }"
              class="helper-text"
              >Enter password</small
            >
            <small
              v-else-if="v$.password.$dirty && v$.password.minLength.$invalid"
              :class="{ invalid: v$.password.required }"
              class="helper-text"
            >
              {{ v$.password.minLength.$message }}, now it is
              {{ v$.password.$model.length }} long
            </small>
          </div>
        </div>

        <div class="login__form__forgot-box">
          <div class="login__form__check">
            <input type="checkbox" v-model="agree" />
            <p>Remember me</p>
          </div>
          <a href="" class="login__form__forgot-box__pass">Forgot password?</a>
        </div>
        <div class="login__form__btn-box">
          <app-button type="submit">Log in </app-button>
        </div>

        <div class="login__form__sign">
          <span>Don’t have on account?</span>
          <router-link to="/register">Sign up</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import AppInput from "@/components/entry/AppInput";
import AppButton from "@/components/base/AppButton";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

export default {
  name: "Login",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: "",
      password: "",
      agree: false,
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
    },
  },
  methods: {
    submitHandler() {
      if (this.v$.$invalid) {
        console.log("нет данных");
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
        agree: this.agree,
      };
      console.log(formData);
    },
  },
  components: {
    IconBase,
    AppInput,
    AppButton,
  },
};
</script>

<style scoped lang="scss">
.helper-text.invalid {
  border: #f44336;
  color: #f44336;
}

.inp {
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: rgba(51, 70, 99, 0.46);

  input {
    margin-top: 4px;
    width: 100%;
    height: 36px;
    border: 1px solid rgba(51, 70, 99, 0.2);
    border-radius: 5px;
  }
}

.login {
  padding: 0 15px;
  max-width: 785px;
  width: 78.5vw;
  margin: 153px auto;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(51, 70, 99, 0.1), 0 3px 12px rgba(51, 70, 99, 0.08);

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__title {
    font-size: 24px;
    text-align: center;
    font-weight: 400;
    color: #334663;
    padding-top: 75px;
  }

  &__google {
    margin-top: 45px;
    max-width: 320px;
    width: 100%;
    display: grid;
    grid-template-columns: 0.2fr 1fr;
    align-items: center;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 0 4px rgba(51, 70, 99, 0.1), 0 3px 12px rgba(51, 70, 99, 0.08);

    &__link {
      font-weight: 400;
      color: #334663;
      padding: 16px 58px 16px 14px;
    }
  }

  &__or {
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 0.1fr 1fr;
    grid-gap: 15px;
    align-items: center;
    color: rgba(51, 70, 99, 0.46);
    max-width: 320px;

    &:after {
      content: "";
      width: 138px;
      border-bottom: 1px solid rgba(51, 70, 99, 0.2);
    }

    &:before {
      content: "";
      width: 138px;
      border-bottom: 1px solid rgba(51, 70, 99, 0.2);
    }
  }

  &__form {
    max-width: 320px;
    width: 100%;
    margin-top: 49px;

    &__inner {
      display: grid;
      grid-template-areas: "email" "pass";
      grid-gap: 35px;
    }

    &__email {
      grid-area: email;
    }

    &__pass {
      grid-area: pass;
    }

    &__forgot-box {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &__pass {
        color: rgba(51, 70, 99, 0.46);
      }
    }

    &__check {
      display: grid;
      grid-template-columns: 0.01fr 1fr;
      grid-gap: 8px;
      align-items: center;
    }

    &__btn-box {
      margin-top: 25px;
      display: flex;
      justify-content: center;
    }

    &__sign {
      margin: 41px 0 55px;
      text-align: center;

      span {
        color: rgba(51, 70, 99, 0.46);
      }
    }
  }
}
</style>
