import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import UserLoggin from "../views/UserLoggin.vue";
import UserHome from "../views/UserHome.vue";
import RegisterNewUser from "../views/RegisterNewUser";
import ListUsers from "../views/ListUsers";
import EmployeeDemands from "../views/EmployeeDemands";
import ClientDemands from "../views/ClientDemands";


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/loggin",
    name: "Loggin",
    component: UserLoggin
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
    path: "/employee-demands",
    name: "EmployeeDemands",
    component: EmployeeDemands
  },
  {
    path: "/client-demands",
    name: "ClientDemands",
    component: ClientDemands
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
