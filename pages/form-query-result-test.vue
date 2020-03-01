<template>
  <v-row justify="center">
    <v-col cols="9">
      <h2>クエリーパラメータ取得結果：route.query</h2>
      {{ this.$route.query.name }}<br>
      {{ this.$route.query.email }}<br>
      {{ this.$route.query.password }}<br>
      <v-btn color="cyan" @click="returnPage()">戻る</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  created(){
    console.log('query:', this.$route.query);
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
