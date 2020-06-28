<template :align="start" :justify="start">
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title class="headline">
            Hello, World!
          </v-card-title>
          <v-card-text>
            Nuxt+Vuetifyのテストページです<br>
            <ul>
              <li>
                <nuxt-link to="card-test">
                  v-card test
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="tooltip-test">
                  v-tooltip test
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="parts-test">
                  parts test(v-btn, v-alert ..etc)
                </nuxt-link>
              </li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <h2 v-if="qiitaArticles.length !== 0">
          qiitaの記事 - 作成日付降順
        </h2>
        <v-list>
          <v-list-item-group v-for="(item, index) in qiitaArticles" :key="index">
            <v-list-item>
              <v-list-item-content><a :href="item.url" target="_blank">{{item.title}}</a></v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="12">
        <h2 v-if="todos.length !== 0">
          todos
        </h2>
        <v-list>
          <v-list-item-group v-for="(item, index) in todos" :key="index">
            <v-list-item>
              <v-list-item-content>{{item}}</v-list-item-content>
              <v-list-item-icon>
                <v-icon @click="deleteTodo(key)">mdi-delete-circle</v-icon>
              </v-list-item-icon>
            </v-list-item>
            <v-divider></v-divider>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      qiitaArticles: []
    }
  },
  async mounted() {
    let page = this;
    await this.$axios.$get('https://qiita.com/api/v2/items?page=1&per_page=10').then(function(result){
      page.qiitaArticles = result;
    });

    await this.$axios.$get('/zipApi/api/search?zipcode=8100012').then(function(result) {
      console.log(result);
    });
  },
  computed: {
    ...mapGetters({
      todos: 'todo/todoList'
    }),
  },
  methods: {
    ...mapActions({
      addTodoItem: 'todo/add',
      deleteItem: 'todo/delete'
    }),
    addTodo () {
      this.addTodoItem(this.todoItem);
      this.todoItem = '';
    },
    deleteTodo (key) {
      this.deleteItem(key);
    },
  },
}
</script>
