Ext.define('Caral.model.model_MainApp', {
    extend: 'Ext.data.Model',
    
    config: {
        identifier: 'uuid',
        fields: [
            { name: 'f_name', type: 'string' },
            { name: 'f_surname', type: 'string' },
            { name: 'f_tel', type: 'string' },
            { name: 'f_email', type: 'string' },
            { name: 'f_lineid', type: 'string' }
        ]
//        validations: [
//            { }
//        ]
    }
});
