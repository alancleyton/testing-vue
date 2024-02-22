import { describe, it, vi, expect, beforeEach, afterEach } from 'vitest';
import { useTodos } from './useTodos';
import { flushPromises } from '@vue/test-utils';

const todosMock = [
  {
    userId: 1,
    id: 1,
    title: 'My first Todo',
    completed: true,
  },
];

const fetchMockResolvedValue = () =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(todosMock),
  } as Response);

describe('useTodos.ts', () => {
  describe('getTodos', () => {
    // mock window global fetch
    const mockFetch = vi.spyOn(window, 'fetch');
    const { getTodos, isLoading, todos } = useTodos();

    beforeEach(() => {
      mockFetch.mockReturnValue(fetchMockResolvedValue());
    });

    it('should set isLoading to true when fetching todos', () => {
      getTodos();
      expect(isLoading.value).toBeTruthy();
    });

    it('should fetch todos', async () => {
      await getTodos();
      expect(mockFetch).toHaveBeenCalledTimes(1);
      expect(mockFetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos');
    });

    it('should set todos when successfully fetched', async () => {
      await getTodos();
      expect(todos.value.length).toBe(1);
      expect(todos.value[0].title).toBe('My first Todo');
    });

    it('should set isLoading to false when successfully fetched', async () => {
      await getTodos();
      await flushPromises();
      expect(isLoading.value).toBeFalsy();
    });

    afterEach(() => {
      mockFetch.mockClear();
    });
  });
});
