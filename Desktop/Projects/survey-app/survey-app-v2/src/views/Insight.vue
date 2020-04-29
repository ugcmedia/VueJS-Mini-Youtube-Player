<template>
  <div class="container-fluid">
    <img
      class="mt-5"
      src="../assets/images/logo.png"
      alt="logo"
      height="200"
      width="300"
    />
    <div class="cls">
      <button @click="start" class="btn btn-dark user mt-5">
        Start Survey!
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  methods: {
    start() {
      this.$router.push({
        name: "Survey"
      });
    }
  }
};
</script>

<style scoped>
.container-fluid {
  position: relative;
  text-align: center;
  padding-left: 0;
}
.user {
  width: 250px;
  height: 80px;
}
.cls {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
