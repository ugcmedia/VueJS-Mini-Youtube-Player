<template>
  <div>
    <div class="emojis">
      <div class="block" @click="clickedZero">
        <img
          id="zero"
          class="imgsize"
          src="../assets/images/vector0.png"
          alt=""
        />
        <p class="rate">0</p>
      </div>
      <div class="block" @click="clickedOne">
        <img
          id="one"
          class="imgsize"
          src="../assets/images/vector1.png"
          alt=""
        />
        <p class="rate">1</p>
        <span class="desc1">Not at all Likely</span>
        <span class="desc2">Very Likely</span>
      </div>
      <div class="block" @click="clickedTwo">
        <img
          id="two"
          class="imgsize"
          src="../assets/images/vector2.png"
          alt=""
        />
        <p class="rate">2</p>
      </div>
      <div class="block" @click="clickedThree">
        <img
          id="three"
          class="imgsize"
          src="../assets/images/vector3.png"
          alt=""
        />
        <p class="rate">3</p>
      </div>
      <div class="block" @click="clickedFour">
        <img
          id="four"
          class="imgsize"
          src="../assets/images/vector4.png"
          alt=""
        />
        <p class="rate">4</p>
      </div>
      <div class="block" @click="clickedFive">
        <img
          id="five"
          class="imgsize"
          src="../assets/images/vector5.png"
          alt=""
        />
        <p class="rate">5</p>
      </div>
      <div class="block" @click="clickedSix">
        <img
          id="six"
          class="imgsize"
          src="../assets/images/vector6.png"
          alt=""
        />
        <p class="rate">6</p>
      </div>
      <div class="block" @click="clickedSeven">
        <img
          id="seven"
          class="imgsize"
          src="../assets/images/vector7.png"
          alt=""
        />
        <p class="rate">7</p>
      </div>
      <div class="block" @click="clickedEight">
        <img
          id="eight"
          class="imgsize"
          src="../assets/images/vector8.png"
          alt=""
        />
        <p class="rate">8</p>
      </div>
      <div class="block" @click="clickedNine">
        <img
          id="nine"
          class="imgsize"
          src="../assets/images/vector9.png"
          alt=""
        />
        <p class="rate">9</p>
      </div>
      <div class="block" @click="clickedTen">
        <img
          id="ten"
          class="imgsize"
          src="../assets/images/vector10.png"
          alt=""
        />
        <p class="rate">10</p>
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
    clickedZero() {
      var zero = document.getElementById("zero");
      var one = document.getElementById("one");
      var two = document.getElementById("two");
      var three = document.getElementById("three");
      var four = document.getElementById("four");
      var five = document.getElementById("five");
      var six = document.getElementById("six");
      var seven = document.getElementById("seven");
      var eight = document.getElementById("eight");
      var nine = document.getElementById("nine");
      var ten = document.getElementById("ten");
      one.classList.remove("active");
      two.classList.remove("active");
      three.classList.remove("active");
      four.classList.remove("active");
      five.classList.remove("active");
      six.classList.remove("active");
      seven.classList.remove("active");
      eight.classList.remove("active");
      nine.classList.remove("active");
      ten.classList.remove("active");
      zero.classList.add("active");
      this.selected = "0";
    },
    clickedOne() {
      var zero = document.getElementById("zero");
      var one = document.getElementById("one");
      var two = document.getElementById("two");
      var three = document.getElementById("three");
      var four = document.getElementById("four");
      var five = document.getElementById("five");
      var six = document.getElementById("six");
      var seven = document.getElementById("seven");
      var eight = document.getElementById("eight");
      var nine = document.getElementById("nine");
      var ten = document.getElementById("ten");
      zero.classList.remove("active");
      two.classList.remove("active");
      three.classList.remove("active");
      four.classList.remove("active");
      five.classList.remove("active");
      six.classList.remove("active");
      seven.classList.remove("active");
      eight.classList.remove("active");
      nine.classList.remove("active");
      ten.classList.remove("active");
      one.classList.add("active");
      this.selected = "1";
    },
    clickedTwo() {
      var zero = document.getElementById("zero");
      var one = document.getElementById("one");
      var two = document.getElementById("two");
      var three = document.getElementById("three");
      var four = document.getElementById("four");
      var five = document.getElementById("five");
      var six = document.getElementById("six");
      var seven = document.getElementById("seven");
      var eight = document.getElementById("eight");
      var nine = document.getElementById("nine");
      var ten = document.getElementById("ten");
      zero.classList.remove("active");
      one.classList.remove("active");
      three.classList.remove("active");
      four.classList.remove("active");
      five.classList.remove("active");
      six.classList.remove("active");
      seven.classList.remove("active");
      eight.classList.remove("active");
      nine.classList.remove("active");
      ten.classList.remove("active");
      two.classList.add("active");
      this.selected = "2";
    },
    clickedThree() {
      var zero = document.getElementById("zero");
      var one = document.getElementById("one");
      var two = document.getElementById("two");
      var three = document.getElementById("three");
      var four = document.getElementById("four");
      var five = document.getElementById("five");
      var six = document.getElementById("six");
      var seven = document.getElementById("seven");
      var eight = document.getElementById("eight");
      var nine = document.getElementById("nine");
      var ten = document.getElementById("ten");
      zero.classList.remove("active");
      one.classList.remove("active");
      two.classList.remove("active");
      four.classList.remove("active");
      five.classList.remove("active");
      six.classList.remove("active");
      seven.classList.remove("active");
      eight.classList.remove("active");
      nine.classList.remove("active");
      ten.classList.remove("active");
      three.classList.add("active");
      this.selected = "3";
    },
    clickedFour() {
      var zero = document.getElementById("zero");
      var one = document.getElementById("one");
      var two = document.getElementById("two");
      var three = document.getElementById("three");
      var four = document.getElementById("four");
      var five = document.getElementById("five");
      var six = document.getElementById("six");
      var seven = document.getElementById("seven");
      var eight = document.getElementById("eight");
      var nine = document.getElementById("nine");
      var ten = document.getElementById("ten");
      zero.classList.remove("active");
      one.classList.remove("active");
      two.classList.remove("active");
      three.classList.remove("active");
      five.classList.remove("active");
      six.classList.remove("active");
      seven.classList.remove("active");
      eight.classList.remove("active");
      nine.classList.remove("active");
      ten.classList.remove("active");
      four.classList.add("active");
      this.selected = "4";
    },
    clickedFive() {
      var zero = document.getElementById("zero");
      var one = document.getElementById("one");
      var two = document.getElementById("two");
      var three = document.getElementById("three");
      var four = document.getElementById("four");
      var five = document.getElementById("five");
      var six = document.getElementById("six");
      var seven = document.getElementById("seven");
      var eight = document.getElementById("eight");
      var nine = document.getElementById("nine");
      var ten = document.getElementById("ten");
      zero.classList.remove("active");
      one.classList.remove("active");
      two.classList.remove("active");
      three.classList.remove("active");
      four.classList.remove("active");
      six.classList.remove("active");
      seven.classList.remove("active");
      eight.classList.remove("active");
      nine.classList.remove("active");
      ten.classList.remove("active");
      five.classList.add("active");
      this.selected = "5";
    },
    clickedSix() {
      var zero = document.getElementById("zero");
      var one = document.getElementById("one");
      var two = document.getElementById("two");
      var three = document.getElementById("three");
      var four = document.getElementById("four");
      var five = document.getElementById("five");
      var six = document.getElementById("six");
      var seven = document.getElementById("seven");
      var eight = document.getElementById("eight");
      var nine = document.getElementById("nine");
      var ten = document.getElementById("ten");
      zero.classList.remove("active");
      one.classList.remove("active");
      two.classList.remove("active");
      three.classList.remove("active");
      four.classList.remove("active");
      five.classList.remove("active");
      seven.classList.remove("active");
      eight.classList.remove("active");
      nine.classList.remove("active");
      ten.classList.remove("active");
      six.classList.add("active");
      this.selected = "6";
    },
    clickedSeven() {
      var zero = document.getElementById("zero");
      var one = document.getElementById("one");
      var two = document.getElementById("two");
      var three = document.getElementById("three");
      var four = document.getElementById("four");
      var five = document.getElementById("five");
      var six = document.getElementById("six");
      var seven = document.getElementById("seven");
      var eight = document.getElementById("eight");
      var nine = document.getElementById("nine");
      var ten = document.getElementById("ten");
      zero.classList.remove("active");
      one.classList.remove("active");
      two.classList.remove("active");
      three.classList.remove("active");
      four.classList.remove("active");
      five.classList.remove("active");
      six.classList.remove("active");
      eight.classList.remove("active");
      nine.classList.remove("active");
      ten.classList.remove("active");
      seven.classList.add("active");
      this.selected = "7";
    },
    clickedEight() {
      var zero = document.getElementById("zero");
      var one = document.getElementById("one");
      var two = document.getElementById("two");
      var three = document.getElementById("three");
      var four = document.getElementById("four");
      var five = document.getElementById("five");
      var six = document.getElementById("six");
      var seven = document.getElementById("seven");
      var eight = document.getElementById("eight");
      var nine = document.getElementById("nine");
      var ten = document.getElementById("ten");
      zero.classList.remove("active");
      one.classList.remove("active");
      two.classList.remove("active");
      three.classList.remove("active");
      four.classList.remove("active");
      five.classList.remove("active");
      six.classList.remove("active");
      seven.classList.remove("active");
      nine.classList.remove("active");
      ten.classList.remove("active");
      eight.classList.add("active");
      this.selected = "8";
    },
    clickedNine() {
      var zero = document.getElementById("zero");
      var one = document.getElementById("one");
      var two = document.getElementById("two");
      var three = document.getElementById("three");
      var four = document.getElementById("four");
      var five = document.getElementById("five");
      var six = document.getElementById("six");
      var seven = document.getElementById("seven");
      var eight = document.getElementById("eight");
      var nine = document.getElementById("nine");
      var ten = document.getElementById("ten");
      zero.classList.remove("active");
      one.classList.remove("active");
      two.classList.remove("active");
      three.classList.remove("active");
      four.classList.remove("active");
      five.classList.remove("active");
      six.classList.remove("active");
      seven.classList.remove("active");
      eight.classList.remove("active");
      ten.classList.remove("active");
      nine.classList.add("active");
      this.selected = "9";
    },
    clickedTen() {
      var zero = document.getElementById("zero");
      var one = document.getElementById("one");
      var two = document.getElementById("two");
      var three = document.getElementById("three");
      var four = document.getElementById("four");
      var five = document.getElementById("five");
      var six = document.getElementById("six");
      var seven = document.getElementById("seven");
      var eight = document.getElementById("eight");
      var nine = document.getElementById("nine");
      var ten = document.getElementById("ten");
      zero.classList.remove("active");
      one.classList.remove("active");
      two.classList.remove("active");
      three.classList.remove("active");
      four.classList.remove("active");
      five.classList.remove("active");
      six.classList.remove("active");
      seven.classList.remove("active");
      eight.classList.remove("active");
      nine.classList.remove("active");
      ten.classList.add("active");
      this.selected = "10";
    },
    clickedback() {
      this.$emit("clickedback", this.selected);
    },
    clickednext() {
      this.$emit("clickednext", this.selected);
      var zero = document.getElementById("zero");
      var one = document.getElementById("one");
      var two = document.getElementById("two");
      var three = document.getElementById("three");
      var four = document.getElementById("four");
      var five = document.getElementById("five");
      var six = document.getElementById("six");
      var seven = document.getElementById("seven");
      var eight = document.getElementById("eight");
      var nine = document.getElementById("nine");
      var ten = document.getElementById("ten");
      zero.classList.remove("active");
      one.classList.remove("active");
      two.classList.remove("active");
      three.classList.remove("active");
      four.classList.remove("active");
      five.classList.remove("active");
      six.classList.remove("active");
      seven.classList.remove("active");
      eight.classList.remove("active");
      nine.classList.remove("active");
      ten.classList.remove("active");
      this.selected = "";
    }
  }
};
</script>

<style scoped>
.emojis {
  margin-top: 50px;
  text-align: left;
  margin-bottom: 50px;
}
.block {
  display: inline;
  position: relative;
  margin-left: 20px;
}
p {
  display: inline;
}
.rate {
  font-size: 13px;
  position: absolute;
  margin-top: -15px;
  margin-left: -22px;
}
.active {
  border: 2px solid;
}
.desc1 {
  position: absolute;
  margin-top: 40px;
  margin-left: -100px;
  white-space: nowrap;
}
.desc2 {
  position: absolute;
  margin-top: 40px;
  margin-left: 450px;
  white-space: nowrap;
}
.imgsize {
  width: 35px;
  height: 40px;
}
</style>
