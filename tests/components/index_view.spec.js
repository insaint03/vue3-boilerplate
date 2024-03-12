import { raw_component } from '%/with'
import indexPage from '@/views/indexView.vue'

describe('indexView component', ()=>{
    it('should contain v-btn', async ()=>{
        const raw = await raw_component(indexPage);
        // contains v-btn
        assert(raw.find('v-btn').exists());
        // test its text
        assert(raw.find('v-btn').text().includes('Click'));
    })
});
