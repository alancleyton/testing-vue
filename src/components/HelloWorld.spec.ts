import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

const defaultOptions = {
  props: {
    msg: 'Hello World!',
  },
};

describe('HelloWorld.vue', () => {
  it('should render with msg prop', () => {
    const instance = mount(HelloWorld, defaultOptions);

    expect(instance.html()).toContain('Hello World!');
  });

  // whitebox test
  it('should increment count when increase method is called', () => {
    const instance = mount(HelloWorld, defaultOptions);

    // eslint-disable-next-line
    // @ts-ignore
    instance.vm.increment();

    // eslint-disable-next-line
    // @ts-ignore
    expect(instance.vm.count).toBe(1);
  });

  // blackbox test
  it('should increment count when button clicked', async () => {
    const instance = mount(HelloWorld, defaultOptions);

    const button = instance.find('button');
    await button.trigger('click');

    expect(button.text()).toBe('count is 1');
  });
});
