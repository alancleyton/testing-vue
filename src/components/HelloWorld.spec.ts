import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('should render with msg prop', () => {
    const instance = mount(HelloWorld, {
      props: {
        msg: 'Hello World!',
      },
    });

    expect(instance.html()).toContain('Hello World!');
  });
});
