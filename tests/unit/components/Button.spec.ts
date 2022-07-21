import { mount, shallowMount } from '@vue/test-utils';
import Button from '@/components/Button.vue';

describe('SButton.vue', () => {
    
  it('render a component with label', () => {
    const wrapper = mount(Button, {
      propsData: {
        label: 'button'
      }
    })
    expect(wrapper.get('button')).toBeDefined()
    expect(wrapper.text()).toContain('button')
  })

  it('click', async () => {
    const wrapper = mount(Button, {
      propsData: {
        label: 'button'
      }
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.text()).toContain('clicked')
  })

})
