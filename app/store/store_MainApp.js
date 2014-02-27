// d e a c
Ext.define('Caral.store.store_MainApp', {

    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.LocalStorage'],
    config: {

        model: 'Caral.model.model_MainApp',

        autoLoad: true,
        proxy: {
            id: 'Caral-Local-ID',
            type: 'localstorage'
        }

    }

});