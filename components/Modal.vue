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
      v-text-field(v-model="addText" label="input text")
      v-btn(color="primary" @click="setParentData()") 親のデータ変更(*parentData.text3String)
</template>
<script>
export default {
  props: {
    parentData: Object
  },
  data() {
    return {
      dialog: false,
      addText: '',
    }
  },
  methods: {
    showModal() {
      this.$data.dialog = true;
    },
    setParentData() {
      this.parentData.test3String = this.addText;
    }
  }
}
</script>

