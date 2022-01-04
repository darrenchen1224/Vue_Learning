<template>
  <v-app>
    <v-main>
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
      <router-link to="/counter">Counter</router-link> |
      <router-link to="/inforCard">InforCard</router-link> |
      <router-link to="/controller">Controller</router-link>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
