
//var Groups = require('./DynamicFields/Groups/Groups.vue');
//var GroupFields = require('./DynamicFields/Groups/GroupFields.vue');
import store from './app';
/**
 * Export the Spark application.
 */
module.exports = {
    el: '#dynamicFields-app',

    store : store,

    components: {
        //Groups : Groups,
        //GroupFields : GroupFields
    },

    /*
     * Bootstrap the application. Load the initial data.
     */
    ready: function () {

    },

    data : {

    }
};