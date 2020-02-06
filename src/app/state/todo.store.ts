import { Store, StoreConfig } from "@datorama/akita";
import { Todo } from "../todo.model";

export interface TodoState {
  todos: Todo[];
}

export function createInitialState(): TodoState {
  return { todos: [] };
}

@StoreConfig({ name: "todos" })
export class TodoStore extends Store<TodoState> {
  constructor() {
    super(createInitialState());
  }
}
