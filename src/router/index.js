import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import UserLogin from "../views/UserLogin.vue";
import UserHome from "../views/UserHome.vue";
import RegisterNewUser from "../views/RegisterNewUser";
import ListUsers from "../views/ListUsers";
import CostumerTable from "../views/CostumerTable"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: UserLogin
  },
  {
    path: "/user-home",
    name: "UserHome",
    component: UserHome
  },
  {
    path: "/register-new-user",
    name: "RegisterNewUser",
    component: RegisterNewUser
  },
  {
    path: "/list-users",
    name: "ListUsers",
    component: ListUsers
  },
  {
    path: "/costumer_tables",
    name: "CostumerTable",
    component: CostumerTable
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
