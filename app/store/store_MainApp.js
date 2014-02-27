// d e a c
Ext.define('Caral.store.store_MainApp', {

    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.LocalStorage'],
    config: {

        model: 'Caral.model.model_MainApp',
        data: [
            {f_name : 'อนุชิต',f_surname : 'ชโลธร',f_tel :'0898433717', f_email:'anoochit@gmail.com',f_lineid:'anuchit.ch' }
        ],
        autoLoad: true,
        proxy: {
            id: 'Caral-Local-ID',
            type: 'localstorage'
        }

    }

});