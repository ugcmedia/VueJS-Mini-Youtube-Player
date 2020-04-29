<template>
  <div>
    <div class="container">
      <h2 class="text-center pt-3">
        Results
      </h2>
      <div v-for="(question, index) in questions" :key="index">
        <div class="">Question: {{ question.question }}</div>
        <div v-if="question.type == 'a'">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th style="width: 30%" scope="col">Options</th>
                <th scope="col">Yes</th>
                <th scope="col">No</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">People Chosen</th>
                <td>{{ question.options.yes }}</td>
                <td>{{ question.options.no }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="question.type == 'b'">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Options</th>
                <th scope="col">Highly Dissatisfied</th>
                <th scope="col">Dissatisfied</th>
                <th scope="col">Acceptable</th>
                <th scope="col">Satisfied</th>
                <th scope="col">Highly Satisfied</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">People Chosen</th>
                <td>{{ question.options["highly dissatisfied"] }}</td>
                <td>{{ question.options["dissatisfied"] }}</td>
                <td>{{ question.options["acceptable"] }}</td>
                <td>{{ question.options["satisfied"] }}</td>
                <td>{{ question.options["highly satisfied"] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="question.type == 'c'">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Options (0-10)</th>
                <th scope="col">0 (Not Likely)</th>
                <th scope="col">1</th>
                <th scope="col">2</th>
                <th scope="col">3</th>
                <th scope="col">4</th>
                <th scope="col">5</th>
                <th scope="col">6</th>
                <th scope="col">7</th>
                <th scope="col">8</th>
                <th scope="col">9</th>
                <th scope="col">10( Highly Likely)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">People Chosen</th>
                <td>{{ question.options["0"] }}</td>
                <td>{{ question.options["1"] }}</td>
                <td>{{ question.options["2"] }}</td>
                <td>{{ question.options["3"] }}</td>
                <td>{{ question.options["4"] }}</td>
                <td>{{ question.options["5"] }}</td>
                <td>{{ question.options["6"] }}</td>
                <td>{{ question.options["7"] }}</td>
                <td>{{ question.options["8"] }}</td>
                <td>{{ question.options["9"] }}</td>
                <td>{{ question.options["10"] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="question.type == 'd'">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Options</th>
                <th scope="col">Terrible</th>
                <th scope="col">Poor</th>
                <th scope="col">Acceptable</th>
                <th scope="col">Good</th>
                <th scope="col">Great</th>
                <th scope="col">Not Used</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">People Chosen</th>
                <td>{{ question.options["terrible"] }}</td>
                <td>{{ question.options["poor"] }}</td>
                <td>{{ question.options["acceptable"] }}</td>
                <td>{{ question.options["good"] }}</td>
                <td>{{ question.options["great"] }}</td>
                <td>{{ question.options["not used"] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-if="question.type == 'e'">
          <table @loading="etype" class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Options</th>
                <th scope="col">{{ question.keys[0] }}</th>
                <th scope="col">{{ question.keys[1] }}</th>
                <th scope="col">{{ question.keys[2] }}</th>
                <th scope="col">{{ question.keys[3] }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">People Chosen</th>
                <td>{{ question.values[0] }}</td>
                <td>{{ question.values[1] }}</td>
                <td>{{ question.values[2] }}</td>
                <td>{{ question.values[3] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "../assets/js/api.js";
export default {
  name: "Delete",
  data() {
    return {
      questions: [],
      qu: []
    };
  },
  mounted() {
    api
      .get("/questions")
      .then(res => {
        if (res.data.length == 0) {
          this.empty = true;
        } else {
          this.empty = false;
          this.questions = res.data;
          for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i].type == "e") {
              var keys = [];
              var values = [];
              keys = Object.keys(this.questions[i].options);
              this.questions[i] = { ...this.questions[i], keys };
              for (let j = 0; j < keys.length; j++) {
                values.push(this.questions[i].options[keys[j]]);
                this.questions[i] = { ...this.questions[i], values };
              }
            }
          }
        }
      })
      .catch(err => {
        console.log(err);
        this.$swal({
          title: "Error!",
          text: "An Error occurred while loading, try logging in again.",
          icon: "error"
        });
      });
  },
  methods: {
    etype() {
      console.log("a");
    }
  }
};
</script>

<style scoped>
.bold {
  font-weight: bold;
}
</style>
