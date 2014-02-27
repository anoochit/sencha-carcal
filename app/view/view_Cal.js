Ext.define('Caral.view.view_Cal', {

    extend: 'Ext.form.Panel',
    alias: 'widget.wg_view_Cal',

    requires: ['Ext.TitleBar', 'Ext.form.FieldSet', 'Ext.field.Number', 'Ext.field.Spinner'],

    config: {

        items: [
            {
                xtype: 'titlebar',
                title: 'ผลลัพท์',

                items: [
                    {
                        xtype: 'button',
                        align: 'left',
                        iconCls: 'arrow_left',
                        itemId: 'bnt_Back',
                        ui:'back'
                    },
                    {
                        xtype: 'button',
                        align: 'right',
                        iconCls: 'action',
                        itemId: 'bnt_SentMail'
                    }
                ]
            },
            {

                items: [
                    {
                        xtype: 'fieldset',

                        items: [
                            {

                                xtype: 'textfield',
                                name: 'txt_Finance',
                                label: 'ยอดไฟแนนซ์',
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                name: 'txt_InterestRate',
                                label: 'ราคาดอกเบี้ยต่อปี',
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                name: 'txt_InterestRateYear',
                                label: 'ราคาดอกเบี้ย',
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                name: 'txt_Total',
                                label: 'ยอดที่ต้องจ่ายจริง',
                                readOnly: true
                            },
                            {
                                xtype: 'textfield',
                                name: 'txt_TotalMonth',
                                label: 'ค่างวดที่ต้องจ่ายต่อเดือน',
                                readOnly: true
                            }
                        ]

                    }
                ]
            }
        ]
    }
});