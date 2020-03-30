<template>
  <v-row>
    <v-col cols="12">
      <h2>component test</h2>
    </v-col>
    <v-col cols="12">
      <Modal ref="testModal" :parentData="parentData"></Modal>
    </v-col>
    <v-col cols="12">
      <v-btn @click="showComponentData()">コンポーネントで入力したデータ</v-btn>
    </v-col>
  </v-row>
</template>
<script>
import Modal from '../components/Modal'
export default {
  components: {
    Modal,
  },
  data() {
    return {
      parentData: {}
    }
  },
  mounted (){
    this.parentData.testString = 'テスト引数文字列🐬';
    this.parentData.test2String = 'テスト引数二つ目🐬';
    this.parentData.test3String = '';
  },
  methods: {
    showComponentData() {
      alert(this.parentData.test3String);
    }
  }
}
</script>
