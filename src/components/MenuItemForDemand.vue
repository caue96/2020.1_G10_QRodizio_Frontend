<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ name }}
      </p>
      <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
    </header>
    <div class="card-content">
      <div class="content">
        {{ description }}
        <br />
        Valor unitário: R$ {{ value }}
        <br />
        Quantidade:
        <input type="number" v-model="quantity" />
      </div>
    </div>
    <footer class="card-footer">
      <a @click="makeDemand" class="card-footer-item">Pedir</a>
    </footer>
    <b-loading
      :is-full-page="true"
      v-model="isLoading"
      :can-cancel="true"
    ></b-loading>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MenuItemForDemand",

  props: ["name", "description", "id", "value", "sessionUrl"],

  data() {
    return {
      isLoading: false,
      quantity: 1,
    };
  },

  watch: {
    quantity(newQuantity) {
      if (newQuantity < 1) {
        this.quantity = 1;
      }
    },
  },

  computed: {
    sessionId() {
      return this.$store.state.tableSession.id;
    },

    sessionUrl() {
      return this.$store.state.tableSession.url;
    },
  },

  methods: {
    async sendDemand() {
      let quantity = this.quantity;
      let item_id = this.id;
      let session_id = this.sessionId;

      this.isLoading = true;
      let response = await axios.post("http://127.0.0.1:5000/demands/", {
        customer: "Ninguem",
        quantity,
        item_id,
        session_id
      });
      this.isLoading = false;

      if (response.status == 201) {
        this.$router.push(`/table/${this.sessionUrl}`);
      } else {
        alert("Deu ruim");
        console.log(request);
      }
    },

    async makeDemand() {
      this.$buefy.dialog.confirm({
        message: "Deseja realizar esse pedido ?",
        onConfirm: async () => await this.sendDemand(),
      });
    },
  },
};
</script>

<style></style>
