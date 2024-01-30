import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils';
import axios from 'axios';

import PostList from '@/components/PostList.vue';

const PostsMock = [
  {
    userId: 1,
    id: 1,
    title: 'My first post',
    body: 'quia et suscipit recusandae consequuntur expedita et architecto',
  },
];

vi.mock('axios');

describe('PostList.vue', () => {
  // reset all mocks for each test suit
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('should make a fetch call with axios when the component mounts', () => {
    mount(PostList);
    expect(axios.get).toHaveBeenNthCalledWith(1, 'https://jsonplaceholder.typicode.com/posts');
  });

  it('should render loading when fetching posts', async () => {
    const wrapper = mount(PostList);
    await wrapper.vm.$nextTick();
    expect(wrapper.html()).toContain('Loading...');
  });

  it('should render posts correctly', async () => {
    // mock api asynchronous call data
    vi.spyOn(axios, 'get').mockReturnValue(
      Promise.resolve({
        data: PostsMock,
      }),
    );

    const wrapper = mount(PostList);

    // flush all asynchronous calls with flushPromises
    await flushPromises();
    expect(wrapper.html()).toContain('My first post');
  });
});
