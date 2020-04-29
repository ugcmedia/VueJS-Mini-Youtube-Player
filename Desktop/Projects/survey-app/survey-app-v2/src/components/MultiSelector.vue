<template>
  <div>
    <div class="options">
      <div
        v-if="serviceOne"
        id="parentone"
        class="form-check border d-flex mt-1"
      >
        <label class="form-check-label label">
          <input
            id="sone"
            @change="changeone"
            v-model="services"
            type="checkbox"
            class="form-check-input"
            :value="serviceOne"
          />{{ serviceOne }}
        </label>
      </div>
      <div
        v-if="serviceTwo"
        id="parenttwo"
        class="form-check border d-flex mt-1"
      >
        <label class="form-check-label label">
          <input
            id="stwo"
            @change="changetwo"
            v-model="services"
            type="checkbox"
            class="form-check-input"
            :value="serviceTwo"
          />{{ serviceTwo }}
        </label>
      </div>
      <div
        v-if="serviceThree"
        id="parentthree"
        class="form-check border d-flex mt-1"
      >
        <label class="form-check-label label">
          <input
            id="sthree"
            @change="changethree"
            v-model="services"
            type="checkbox"
            class="form-check-input"
            :value="serviceThree"
          />{{ serviceThree }}
        </label>
      </div>
      <div
        v-if="serviceFour"
        id="parentfour"
        class="form-check border d-flex mt-1"
      >
        <label class="form-check-label label">
          <input
            id="sfour"
            @change="changefour"
            v-model="services"
            type="checkbox"
            class="form-check-input"
            :value="serviceFour"
          />{{ serviceFour }}
        </label>
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
  data() {
    return {
      services: []
    };
  },
  props: {
    serviceOne: {
      type: String,
      default: "-"
    },
    serviceTwo: {
      type: String,
      default: "-"
    },
    serviceThree: {
      type: String,
      default: "-"
    },
    serviceFour: {
      type: String,
      default: "-"
    },
    back: {
      type: Number,
      default: 0
    }
  },
  methods: {
    changeone() {
      var sone = document.getElementById("sone");
      var parentone = document.getElementById("parentone");
      if (sone.checked) {
        parentone.classList.add("check");
      } else {
        parentone.classList.remove("check");
      }
    },
    changetwo() {
      var stwo = document.getElementById("stwo");
      var parenttwo = document.getElementById("parenttwo");
      if (stwo.checked) {
        parenttwo.classList.add("check");
      } else {
        parenttwo.classList.remove("check");
      }
    },
    changethree() {
      var sthree = document.getElementById("sthree");
      var parentthree = document.getElementById("parentthree");
      if (sthree.checked) {
        parentthree.classList.add("check");
      } else {
        parentthree.classList.remove("check");
      }
    },
    changefour() {
      var sfour = document.getElementById("sfour");
      var parentfour = document.getElementById("parentfour");
      if (sfour.checked) {
        parentfour.classList.add("check");
      } else {
        parentfour.classList.remove("check");
      }
    },
    clickedback() {
      this.$emit("clickedback", this.services);
    },
    clickednext() {
      this.$emit("clickednext", this.services);
      var parentone = document.getElementById("parentone");
      var parenttwo = document.getElementById("parenttwo");
      var parentthree = document.getElementById("parentthree");
      var parentfour = document.getElementById("parentfour");
      parentone.classList.remove("check");
      parenttwo.classList.remove("check");
      parentthree.classList.remove("check");
      parentfour.classList.remove("check");
      this.services = [];
    }
  }
};
</script>

<style scoped>
.options {
  margin-top: 50px;
  text-align: left;
}
.border {
  width: 400px;
  height: 50px;
  align-items: center;
  flex-wrap: wrap;
}
.border:hover {
  background-color: rgb(14, 172, 224);
}
.label {
  margin-left: 10px;
}
input[type="checkbox"] {
  transform: scale(1.5);
}
.check {
  background-color: rgb(14, 172, 224);
}
</style>
