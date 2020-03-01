<template>
  <v-row justify="center">
    <v-col cols="9">
      <v-text-field v-model="name" label="user name"></v-text-field>
      <v-text-field v-model="email" label="email"></v-text-field>
      <v-text-field v-model="password" label="password" type="password"></v-text-field>
      <v-btn @click="movePage(1)" color="primary">push query</v-btn>
      <v-btn @click="movePage(2)" color="primary">push param</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
    }
  },
  methods: {
    movePage(flag) {
      if (flag === 1) {
        console.log('push query:', this.name);
        this.$router.push({ path: 'form-query-result-test' , query :{ name: this.name, email: this.email, password: this.password }});
      } else {
        console.log('push params:', this.name);
        this.$router.push({ path: `form-params-result-test/${this.name}/${this.email}/${this.password}` , params :{ name: this.name, email: this.email, password: this.password }});
      }
    }
  }
}
</script>
