<template>
  <v-row>
    <v-col cols="12">
      <h2>v-tooltip test.</h2>
    </v-col>
    <v-col cols="12">
      <h3 class="pb-5">ツールチップ上下左右テスト</h3>
      <p>
        ・ここが
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <span v-on="on" class="light-blue--text">上ポップアップ</span>
          </template>
          <span>ツールチップ上表示</span>
        </v-tooltip>
        する！<br><br>
        ・ここが
        <v-tooltip right>
          <template v-slot:activator="{ on }">
            <span v-on="on" class="light-blue--text">右ポップアップ</span>
          </template>
          <span>ツールチップ右表示</span>
        </v-tooltip>
        する！<br><br>
        ・ここが
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <span v-on="on" class="light-blue--text">下ポップアップ</span>
          </template>
          <span>ツールチップ下表示</span>
        </v-tooltip>
        する！<br><br>
        ・ここが
        <v-tooltip left max-width="200">
          <template v-slot:activator="{ on }">
            <span v-on="on" class="light-blue--text">左ポップアップ</span>
          </template>
          <span>ツールチップ左表示aaaaaaaaabbbbbbbccccccdddddd長いテキストはmax-width指定</span>
        </v-tooltip>
        する！
      </p>
      <h3 class="pt-5 pb-5">htmlのツールチップ</h3>
      <p>テストテストテストテストテスト
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <span v-on="on" class="red--text">テスト</span>
          </template>
          <span>HTMLテストタグ<br>テスト</span>
        </v-tooltip>
        テストテストテストテストテストテスト...........</p>
      <p>変数の値を展開するテスト
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <span v-on="on" class="green--text">テスト</span>
          </template>
          <span v-html="this.tooltipText"></span>
        </v-tooltip>
        テストテストテストテストテストテスト...........</p>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    data () {
      return {
        tooltipText: '変数で<br>改行いれたり<span class="blue--text font-weight-bold">文字色</span>変えたり'
      }
    }
  }
</script>
