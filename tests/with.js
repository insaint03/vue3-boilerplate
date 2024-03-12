import { mount } from '@vue/test-utils'
import vuetify from '@/plugins/vuetify'
import vuerouter from '@/plugins/vuerouter'

global.ResizeObserver = require('resize-observer-polyfill');

module.exports = {
    async raw_component(component, props={}) {
        return mount(component, props);
    },
    async v_component(component, props={}) {
        return mount(component, {
            props,
            global: {
                plugins: [vuerouter, vuetify],
            }
        });
    }
}