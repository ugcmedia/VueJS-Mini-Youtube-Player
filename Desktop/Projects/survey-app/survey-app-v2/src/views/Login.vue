<template>
  <div class="clr">
    <div class="container">
      <div class="row">
        <div
          class="col-md-12 min-vh-100 d-flex flex-column justify-content-center"
        >
          <div class="row">
            <div class="col-lg-6 col-md-8 mx-auto">
              <!-- form card login -->
              <div class="card rounded shadow shadow-sm">
                <div class="card-header">
                  <h3 class="mb-0">Login</h3>
                </div>
                <div class="card-body">
                  <form id="formLogin">
                    <div class="form-group">
                      <h5 class="text-center" v-if="log">
                        Logging in...
                      </h5>
                      <h5 class="error" v-if="err">
                        {{ err }}
                      </h5>
                      <!-- <h5 class="error" v-if="log">
                        Please provide login information to continue!
                      </h5> -->
                      <label for="uname">Username</label>
                      <input
                        v-model="form_data.username"
                        type="text"
                        required=""
                        class="form-control form-control-lg rounded-0"
                        name="uname"
                        id="uname"
                        @keyup.enter="login()"
                      />
                    </div>
                    <div class="form-group">
                      <label>Password</label>
                      <input
                        v-model="form_data.password"
                        type="password"
                        class="form-control form-control-lg rounded-0"
                        id="pwd1"
                        required=""
                        @keyup.enter="login()"
                      />
                    </div>
                    <div class="text-center">
                      <button
                        type="button"
                        class="btn btn-dark login"
                        id="btnLogin"
                        @click="login"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
                <!--/card-block-->
              </div>
              <!-- /form card login -->
            </div>
          </div>
          <!--/row-->
        </div>
        <!--/col-->
      </div>
      <!--/row-->
    </div>
  </div>
</template>

<script>
import { api } from "../assets/js/api.js";
export default {
  name: "Login",
  data() {
    return {
      form_data: {
        username: "",
        password: ""
      },
      log: false,
      err: ""
    };
  },
  mounted() {
    if (this.$route.query.error == 401) this.err = "Please login to continue!";
    api
      .get("/users/me")
      .then(() => {
        this.$router.push({ name: "Admin" });
      })
      .catch(() => {});
  },
  methods: {
    login() {
      this.log = true;
      this.err = false;
      api
        .post("/auth/login", {
          username: this.form_data.username,
          password: this.form_data.password
        })
        .then(() => {
          this.log = false;
          this.$router.push({
            name: "Admin"
          });
        })
        .catch(error => {
          this.log = false;
          var code = error.response.status;
          if (code == 400) this.err = "Please fill all the fields!";
          else if (code == 403) this.err = "Invalid Username or Password!";
          else if (code == 500) this.err = "Internal Server Error!";
          else this.err = "Oops, something went wrong!";
        });
    }
  }
};
</script>

<style scoped>
.login {
  width: 100px;
  height: 50px;
}
.clr {
  background-color: slategrey;
}
.error {
  color: red;
}
</style>
