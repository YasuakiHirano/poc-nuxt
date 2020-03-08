<template lang="pug">
  v-rows
    v-col(cols='12')
      v-card
        v-card-title Pugで書いてみた
        v-card-text.font-weight-bold
          hr.mb-2
          div pugでいろいろ書いてみるテスト
          div タグ名.クラスでクラスがつけれる
          div 属性はタグ名(属性='属性値')でつけれる
          hr.mt-2.mb-2
</template>

<script>
  import Logo from '~/components/Logo.vue'
       import VuetifyLogo from '~/components/VuetifyLogo.vue'

  export default {
      components: {}
  }
</script>
