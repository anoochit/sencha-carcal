// app na luk EVa
Ext.application({

    name: 'Caral',
    views: ['view_MainApp','view_Cal','view_Setting'],
    controllers: ['controller_MainApp','controller_Cal','controller_Setting'],
    models: ['model_MainApp'],
    stores: ['store_MainApp'],

    launch: function () {
        console.log('--> App Start');

        var page_MainApp = {
            xtype: 'wg_view_MainApp'
        }

        var page_Cal = {
            xtype: 'wg_view_Cal'
        }

        var page_Setting = {
            xtype: 'wg_view_Setting'
        }



        Ext.Viewport.add([page_MainApp,page_Cal,page_Setting]);
    }

});
