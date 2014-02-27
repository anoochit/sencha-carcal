// d e a c
Ext.define('Caral.view.view_Setting', {

    extend: 'Ext.form.Panel',
    alias: 'widget.wg_view_Setting',

    requires: ['Ext.TitleBar', 'Ext.form.FieldSet','Ext.field.Email'],

    config: {

        items: [
            {
                xtype: 'titlebar',
                title: 'ข้อมูลผู้ใช้',

                items: [
                    {
                        xtype: 'button',
                        align: 'left',
                        iconCls: 'arrow_left',
                        itemId: 'bnt_Back',
                        ui:'back'
                    }
                ]
            },
            {

                items: [
                    {
                        xtype: 'fieldset',
                        store: 'store_MainApp',

                        items: [
                            {
                                xtype: 'textfield',
                                name: 'txt_Name',
                                label: 'ชื่อ',
                                placeHolder: 'ชื่อ'
                            },
                            {
                                xtype: 'textfield',
                                name: 'txt_Surname',
                                label: 'นามสกุล',
                                placeHolder: 'นามสกุล'
                            },
                            {
                                xtype: 'textfield',
                                name: 'txt_Tel',
                                label: 'เบอร์โทรศัพท์',
                                placeHolder: 'เบอร์โทรศัพท์'
                            },
                            {
                                xtype: 'emailfield',
                                name: 'txt_Email',
                                label: 'อีเมล์',
                                placeHolder: 'Email'
                            },
                            {
                                xtype: 'textfield',
                                name: 'txt_LindID',
                                label: 'Line ID',
                                placeHolder: 'Line ID'
                            }
                        ]
                    },
                    {
                        items: [
                            {
                                xtype: 'button',
                                text: 'อัพเดทข้อมูล',
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