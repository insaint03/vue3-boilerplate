import { mount } from '@vue/test-utils'
import { describe, expect } from 'vitest'
import vuetify from '@/plugins/vuetify'
import App from '@/App.vue'

describe('App test', ()=>{
    const wrapper = mount({
        template: '<App></App>',
        props: {},
        global: {
            components: { App },
            plugins: [vuetify],
        }
    });

    expect(wrapper.text()).toContain('Hello');
})