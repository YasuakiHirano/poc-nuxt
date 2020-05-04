<template lang="pug">
  div.container
    v-row
      v-col.just(cols="12")
        span {{title}}
      v-col.just(cols="8")
        v-text-field(v-model="todoItem")
        v-btn.primary(@click="addTodo()") add
    div
      v-list
        v-list-item-group(v-for="(item, key) in todos()")
          v-list-item
            v-checkbox
            v-list-item-content {{item}}
            v-list-item-icon
              v-icon(@click="deleteTodo(key)") mdi-delete-circle
          v-divider
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { mapActions, mapGetters } from 'vuex'

@Component({
  methods: {
    ...mapGetters({
      todos: 'todo/todoList'
    }),
    ...mapActions({
      addTodoItem: 'todo/add',
      deleteItem: 'todo/delete',
    })
  }
})
export default class extends Vue {
  private todoItem: string = '';
  private title: string = '';
  private todos!: () => [];
  private addTodoItem!: (item: string) => Promise<void>;
  private deleteItem!: (key: string) => Promise<void>;

  mounted() {
    this.title = 'typescriptでtodoリスト';
  }

  public addTodo() {
    this.addTodoItem(this.todoItem);
    this.todoItem = '';
  }

  public deleteTodo(key: string) {
    this.deleteItem(key);
  }
}
</script>
