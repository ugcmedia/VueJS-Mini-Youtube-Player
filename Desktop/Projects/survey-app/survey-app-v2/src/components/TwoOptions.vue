<template>
  <div>
    <div class="radioLeft">
      <div class="custom-control custom-radio border">
        <input
          class="custom-control-input radio"
          v-model="selected"
          type="radio"
          id="yes"
          name="option"
          value="yes"
        />
        <label class="custom-control-label" for="yes">Yes</label><br />
      </div>
      <div class="custom-control custom-radio border mt-3">
        <input
          class="custom-control-input"
          v-model="selected"
          type="radio"
          id="no"
          name="option"
          value="no"
        />
        <label class="custom-control-label" for="no">No</label><br />
      </div>
    </div>
    <div class="text-center">
      <button v-if="back" @click="clickedback" class="btn btn-dark mt-5 mr-2">
        Back
      </button>
      <button @click="clickednext" class="btn btn-dark mt-5 ml-2">
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TwoOptions",
  data() {
    return {
      selected: ""
    };
  },
  props: {
    back: {
      type: Number,
      default: 0
    }
  },
  methods: {
    clickedback() {
      this.$emit("clickedback");
    },
    clickednext() {
      this.$emit("clickednext", this.selected);
      this.selected = "";
    }
  }
};
</script>

<style scoped>
.radioLeft {
  margin-top: 50px;
  display: block;
  text-align: left;
}
.border {
  width: 150px;
  height: 30px;
}
.custom-control-label {
  left: 0.5rem;
}
</style>
