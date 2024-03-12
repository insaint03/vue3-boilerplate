<template>
  <v-app app>
    <h1>{{ message }}</h1>
    <router-view />
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue!'
    };
  }
}
</script>