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

  // whitebox test
  it('should increment count when increase method is called', () => {
    const instance = mount(HelloWorld);

    // eslint-disable-next-line
    // @ts-ignore
    instance.vm.increment();

    // eslint-disable-next-line
    // @ts-ignore
    expect(instance.vm.count).toBe(1);
  });

  // blackbox test
  it('should increment count when button clicked', async () => {
    const instance = mount(HelloWorld);

    const button = instance.find('button');
    await button.trigger('click');

    expect(button.text()).toBe('count is 1');
  });
});
