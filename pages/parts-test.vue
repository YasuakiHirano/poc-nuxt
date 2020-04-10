<template>
  <v-row>
    <v-col cols="12">
      <h2>v-alertのテスト</h2>
      <span>※v-btnをクリックすると表示</span>
      <v-alert type="success" v-model="successButtonAlert" dismissible>
        テストボタン１を押しました！
      </v-alert>
      <v-alert type="info" v-model="infoButtonAlert" dismissible>
        テストボタン２を押しました！
      </v-alert>
      <v-alert type="warning" v-model="warningButtonAlert" dismissible>
        テストボタン３を押しました！
      </v-alert>
      <v-alert type="error" v-model="errorButtonAlert" dismissible>
        テストボタン４を押しました！
      </v-alert>
    </v-col>
    <v-col cols="12">
      <h2>v-btnのテスト</h2>
      <v-btn color="success" @click="clickSuccess()">
        テストボタン１
      </v-btn>
      <v-btn color="info" @click="clickInfo()">
        テストボタン２
      </v-btn>
      <v-btn color="warning" @click="clickWarning()">
        テストボタン３
      </v-btn>
      <v-btn color="error" @click="clickError()">
        テストボタン４
      </v-btn>
    </v-col>
    <v-col cols="12">
      <h2>v-listのテスト</h2>
      <h3 class="pt-3">one line</h3>
      <v-list color="#4fc3f7">
        <v-list-item v-for="item in listItems" :key="item.title">
          <v-list-item-icon>
            <v-icon class="white--text">{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" class="white--text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <h3 class="pt-3">two line</h3>
      <v-list two-line rounded>
        <v-list-item v-for="item in listItems" :key="item.title">
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
            <v-list-item-subtitle v-text="item.subtext"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
    <v-col cols="12">
      <h2>v-iconのテスト</h2>
      <v-btn color="red" x-large>
        <v-icon class="white--text" x-large>mdi-bike-fast</v-icon>
      </v-btn>
      <v-btn color="blue" icon>
        <v-icon x-small color="red">mdi-face</v-icon>
      </v-btn>
      <v-btn color="blue" icon>
        <v-icon small>mdi-face</v-icon>
      </v-btn>
      <v-btn color="blue" icon>
        <v-icon medium>mdi-face</v-icon>
      </v-btn>
      <v-btn color="blue" icon>
        <v-icon large>mdi-face</v-icon>
      </v-btn>
      <v-btn color="blue" icon>
        <v-icon x-large>mdi-face</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    data() {
      return {
        successButtonAlert: false,
        infoButtonAlert: false,
        warningButtonAlert: false,
        errorButtonAlert: false,
        listItems: [
          { icon: 'mdi-airplay', title: 'test1', subtext:'subtext1' },
          { icon: 'mdi-help', title: 'test2', subtext:'subtext2' },
          { icon: 'mdi-note', title: 'test3', subtext:'subtext3' },
          { icon: 'mdi-label', title: 'test4', subtext:'subtext4' },
        ],
        clickSuccess : () => {
          this.successButtonAlert = true;
        },
        clickInfo : () => {
          this.infoButtonAlert = true;
        },
        clickWarning : () => {
          this.warningButtonAlert = true;
        },
        clickError : () => {
          this.errorButtonAlert = true;
        },
      }
    }
  }
</script>
