<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>My Personal Costs</h1>
    <AddButton></AddButton>
    <List></List>
    <Form></Form>
    <Pagination></Pagination>
  </div>
</template>

<script>
import AddButton from "./components/AddButton.vue";
import Form from "./components/Form.vue";
import List from "./components/List.vue";
import Pagination from "./components/Pagination.vue";

export default {
  name: "App",
  components: {
    AddButton,
    Form,
    List,
    Pagination,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
