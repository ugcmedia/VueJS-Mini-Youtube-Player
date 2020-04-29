import Vue from "vue";
import VueRouter from "vue-router";
import Admin from "../views/Admin.vue";
import Survey from "../views/Survey.vue";
import Login from "../views/Login.vue";
import Insight from "../views/Insight.vue";
import Delete from "../views/Delete.vue";
import Results from "../views/Results.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin
    // beforeEnter(to, from, next) {
    //   var token = localStorage.getItem("access_token");
    //   if (token) {
    //     return next();
    //   } else {
    //     router.push({ name: "Login", query: { error: 403 } });
    //   }
    // }
  },
  {
    path: "/admin/delete",
    name: "Delete",
    component: Delete
    // beforeEnter(to, from, next) {
    //   var token = localStorage.getItem("access_token");
    //   if (token) {
    //     return next();
    //   } else {
    //     router.push({ name: "Login", query: { error: 403 } });
    //   }
    // }
  },
  {
    path: "/admin/results",
    name: "Results",
    component: Results
    // beforeEnter(to, from, next) {
    //   var token = localStorage.getItem("access_token");
    //   if (token) {
    //     return next();
    //   } else {
    //     router.push({ name: "Login", query: { error: 403 } });
    //   }
    // }
  },
  {
    path: "/insight",
    name: "Insight",
    component: Insight
  },
  {
    path: "/insight/survey",
    name: "Survey",
    component: Survey
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
