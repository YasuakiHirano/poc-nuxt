<template lang="pug">
  div.container
    v-row
      v-col.just(cols="8")
        v-text-field(v-model="todoItem")
        v-btn.primary(@click="addTodo()") add
    div
      v-list
        v-list-item-group(v-for="item in todos")
          v-list-item
            v-list-item-content {{item}}
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
      addTodoItem: 'todo/add'
    }),
    addTodo () {
      this.addTodoItem(this.todoItem);
    }
  },
  mounted () {
  },
}
</script>
