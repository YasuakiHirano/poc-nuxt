<template lang="pug">
  div.container
    h2 郵便番号検索
    v-row(align="center")
      v-col(cols='3')
        v-text-field(label="郵便番号" v-model="zipcode" placeholder="8100000" dense hint)
      v-col(cols='4')
        v-btn.primary(@click="search") 検索
    v-row
      v-col(cols='12')
        v-list
          v-list-item-group(v-for="(item, key) in searchResults")
            v-list-item
              v-list-item-content {{item.address1}}{{item.address2}}{{item.address3}} ({{item.kana1}}{{item.kana2}}{{item.kana3}})
            v-divider
</template>

<script>
export default {
  data() {
    return {
      zipcode: null,
      searchResults: [],
    }
  },
  mounted() {
    console.log('mounted plugin test page');
  },
  methods: {
    async search() {
      let page = this;
      await this.$zipcode(this.zipcode).then(function(result) {
        page.searchResults = result.data.results;
        for (let key in result.data.results){
          let value = result.data.results[key];
        }
      });
    }
  }
}
</script>
