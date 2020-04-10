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
