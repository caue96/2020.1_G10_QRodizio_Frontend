<template>
  <div class="columns is-flex is-vcentered is-centered">
    <div class="column is-half">
      <div class="field">
        <label class="label">Tipo de conta:</label>
        <div class="control">
          <div class="select">
            <select v-model="role">
              <option value="basic">Funcionário</option>
              <option value="manager">Gerente</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Nome</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input"
            type="text"
            placeholder="Text input"
            v-model="name"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <p class="control has-icons-left has-icons-right">
          <input
            class="input"
            type="email"
            placeholder="Email"
            v-model="email"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </p>
      </div>

      <div class="field">
        <p class="control has-icons-left">
          <input
            class="input"
            type="password"
            placeholder="Password"
            v-model="password"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>

      <b-button @click="registerUser">Registrar</b-button>
      <hr />

      <div>
        {{ userCreated.message }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterNewUser",

  data() {
    return {
      role: "basic",
      name: "",
      email: "",
      password: "",
      userCreated: {
        error: false,
        message: "",
      },
    };
  },

  computed: {
    loggedUserToken() {
      return this.$store.state.userToken;
    },
  },

  methods: {
    clearForm() {
      this.role = "basic";
      this.name = "";
      this.email = "";
      this.password = "";
    },

    registerUser() {
      axios
        .post(
          "http://127.0.0.1:5000/auth/register",
          {
            role: this.role,
            name: this.name,
            email: this.email,
            password: this.password,
          },
          {
            headers: { Authorization: `Bearer ${this.loggedUserToken}` },
          }
        )
        .then(() => {
          this.userCreated.error = false;
          this.userCreated.message = "Usuário criado";
          this.clearForm();
        })
        .catch((error) => {
          this.userCreated.error = true;
          this.userCreated.message = error.response.data.error;
        });
    },
  },
};
</script>
