<template>
  <div class="container">
    <h2 class="mt-5 text-center sur">Survey</h2>
    <h1 v-if="fetching" class="mt-5 sur">Loading....</h1>
    <h1 v-if="empty" class="mt-5 sur">No Survey found.</h1>
    <div class="mt-5">
      <p v-if="!complete" class="question sur">{{ question.question }}</p>
      <TwoOptions v-if="a" :back="i" @clickedback="prev" @clickednext="next" />
      <FiveEmojis v-if="b" :back="i" @clickedback="prev" @clickednext="next" />
      <TenEmojis v-if="c" :back="i" @clickedback="prev" @clickednext="next" />
      <Stars v-if="d" :back="i" @clickedback="prev" @clickednext="next" />
      <MultiSelector
        v-if="e"
        :serviceOne="keys[0]"
        :serviceTwo="keys[1]"
        :serviceThree="keys[2]"
        :serviceFour="keys[3]"
        :back="i"
        @clickedback="prev"
        @clickednext="next"
      />
      <h2 class="text-center" v-if="complete">
        Thank you for taking survey!
      </h2>
    </div>
    <div class="text-center mt-4">
      <button
        v-if="!complete"
        @click="submit"
        class="btn btn-outline-danger btn-lg"
      >
        End Survey
      </button>
    </div>
  </div>
</template>

<script>
import TwoOptions from "../components/TwoOptions";
import FiveEmojis from "../components/FiveEmojis";
import TenEmojis from "../components/TenEmojis";
import Stars from "../components/Stars";
import MultiSelector from "../components/MultiSelector";
import { api } from "../assets/js/api.js";

export default {
  name: "Survey",
  components: {
    TwoOptions,
    FiveEmojis,
    TenEmojis,
    Stars,
    MultiSelector
  },
  data() {
    return {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      fetching: false,
      i: 0,
      complete: false,
      question: {},
      // questions: [],
      questions: [
        {
          id: 1,
          question: "first one",
          type: "a",
          conditions: {
            fid: "",
            fvalue: "",
            condition: "",
            sid: "",
            svalue: ""
          }
        },
        {
          id: 2,
          question: "second one",
          type: "b",
          conditions: {
            fid: "",
            fvalue: "",
            condition: "",
            sid: "",
            svalue: ""
          }
        },
        {
          id: 3,
          question: "third one",
          type: "c",
          conditions: {
            fid: 1,
            fvalue: "yes",
            condition: "and",
            sid: 2,
            svalue: "acceptable"
          }
        },
        {
          id: 4,
          question: "fourth one",
          type: "d",
          conditions: {
            fid: "",
            fvalue: "",
            condition: "",
            sid: "",
            svalue: ""
          }
        },
        {
          id: 5,
          question: "fifth one",
          type: "e",
          options: {
            abc: "",
            def: "",
            dads: "",
            adsa: ""
          },
          conditions: {
            fid: "",
            fvalue: "",
            condition: "",
            sid: "",
            svalue: ""
          }
        }
      ],
      keys: [],
      len: 0,
      empty: false,
      results: [],
      show_question: false,
      back: false
    };
  },
  beforeMount() {
    this.fetching = true;
  },
  mounted() {
    api
      .get("/questions")
      .then(res => {
        this.fetching = false;
        if (res.data.length == 0) {
          this.empty = true;
        } else {
          this.empty = false;
          // this.questions = res.data;
          this.len = this.questions.length;
          this.loadquestion();
        }
      })
      .catch(err => {
        console.log(err);
        this.$swal({
          title: "Error!",
          text: "An Error Occurred, Please try again.",
          icon: "error"
        });
      });
  },
  methods: {
    prev() {
      this.i = this.i - 1;
      this.back = true;
      // this.results.pop();
      this.loadquestion();
    },
    next(answer) {
      this.back = false;
      if (answer !== "" && answer.length !== 0) {
        const result = { ...this.questions[this.i], answer };
        this.results.push(result);
        console.log("pushed", this.results);
      }
      if (this.i + 1 < this.questions.length) {
        this.i = this.i + 1;
        this.loadquestion();
      } else {
        const response = {};
        this.a = false;
        this.b = false;
        this.c = false;
        this.d = false;
        this.e = false;
        this.complete = true;
        response.answers = this.results;
        api
          .post("/questions/answers", response)
          .then(res => {
            console.log(res);
          })
          .catch(() => {
            this.$swal({
              title: "Error!",
              text: "An Error Occurred, Try taking survey again.",
              icon: "error"
            });
          });
      }
    },
    loadquestion() {
      this.question = this.questions[this.i];
      if (
        this.question.conditions.fid !== "" &&
        this.question.conditions.fvalue !== ""
      ) {
        if (
          this.question.conditions.sid == "" &&
          this.question.conditions.svalue == ""
        ) {
          this.results.filter(res => {
            if (res.id == this.question.conditions.fid) {
              if (res.answer !== this.question.conditions.fvalue) {
                if (this.back !== true) {
                  this.i = this.i + 1;
                  this.question = this.questions[this.i];
                } else {
                  this.results.pop();
                  this.i = this.i - 1;
                  this.question = this.questions[this.i];
                }
              }
            }
          });
        } else {
          console.log("enter", this.results);
          var first = null;
          var second = null;
          var cond = this.question.conditions.condition;
          this.results.filter(res => {
            if (res.id == this.question.conditions.fid) {
              if (res.answer !== this.question.conditions.fvalue) {
                first = false;
              } else first = true;
            }
          });
          this.results.filter(res => {
            if (res.id == this.question.conditions.sid) {
              if (res.answer !== this.question.conditions.svalue) {
                second = false;
              } else second = true;
            }
          });
          var result = this.judge(first, second, cond);
          if (result == false) {
            if (this.back !== true) {
              console.log("ho ja");
              this.i = this.i + 1;
              this.question = this.questions[this.i];
            } else {
              this.results.pop();
              this.i = this.i - 1;
              this.question = this.questions[this.i];
            }
          }
        }
      } else {
        if (this.back == true) this.results.pop();
      }
      if (this.questions[this.i].type == "a") {
        this.a = true;
        this.b = false;
        this.c = false;
        this.d = false;
        this.e = false;
      } else if (this.questions[this.i].type == "b") {
        this.a = false;
        this.b = true;
        this.c = false;
        this.d = false;
        this.e = false;
      } else if (this.questions[this.i].type == "c") {
        this.a = false;
        this.b = false;
        this.c = true;
        this.d = false;
        this.e = false;
      } else if (this.questions[this.i].type == "d") {
        this.a = false;
        this.b = false;
        this.c = false;
        this.d = true;
        this.e = false;
      } else if (this.questions[this.i].type == "e") {
        this.keys = Object.keys(this.questions[this.i].options);
        this.a = false;
        this.b = false;
        this.c = false;
        this.d = false;
        this.e = true;
      }
    },
    judge(a, b, c) {
      if (a == true && b == true && c == "and") {
        return true;
      } else if (a == true && b == false && c == "and") {
        return false;
      } else if (a == false && b == true && c == "and") {
        return false;
      } else if (a == false && b == false && c == "and") {
        return false;
      } else if (a == true && b == true && c == "or") {
        return true;
      } else if (a == true && b == false && c == "or") {
        return true;
      } else if (a == false && b == true && c == "or") {
        return true;
      } else if (a == false && b == false && c == "or") {
        return false;
      }
    },
    submit() {
      this.a = false;
      this.b = false;
      this.c = false;
      this.d = false;
      this.e = false;
      this.complete = true;
      const response = {};
      response.answers = this.results;
      api
        .post("/questions/answers", response)
        .then(res => {
          console.log(res);
        })
        .catch(() => {
          this.$swal({
            title: "Error!",
            text: "An Error Occurred, Try taking survey again.",
            icon: "error"
          });
        });
    }
  }
};
</script>

<style scoped>
.question {
  text-align: left;
  margin-top: 50px;
}
.sur {
  font-family: arial;
}
</style>
