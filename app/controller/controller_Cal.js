Ext.define('Caral.controller.controller_Cal', {
    extend: 'Ext.app.Controller',

    requires: ['Ext.MessageBox'],
    
    config: {
        refs: {
            ref_view_MainApp: 'wg_view_MainApp',
            ref_view_Cal_bnt_Back:'wg_view_Cal #bnt_Back',
            ref_view_Cal_bnt_SendMail:'wg_view_Cal #bnt_SentMail'
        },
        control: {
            ref_view_Cal_bnt_Back: {
                tap:'FNC_Back'
            },
            ref_view_Cal_bnt_SendMail: {
                tap:'FNC_SendMail'
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function() {
        console.log('--> Control Cal');
    },

    FNC_Back: function() {
        console.log('--> Back push');

        var _view = this.getRef_view_MainApp();
        Ext.Viewport.animateActiveItem(_view, {type: 'flip'});
    },

    FNC_SendMail: function() {
        console.log('--> SendMail push');
        Ext.Msg.alert('ส่งข้อมูล', 'ส่งข้อมูลเรียบร้อยแล้ว');
    }

});
