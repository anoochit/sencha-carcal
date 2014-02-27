// d e a c
Ext.define('Caral.view.view_MainApp', {

    extend: 'Ext.form.Panel',
    alias: 'widget.wg_view_MainApp',

    requires: ['Ext.TitleBar', 'Ext.form.FieldSet', 'Ext.field.Number', 'Ext.field.Spinner'],

    config: {

        items: [
            {
                xtype: 'titlebar',
                title: 'คำนวณเงินผ่อนรถยนต์',

                items: [
                    {
                        xtype: 'button',
                        align: 'left',
                        iconCls: 'settings',
                        itemId: 'bnt_Setting'
                    },
                    {
                        xtype: 'button',
                        align: 'right',
                        iconCls: 'info',
                        itemId: 'bnt_About'
                    }
                ]
            },
            {

                items: [
                    {
                        xtype: 'fieldset',

                        items: [
                            {

                                xtype: 'numberfield',
                                name: 'txt_CarPrice',
                                label: 'ราคารถยนต์',
                                placeHolder: 'ราคารถยนต์',
                                minValue: 0
                            },
                            {
                                xtype: 'numberfield',
                                name: 'txt_DownPayment',
                                label: 'ดาวน์ (%)',
                                placeHolder: 'เงินดาวน์',
                                minValue: 0,
                                maxValue: 100
                            },
                            {
                                xtype: 'textfield',
                                name: 'txt_InterestRate',
                                label: 'อัตราดอกเบี้ย (%)',
                                placeHolder: 'อัตราดอกเบี้ย (%)'
                            },
                            {
                                xtype: 'spinnerfield',
                                name: 'txt_PaymentYear',
                                label: 'ระยะเวลาผ่อน (ปี)',
                                minValue: 1,
                                maxValue: 10,
                                stepValue: 1,
                                cycle: true
                            }
                        ]
                    },
                    {
                        items: [
                            {
                                xtype: 'button',
                                text: 'คำนวณ',
                                ui: 'confirm',
                                //iconCls: 'compose',
                                itemId: 'bnt_Cal'
                            }
                        ]

                    }

                ]
            }
        ]

    }



})
;