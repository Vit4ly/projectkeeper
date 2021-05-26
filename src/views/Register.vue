<template>
  <div class="sign">
    <h1 class="sign__title">Sign up</h1>
    <div class="sign__inner">
      <div class="sign__google">
        <div class="sign__google__link">
          <icon-base title="google" width="25" height="25"></icon-base>
        </div>
        <span class="sign__google__link">Sign with Google Account</span>
      </div>

      <form class="sign__form" @submit.prevent="submitHandler">
        <div class="sign__form__inner">
          <app-input
            class-name="sign__form__first"
            type="text"
            id="first"
            v-model:value="firstName"
          >
            First name
          </app-input>
          <app-input
            class-name="sign__form__last"
            type="text"
            id="`last`"
            v-model:value="lastName"
          >
            Last name
          </app-input>
          <app-input
            class-name="sign__form__email"
            type="email"
            id="email"
            v-model:value="email"
          >
            Email
          </app-input>
          <app-input
            class-name="sign__form__pass"
            type="password"
            id="password"
            v-model:value="password"
          >
            Password
          </app-input>
          <app-input
            class-name="sign__form__repeat"
            type="password"
            id="repeat"
            v-model:value="repeat"
          >
            Repeat password
          </app-input>
        </div>

        <div class="sign__form__check">
          <input type="checkbox" />
          <p>I agree to the terms of service and privacy policy.</p>
        </div>

        <div class="sign__form__btn-box">
          <app-button :disabled="v$.$invalid" type="submit">Sign up</app-button>
        </div>
      </form>
      <div class="sign__log-in">
        <p>
          Have an account already? <router-link to="/login">Log in</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/icons/IconBase";
import AppInput from "@/components/entry/AppInput";
import AppButton from "@/components/base/AppButton";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";

export default {
  name: "Register",
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      repeat: "",
    };
  },
  methods: {
    submitHandler() {
      if (this.v$.$invalid) {
        console.log("нет данных");
        return;
      }
      const formData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        repeatPassword: this.repeat,
      };
      console.log(formData);
    },
  },
  validations: {
    firstName: {
      required,
    },
    lastName: { required },
    email: { required, email },
    password: { required, minLength: minLength(8) },
    repeat: { required, sameAs: sameAs("password") },
  },
  components: {
    IconBase,
    AppInput,
    AppButton,
  },
};
</script>

<style scoped lang="scss">
.sign {
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
  &__log-in {
    margin: 41px 0 55px 0;
    color: rgba(51, 70, 99, 0.46);
    a {
      color: #334663;
      cursor: pointer;
    }
  }

  &__form {
    max-width: 675px;
    width: 100%;
    margin-top: 49px;

    &__inner {
      display: grid;
      grid-template-areas:
        "first last"
        "email email"
        "pass repeat";
      grid-gap: 25px;
    }

    &__first {
      grid-area: first;
    }

    &__last {
      grid-area: last;
    }

    &__email {
      grid-area: email;
    }

    &__pass {
      grid-area: pass;
    }

    &__repeat {
      grid-area: repeat;
    }

    &__check {
      margin-top: 29px;
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
  }
}
</style>
