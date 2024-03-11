<template>
  <main>
      <v-container fluid>
        <v-row>
          <v-col>
            <h1>{{ message }} <v-icon>mdi-account</v-icon></h1>
          </v-col>
          <v-col>
            <v-btn text>Click Me!</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </main>
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