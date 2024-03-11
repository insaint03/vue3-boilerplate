import vuetify from './vuetify.js';
import vuerouter from './vuerouter.js';

export default (app)=>{
    return app
        .use(vuetify)
        .use(vuerouter)
}