<template>
  <nav class="nav" v-if="false">
    <transition>
      <div class="nav__log-out">
        <div class="logo">
          <icon-base title="brand-name" width="150" height="25" />
        </div>
        <button class="nav__log-out__btn">login</button>
      </div>
      <!--      <div class="nav__log-in">-->
      <!--        -->
      <!--      </div>-->
    </transition>
  </nav>
</template>

<script>
import IconBase from "@/components/icons/IconBase";

export default {
  methods: {},
  computed: {},
  components: {
    IconBase,
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/app";

.nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  padding: 18px 16px;
  border-bottom: 1px solid rgba(51, 70, 99, 0.08);
  box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);

  &__log-out {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__btn {
      z-index: 200;
    }
  }
}
</style>
