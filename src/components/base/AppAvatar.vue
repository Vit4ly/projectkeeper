<template>
  <div class="user-avatar">
    <img v-if="imagePath" :src="imagePath" alt="avatar" />
    <span v-else>{{ initials }}</span>
  </div>
</template>

<script>
export default {
  props: {
    imagePath: {
      type: String,
    },
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
  },

  computed: {
    initials() {
      return `${this.firstName ? this.firstName[0].toUpperCase() : ""} ${
        this.lastName ? this.lastName[0].toUpperCase() : ""
      }`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/styles/variables";

.user-avatar {
  width: 30px;
  height: 30px;
  background-color: $blue;
  border-radius: 50%;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  line-height: 30px;
}
</style>
