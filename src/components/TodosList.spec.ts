import { describe, it, expect, vi, Mock } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import TodoList from '@/components/TodoList.vue';

describe('TodoList.vue', () => {
  global.fetch = vi.fn() as Mock;

  it('should make a fetch call when the component mounts', () => {
    shallowMount(TodoList);

    expect(fetch).toHaveBeenNthCalledWith(1, 'https://jsonplaceholder.typicode.com/todos');
  });
});
