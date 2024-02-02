import { ref } from 'vue';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const useTodos = () => {
  const isLoading = ref<boolean>(false);
  const error = ref<unknown>(null);
  const todos = ref<Todo[]>([]);

  const getTodos = async (): Promise<void> => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      todos.value = data;
    } catch (err) {
      error.value = err;
    } finally {
      isLoading.value = false;
    }
  };

  return { isLoading, error, todos, getTodos };
};
