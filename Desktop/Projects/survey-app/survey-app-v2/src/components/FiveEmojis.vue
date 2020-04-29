<template>
  <div>
    <div class="emojis">
      <p class="mr-2">Overall Satisfaction</p>
      <div class="block" @click="clickedFirst">
        <img
          id="first"
          class="border border-dark border-right-0"
          src="../assets/images/emoji1.png"
          alt=""
        />
        <p class="first">Highly Dissatisfied</p>
      </div>
      <div class="block" @click="clickedSecond">
        <img
          id="second"
          class="border border-dark border-right-0"
          src="../assets/images/emoji2.png"
          alt=""
        />
        <p class="second">Dissatisfied</p>
      </div>
      <div class="block" @click="clickedThird">
        <img
          id="third"
          class="border border-dark border-right-0"
          src="../assets/images/emoji3.png"
          alt=""
        />
        <p class="third">Acceptable</p>
      </div>
      <div class="block" @click="clickedFourth">
        <img
          id="fourth"
          class="border border-dark border-right-0"
          src="../assets/images/emoji4.png"
          alt=""
        />
        <p class="fourth">Satisfied</p>
      </div>
      <div class="block" @click="clickedFifth">
        <img
          id="fifth"
          class="border border-dark"
          src="../assets/images/emoji5.png"
          alt=""
        />
        <p class="fifth">Highly Satisfied</p>
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
    clickedFirst() {
      var first = document.getElementById("first");
      var second = document.getElementById("second");
      var third = document.getElementById("third");
      var fourth = document.getElementById("fourth");
      var fifth = document.getElementById("fifth");
      second.classList.remove("active");
      third.classList.remove("active");
      fourth.classList.remove("active");
      fifth.classList.remove("active");
      first.classList.add("active");
      this.selected = "highly dissatisfied";
    },
    clickedSecond() {
      var first = document.getElementById("first");
      var second = document.getElementById("second");
      var third = document.getElementById("third");
      var fourth = document.getElementById("fourth");
      var fifth = document.getElementById("fifth");
      first.classList.remove("active");
      third.classList.remove("active");
      fourth.classList.remove("active");
      fifth.classList.remove("active");
      second.classList.add("active");
      this.selected = "dissatisfied";
    },
    clickedThird() {
      var first = document.getElementById("first");
      var second = document.getElementById("second");
      var third = document.getElementById("third");
      var fourth = document.getElementById("fourth");
      var fifth = document.getElementById("fifth");
      first.classList.remove("active");
      second.classList.remove("active");
      fourth.classList.remove("active");
      fifth.classList.remove("active");
      third.classList.add("active");
      this.selected = "acceptable";
    },
    clickedFourth() {
      var first = document.getElementById("first");
      var second = document.getElementById("second");
      var third = document.getElementById("third");
      var fourth = document.getElementById("fourth");
      var fifth = document.getElementById("fifth");
      first.classList.remove("active");
      second.classList.remove("active");
      third.classList.remove("active");
      fifth.classList.remove("active");
      fourth.classList.add("active");
      this.selected = "satisfied";
    },
    clickedFifth() {
      var first = document.getElementById("first");
      var second = document.getElementById("second");
      var third = document.getElementById("third");
      var fourth = document.getElementById("fourth");
      var fifth = document.getElementById("fifth");
      first.classList.remove("active");
      second.classList.remove("active");
      third.classList.remove("active");
      fourth.classList.remove("active");
      fifth.classList.add("active");
      this.selected = "highly satisfied";
    },
    clickedback() {
      this.$emit("clickedback", this.selected);
      this.selected = "";
    },
    clickednext() {
      this.$emit("clickednext", this.selected);
      var first = document.getElementById("first");
      var second = document.getElementById("second");
      var third = document.getElementById("third");
      var fourth = document.getElementById("fourth");
      var fifth = document.getElementById("fifth");
      first.classList.remove("active");
      second.classList.remove("active");
      third.classList.remove("active");
      fourth.classList.remove("active");
      fifth.classList.remove("active");
      this.selected = "";
    }
  }
};
</script>

<style scoped>
.emojis {
  margin-top: 50px;
  text-align: left;
}
p {
  display: inline;
  margin-top: -20px;
}
.first {
  font-size: 13px;
  position: absolute;
  margin-left: -115px;
}
.second {
  font-size: 13px;
  position: absolute;
  margin-left: -95px;
}
.third {
  font-size: 13px;
  position: absolute;
  margin-left: -92px;
}
.fourth {
  font-size: 13px;
  position: absolute;
  margin-left: -85px;
}
.fifth {
  font-size: 13px;
  position: absolute;
  margin-left: -105px;
}
.block {
  display: inline;
  position: relative;
}
.block :hover {
  cursor: pointer;
  background-color: grey;
}
.active {
  background-color: #515151 !important;
}
.border {
  width: 120px;
  height: 60px;
  display: inline;
  background-color: #d3d3d3;
  padding-left: 35px;
  padding-right: 35px;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
