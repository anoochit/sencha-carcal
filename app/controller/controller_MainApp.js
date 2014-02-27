Ext.define('Caral.controller.controller_MainApp', {
    extend: 'Ext.app.Controller',

    requires: ['Ext.MessageBox'],

    config: {
        refs: {
            ref_view_MainApp: 'wg_view_MainApp',
            ref_view_MainApp_bnt_Setting: 'wg_view_MainApp #bnt_Setting',
            ref_view_MainApp_bnt_About: 'wg_view_MainApp #bnt_About',
            ref_view_MainApp_bnt_Cal: 'wg_view_MainApp #bnt_Cal',
            //ref_view_MainApp_bnt_Reset: 'wg_view_MainApp #bnt_Reset',
            ref_view_Cal: 'wg_view_Cal',
            ref_view_Setting: 'wg_view_Setting'
        },
        control: {

            ref_view_MainApp_bnt_Setting: {
                tap: 'FNC_Setting'
            },
            ref_view_MainApp_bnt_About: {
                tap: 'FNC_About'
            },
            ref_view_MainApp_bnt_Cal: {
                tap: 'FNC_Cal'
            },
            ref_view_MainApp_bnt_Reset: {
                tap: 'FNC_Reset'
            }
        }
    },

    //called when the Application is launched, remove if not needed
    launch: function () {
        console.log('--> Control MainApp');
    },

    FNC_Setting: function () {
        console.log('--> Setting push');

        // goto setting view
        var _view = this.getRef_view_Setting();
        Ext.Viewport.animateActiveItem(_view, {type: 'flip'});
    },

    FNC_About: function () {
        console.log('--> About push');

        Ext.Msg.alert('เกี่ยวกับ', 'โปรแกรมคำนวณเงินผ่อนงวดรถยนต์');
    },

    FNC_Cal: function () {
        console.log('--> Cal push');

        // get values from a from
        var _view = this.getRef_view_MainApp();
        var _values = _view.getValues();
        var _InerestRate = (parseFloat(_values.txt_InterestRate));
        console.log(_values);

        // validate value
        if ((_values.txt_CarPrice == null) || (_values.txt_DownPayment == null) || (_values.txt_DownPayment > 100)) {
            Ext.Msg.alert('ผิดพลาด', 'ข้อมูลผิดพลาด กรุณากรอกข้อมูลให้ถูกต้อง');
        } else {
            // calculate
            var fFinance = (_values.txt_CarPrice - (_values.txt_CarPrice * (_values.txt_DownPayment) / 100));
            var fInterestRate = ((fFinance * _InerestRate) / 100);
            var fInterestRateYear = (fInterestRate * _values.txt_PaymentYear);
            var fTotal = (fInterestRateYear + fFinance);
            var fTotalMonth = (fTotal / (12 * _values.txt_PaymentYear));

            //set to form
            var _viewCal = this.getRef_view_Cal();
            console.log(_viewCal);

            _viewCal.setValues({
                txt_Finance: fFinance.toFixed(2),
                txt_InterestRate: fInterestRate.toFixed(2),
                txt_InterestRateYear: fInterestRateYear.toFixed(2),
                txt_Total: fTotal.toFixed(2),
                txt_TotalMonth: fTotalMonth.toFixed(2)
            });

            //goto form result
            Ext.Viewport.animateActiveItem(_viewCal, {type: 'flip'});

        }

    }

//    ,
//
//    FNC_Reset: function () {
//        console.log('--> Reset push');
//
//        var _view = this.getRef_view_MainApp();
//        _view.reset();
//
//    }


});
