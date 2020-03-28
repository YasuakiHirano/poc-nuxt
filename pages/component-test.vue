<template>
  <v-row>
    <v-col cols="12">
      <h2>component test</h2>
    </v-col>
    <v-col cols="12">
      <Modal ref="testModal"></Modal>
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
  mounted (){
    let parentData = {};
    parentData.testString = 'テスト引数文字列🐬';
    parentData.test2String = 'テスト引数二つ目🐬';
    parentData.test3String = '';

    this.$refs.testModal.parentData = parentData;
    console.log(this.$refs.testModal);
  },
  methods: {
    showComponentData() {
      alert(this.$refs.testModal.parentData.test3String);
    }
  }
}
</script>
