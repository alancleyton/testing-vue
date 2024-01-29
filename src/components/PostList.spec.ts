import { describe, it, expect, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import axios from 'axios';

import PostList from '@/components/PostList.vue';

vi.mock('axios');

describe('PostList.vue', () => {
  it('should make a fetch call with axios when the component mounts', () => {
    shallowMount(PostList);

    expect(axios.get).toHaveBeenNthCalledWith(1, 'https://jsonplaceholder.typicode.com/posts');
  });
});
