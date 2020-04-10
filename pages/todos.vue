<template lang="pug">
  div.container
    v-row
      v-col.just(cols="8")
        v-text-field(v-model="todoItem")
        v-btn.primary(@click="addTodo()") add
    div
      v-list
        v-list-item-group(v-for="(item, key) in todos")
          v-list-item
            v-checkbox
            v-list-item-content {{item}}
            v-list-item-icon
              v-icon(@click="deleteTodo(key)") mdi-delete-circle
          v-divider
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      todoItem: '',
    }
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
  mounted () {
  },
}
</script>
