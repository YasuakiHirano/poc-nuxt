<template>
  <v-row justify="center">
    <v-col cols="9">
      <h2>URLパラメータ取得結果：route.params</h2>
      {{ this.$route.params.name }}<br>
      {{ this.$route.params.email }}<br>
      {{ this.$route.params.password }}<br>
      <v-btn color="purple" @click="returnPage()">戻る</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  created(){
    console.log('params:', this.$route.params);
  },
  data () {
    return {
    }
  },
  methods: {
    returnPage() {
      this.$router.go(-1);
    }
  }
}
</script>
