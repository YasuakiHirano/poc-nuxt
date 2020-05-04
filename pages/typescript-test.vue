<template lang="pug">
  div.container
    v-row
      v-col.just(cols="8")
        v-text-field(v-model="textField" placeholder="input area")
        v-btn
          span(@click="testAction()") test!
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  methods: {

  }
})
export default class extends Vue {
  private textField: string = '';

  created() {
    this.textField = 'test123';
  }

  mounted() {
    this.textField = 'test123';
  }

  public testAction() {
    alert(this.textField);
  }
}
</script>
