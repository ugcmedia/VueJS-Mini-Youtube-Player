<template>
  <div class="container-fluid">
    <img
      class="mt-5 mb-5"
      src="../assets/images/logo.png"
      alt="logo"
      height="200"
      width="300"
    />
    <div class="mt-5">
      <button
        type="button"
        class="btn btn-dark butn"
        data-toggle="modal"
        data-target="#addquestion"
      >
        Add New Question
      </button>
    </div>
    <div>
      <button
        type="button"
        class="btn btn-dark butn"
        data-toggle="modal"
        data-target="#deletequestion"
      >
        Delete Questions
      </button>
    </div>
    <div>
      <button
        type="button"
        class="btn btn-dark butn"
        data-toggle="modal"
        data-target="#seequestion"
      >
        See All Questions
      </button>
    </div>
    <div>
      <router-link class="btn btn-dark butn" to="/admin/results"
        >See Results</router-link
      >
    </div>
    <div>
      <router-link class="btn btn-dark butn" to="/insight"
        >Go to Survey</router-link
      >
    </div>
    <div>
      <button @click="logout" class="btn btn-dark butn">
        Log out
      </button>
    </div>
    <!-- Add Question Modal -->
    <div>
      <div
        class="modal fade"
        id="addquestion"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog quest" role="document">
          <div class="modal-content clr">
            <div class="modal-header">
              <h5 class="modal-title" id="title">
                Add Question
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="question" class="col-form-label">Question:</label>
                  <textarea
                    v-model="newquestion"
                    class="form-control"
                    id="question"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="question" class="col-form-label">Type:</label>
                  <select v-model="newtype" class="form-control">
                    <option value="" disabled>Please select one</option>
                    <option
                      v-for="(type, index) in types"
                      v-bind:value="type.value"
                      :key="index"
                    >
                      {{ type.text }}
                    </option>
                  </select>
                </div>
                <div v-if="newtype == 'e'" class="form-group">
                  <label for="option1" class="col-form-label">Option 1:</label>
                  <input
                    v-model="option1"
                    type="text"
                    class="form-control"
                    id="option1"
                  />
                </div>
                <div v-if="newtype == 'e'" class="form-group">
                  <label for="option2" class="col-form-label">Option 2:</label>
                  <input
                    v-model="option2"
                    type="text"
                    class="form-control"
                    id="option2"
                  />
                </div>
                <div v-if="newtype == 'e'" class="form-group">
                  <label for="option3" class="col-form-label">Option 3:</label>
                  <input
                    v-model="option3"
                    type="text"
                    class="form-control"
                    id="option3"
                  />
                </div>
                <div v-if="newtype == 'e'" class="form-group">
                  <label for="option4" class="col-form-label">Option 4:</label>
                  <input
                    v-model="option4"
                    type="text"
                    class="form-control"
                    id="option4"
                  />
                </div>
                <div class="form-group">
                  <div>
                    <label for="question" class="col-form-label"
                      >Condition 1:</label
                    >
                  </div>
                  <select
                    v-model="condition.firstQuestion"
                    class="form-control d-inline condition"
                    @change="firstcheck()"
                  >
                    <option value="" disabled>Please select one</option>
                    <option
                      v-for="(question, index) in questions"
                      v-bind:value="question._id"
                      :key="index"
                    >
                      {{ question.question }}
                    </option>
                  </select>
                  <select
                    v-model="condition.firstAnswer"
                    class="form-control d-inline condition"
                  >
                    <option value="" disabled>Please select one</option>
                    <option
                      v-for="(option, index) in conditionoptions"
                      v-bind:value="option.value"
                      :key="index"
                    >
                      {{ option.text }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="question" class="col-form-label"
                    >Condition:</label
                  >
                  <select
                    v-model="condition.condition"
                    class="form-control form-inline condition"
                  >
                    <option value="">No Second Condition</option>
                    <option value="and">AND</option>
                    <option value="or">OR</option>
                  </select>
                </div>
                <div v-if="condition.condition !== ''" class="form-group">
                  <div>
                    <label for="question" class="col-form-label"
                      >Condition 2:</label
                    >
                  </div>
                  <select
                    v-model="condition.secondQuestion"
                    class="form-control d-inline condition"
                    @change="secondcheck()"
                  >
                    <option value="" disabled>Please select one</option>
                    <option
                      v-for="(question, index) in questions"
                      v-bind:value="question._id"
                      :key="index"
                    >
                      {{ question.question }}
                    </option>
                  </select>
                  <select
                    v-model="condition.secondAnswer"
                    class="form-control d-inline condition"
                  >
                    <option value="" disabled>Please select one</option>
                    <option
                      v-for="(option, index) in second_conditionoptions"
                      v-bind:value="option.value"
                      :key="index"
                    >
                      {{ option.text }}
                    </option>
                  </select>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                @click="addquestion"
                type="button"
                class="btn btn-dark butn"
              >
                Add
              </button>
              <button
                type="button"
                class="btn btn-secondary butn"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Delete Question Modal -->
    <div>
      <div
        class="modal fade"
        id="deletequestion"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content clr">
            <div class="modal-header">
              <h5 class="modal-title" id="title">
                Delete Questions
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-left ml-2">
              <div v-if="empty">No questions Found!</div>
              <div v-else v-for="(question, index) in questions" :key="index">
                <p>
                  {{ question.question }}
                </p>
                <div class="text">
                  <button
                    @click="deletequestion(question._id)"
                    type="button"
                    class="btn btn-dark del"
                  >
                    Delete
                    <i class="fa fa-trash-o"></i>
                  </button>
                </div>
                <hr />
              </div>
            </div>
            <div class="modal-footer text">
              <!-- <button type="button" class="btn btn-dark butn">
                Delete
              </button> -->
              <button
                type="button"
                class="btn btn-dark butn"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- See Questions Modal -->
    <div>
      <div
        class="modal fade"
        id="seequestion"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <!-- Add .modal-dialog-centered to .modal-dialog to vertically center the modal -->
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content clr">
            <div class="modal-header">
              <h5 class="modal-title" id="title">
                Questions
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body text-left ml-2">
              <div v-if="empty">No questions Found!</div>
              <div v-else v-for="(question, index) in questions" :key="index">
                <p>
                  {{ question.question }}
                </p>
                <hr />
              </div>
            </div>
            <div class="modal-footer text">
              <!-- <button type="button" class="btn btn-dark butn">
                Delete
              </button> -->
              <button
                type="button"
                class="btn btn-dark butn"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "../assets/js/api.js";
export default {
  name: "Admin",
  data() {
    return {
      newquestion: "",
      newtype: "",
      types: [
        { text: "Yes/No", value: "a" },
        { text: "Dissatisfied to Satisfied (5 Emojis)", value: "b" },
        { text: "Not Likely to Likely (10 emojis)", value: "c" },
        { text: "Terrible to Great (5 stars + Not Used Button)", value: "d" },
        { text: "Multi Selector (4 input options)", value: "e" }
      ],
      conditionoptions: [],
      second_conditionoptions: [],
      option1: "",
      option2: "",
      option3: "",
      option4: "",
      options: {},
      questions: [],
      empty: false,
      condition: {
        firstQuestion: "",
        firstAnswer: "",
        condition: "",
        secondQuestion: "",
        secondAnswer: ""
      }
    };
  },
  mounted() {
    api
      .get("/users/me")
      .then(() => {})
      .catch(() => {
        this.$router.push({ name: "Login", query: { error: 401 } });
      });
    this.quests();
  },
  methods: {
    reset() {
      this.newquestion = "";
      this.newtype = "";
      this.option1 = "";
      this.option2 = "";
      this.option3 = "";
      this.option4 = "";
      this.options = {};
      this.condition.firstQuestion = "";
      this.condition.firstAnswer = "";
      this.condition.secondQuestion = "";
      this.condition.secondAnswer = "";
      this.condition.condition = "";
    },
    quests() {
      api
        .get("/questions")
        .then(res => {
          if (res.data.length == 0) {
            this.empty = true;
          } else {
            this.empty = false;
            this.questions = res.data;
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
    logout() {
      api
        .get("/auth/logout")
        .then(res => {
          if (res.data.ok) this.$router.push({ name: "Login" });
        })
        .catch(() => {
          this.$router.push({ name: "Login" });
        });
    },
    addquestion() {
      if (this.newtype == "e") {
        if (
          this.option1 !== "" &&
          this.option2 !== "" &&
          this.option3 !== "" &&
          this.option4 !== ""
        ) {
          if (
            this.option1 !== this.option2 &&
            this.option1 !== this.option3 &&
            this.option1 !== this.option4 &&
            this.option2 !== this.option3 &&
            this.option2 !== this.option4 &&
            this.option3 !== this.option4
          ) {
            this.options[this.option1] = 0;
            this.options[this.option2] = 0;
            this.options[this.option3] = 0;
            this.options[this.option4] = 0;
            console.log(this.options);
            api
              .post("/questions", {
                question: this.newquestion,
                type: this.newtype,
                options: this.options
              })
              .then(() => {
                this.$swal({
                  title: "Success!",
                  text: "Question Added Successfully",
                  icon: "success"
                });
                this.reset();
                this.quests();
              })
              .catch(err => {
                var error = err.response.data;
                if (err.response.status == 400) {
                  this.$swal({
                    title: "Error!",
                    text: error.message[0].constraints.isNotEmpty,
                    icon: "error"
                  });
                } else {
                  this.$swal({
                    title: "Error!",
                    text:
                      "An Error Occurred, Please try again.(Try logging in again)",
                    icon: "error"
                  });
                }
              });
          } else {
            console.log("no");
            this.$swal({
              title: "Error!",
              text: "Please enter distinct options.",
              icon: "error"
            });
          }
          // this.options.push(this.option1);
          // this.options.push(this.option2);
          // this.options.push(this.option3);
          // this.options.push(this.option4);
        } else {
          this.$swal({
            title: "Error!",
            text: "Please complete all options",
            icon: "error"
          });
        }
      } else {
        api
          .post("/questions", {
            question: this.newquestion,
            type: this.newtype,
            condition: this.condition
          })
          .then(() => {
            this.$swal({
              title: "Success!",
              text: "Question Added Successfully",
              icon: "success"
            });
            this.reset();
            this.quests();
          })
          .catch(err => {
            var error = err.response.data;
            if (err.response.status == 400) {
              this.$swal({
                title: "Error!",
                text: error.message[0].constraints.isNotEmpty,
                icon: "error"
              });
            } else {
              this.$swal({
                title: "Error!",
                text: "An Error Occurred, Please try again.",
                icon: "error"
              });
            }
          });
      }
    },
    firstcheck() {
      this.questions.filter(quest => {
        if (quest._id == this.condition.firstQuestion) var type = quest.type;
        if (type == "a") {
          this.conditionoptions = [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" }
          ];
        } else if (type == "b") {
          this.conditionoptions = [
            { text: "Highly Dissatisfied", value: "highly dissatisfied" },
            { text: "Dissatisfied", value: "dissatisfied" },
            { text: "Acceptable ", value: "acceptable" },
            { text: "Satisfied", value: "satisfied" },
            { text: "Highly Satisfied", value: "highly satisfied" }
          ];
        } else if (type == "c") {
          this.conditionoptions = [
            { text: "0", value: "0" },
            { text: "1", value: "1" },
            { text: "2", value: "2" },
            { text: "3", value: "3" },
            { text: "4", value: "4" },
            { text: "5", value: "5" },
            { text: "6", value: "6" },
            { text: "7", value: "7" },
            { text: "8", value: "8" },
            { text: "9", value: "9" },
            { text: "10", value: "10" }
          ];
        } else if (type == "d") {
          this.conditionoptions = [
            { text: "Terrible", value: "Terrible" },
            { text: "Poor", value: "poor" },
            { text: "Acceptable ", value: "acceptable" },
            { text: "Good", value: "good" },
            { text: "Great", value: "great" },
            { text: "Not Used", value: "not used" }
          ];
        } else if (type == "e") {
          var keys = Object.keys(quest.options);
          this.conditionoptions = [
            { text: keys[0], value: keys[0] },
            { text: keys[1], value: keys[1] },
            { text: keys[2], value: keys[2] },
            { text: keys[3], value: keys[3] }
          ];
        }
      });
    },
    secondcheck() {
      this.questions.filter(quest => {
        if (quest._id == this.condition.secondQuestion) var type = quest.type;
        if (type == "a") {
          this.second_conditionoptions = [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" }
          ];
        } else if (type == "b") {
          this.second_conditionoptions = [
            { text: "Highly Dissatisfied", value: "highly dissatisfied" },
            { text: "Dissatisfied", value: "dissatisfied" },
            { text: "Acceptable ", value: "acceptable" },
            { text: "Satisfied", value: "satisfied" },
            { text: "Highly Satisfied", value: "highly satisfied" }
          ];
        } else if (type == "c") {
          this.second_conditionoptions = [
            { text: "0", value: "0" },
            { text: "1", value: "1" },
            { text: "2", value: "2" },
            { text: "3", value: "3" },
            { text: "4", value: "4" },
            { text: "5", value: "5" },
            { text: "6", value: "6" },
            { text: "7", value: "7" },
            { text: "8", value: "8" },
            { text: "9", value: "9" },
            { text: "10", value: "10" }
          ];
        } else if (type == "d") {
          this.second_conditionoptions = [
            { text: "Terrible", value: "Terrible" },
            { text: "Poor", value: "poor" },
            { text: "Acceptable ", value: "acceptable" },
            { text: "Good", value: "good" },
            { text: "Great", value: "great" },
            { text: "Not Used", value: "not used" }
          ];
        } else if (type == "e") {
          var keys = Object.keys(quest.options);
          this.second_conditionoptions = [
            { text: keys[0], value: keys[0] },
            { text: keys[1], value: keys[1] },
            { text: keys[2], value: keys[2] },
            { text: keys[3], value: keys[3] }
          ];
        }
      });
    },
    deletequestion(id) {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true
        })
        .then(result => {
          if (result.value) {
            api
              .delete("/questions/" + id)
              .then(() => {
                this.$swal({
                  title: "Success!",
                  text: "Question Deleted Successfully",
                  icon: "success"
                });
                this.quests();
              })
              .catch(() => {
                this.$swal({
                  title: "Error!",
                  text:
                    "An Error occurred while deleting, try logging in again.",
                  icon: "error"
                });
              });
          }
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
.clr {
  /* min-height: 100vh; */
  height: 100%;
}
.btn {
  margin: 15px;
}
.butn {
  width: 200px;
  height: 40px;
}
.text {
  display: block;
  text-align: center;
}
.del {
  margin: 0;
}
.quest {
  text-align: left;
}
.condition {
  width: 50%;
}
</style>
