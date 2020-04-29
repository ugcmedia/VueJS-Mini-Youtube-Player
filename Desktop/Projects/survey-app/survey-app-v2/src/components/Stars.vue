<template>
  <div>
    <div class="stars">
      <p class="title">Your experience</p>
      <div class="block" @click="clickedone">
        <span class="star" v-html="star1"></span>
        <p class="desc1">Terrible</p>
      </div>
      <div class="block" @click="clickedtwo">
        <span class="star" v-html="star2"></span>
        <p class="desc2">Poor</p>
      </div>
      <div class="block" @click="clickedthree">
        <span class="star" v-html="star3"></span>
        <p class="desc3">Acceptable</p>
      </div>
      <div class="block" @click="clickedfour">
        <span class="star" v-html="star4"></span>
        <p class="desc2">Good</p>
      </div>
      <div class="block" @click="clickedfive">
        <span class="star" v-html="star5"></span>
        <p class="desc2">Great</p>
      </div>
      <div class="blockbtn">
        <toggle-button
          :value="btnvalue"
          @change="toggle"
          :sync="true"
          :labels="{ checked: '', unchecked: 'N/A' }"
        />
        <p class="desc6">Not Used</p>
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
      star1: "&star;",
      star2: "&star;",
      star3: "&star;",
      star4: "&star;",
      star5: "&star;",
      selected: "",
      btnvalue: false
    };
  },
  props: {
    back: {
      type: Number,
      default: 0
    }
  },
  methods: {
    clickedone() {
      this.star1 = "&starf;";
      this.star2 = "&star;";
      this.star3 = "&star;";
      this.star4 = "&star;";
      this.star5 = "&star;";
      this.btnvalue = false;
      this.selected = "terrible";
    },
    clickedtwo() {
      this.star1 = "&starf;";
      this.star2 = "&starf;";
      this.star3 = "&star;";
      this.star4 = "&star;";
      this.star5 = "&star;";
      this.btnvalue = false;
      this.selected = "poor";
    },
    clickedthree() {
      this.star1 = "&starf;";
      this.star2 = "&starf;";
      this.star3 = "&starf;";
      this.star4 = "&star;";
      this.star5 = "&star;";
      this.btnvalue = false;
      this.selected = "acceptable";
    },
    clickedfour() {
      this.star1 = "&starf;";
      this.star2 = "&starf;";
      this.star3 = "&starf;";
      this.star4 = "&starf;";
      this.star5 = "&star;";
      this.btnvalue = false;
      this.selected = "good";
    },
    clickedfive() {
      this.star1 = "&starf;";
      this.star2 = "&starf;";
      this.star3 = "&starf;";
      this.star4 = "&starf;";
      this.star5 = "&starf;";
      this.btnvalue = false;
      this.selected = "great";
    },
    toggle() {
      this.star1 = "&star;";
      this.star2 = "&star;";
      this.star3 = "&star;";
      this.star4 = "&star;";
      this.star5 = "&star;";
      this.btnvalue = true;
      this.selected = "not used";
    },
    clickedback() {
      this.$emit("clickedback", this.selected);
    },
    clickednext() {
      this.$emit("clickednext", this.selected);
      this.star1 = "&star;";
      this.star2 = "&star;";
      this.star3 = "&star;";
      this.star4 = "&star;";
      this.star5 = "&star;";
      this.btnvalue = false;
      this.selected = "";
    }
  }
};
</script>

<style scoped>
.stars {
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: left;
  margin-left: 120px;
}
.title {
  position: absolute;
  margin-left: -120px;
  margin-top: 20px;
}
.block {
  display: inline;
  position: relative;
  margin-left: 50px;
  margin-right: 40px;
}
.blockbtn {
  display: inline;
  position: relative;
  margin-left: 50px;
  margin-right: 40px;
}
.block :hover {
  cursor: pointer;
  background-color: grey;
}
.star {
  font-size: 200%;
}
p {
  display: inline;
}
.desc1 {
  font-size: 13px;
  position: absolute;
  margin-top: 50px;
  margin-left: -35px;
}
.desc2 {
  font-size: 13px;
  position: absolute;
  margin-top: 50px;
  margin-left: -28px;
}
.desc3 {
  font-size: 13px;
  position: absolute;
  margin-top: 50px;
  margin-left: -43px;
}
.desc6 {
  white-space: nowrap;
  font-size: 15px;
  position: absolute;
  margin-top: 50px;
  margin-left: -60px;
}
</style>
