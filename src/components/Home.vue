<template>
  <Header />
  <h1>Hello {{name}}, Welcome to home page</h1>
</template>
<script>
import Header from "./Header.vue";

export default {
  name: "Home",
  data() {
    return {
      name: "",
    };
  },
  components: {
    Header,
  },
  mounted() {
    let users = localStorage.getItem("user-info");
    this.name= JSON.parse(users).name;
    if (!users) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
