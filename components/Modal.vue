<template lang="pug">
  div
    div
      span ダイアログコンポーネント呼び出し元
    div
      v-dialog(v-model="dialog")
        v-card
          v-card-title ダイアログのタイトル！😃
          v-card-text
            div ダイアログ表示テスト
            div 親から渡したデータ1:[{{parentData.testString}}]
            div 親から渡したデータ2:[{{parentData.test2String}}]
          v-card-actions
            v-btn(color="primary" @click="dialog = false;") はい
            v-btn(color="green white--text" @click="dialog = false;") いいえ
    div.mb-2
      v-btn(color="primary" @click="showModal()") モーダル表示
    div
      v-btn(color="primary" @click="setParentData()") 親から貰ったデータ変更
</template>
<script>
export default {
  data() {
    return {
      dialog: true,
      parentData: '',
    }
  },
  methods: {
    showModal() {
      this.$data.dialog = true;
    },
    setParentData() {
      this.$data.parentData.test3String = 'コンポーネントで値変更！';
    }
  }
}
</script>

