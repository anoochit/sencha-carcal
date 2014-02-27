Ext.define('Caral.controller.controller_Setting', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            ref_view_MainApp: 'wg_view_MainApp',
            ref_view_Setting_bnt_Back: 'wg_view_Setting #bnt_Back',
            ref_view_Setting_bnt_Update: 'wg_view_Setting #bnt_Update',
            ref_view_Setting:'wg_view_Setting'
        },
        control: {
            ref_view_Setting_bnt_Back: {
                tap: 'FNC_Back'
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function() {
        console.log('--> Control Setting');
        var _store = Ext.getStore('store_MainApp');
        var _rec=_store._totalCount;
        var _view=this.getRef_view_Setting();



    },

    FNC_Back: function() {
        console.log('--> Back push');

        //goto form result
        var _view = this.getRef_view_MainApp();
        Ext.Viewport.animateActiveItem(_view, {type: 'flip'});
    }

});
