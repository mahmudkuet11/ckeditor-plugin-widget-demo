CKEDITOR.dialog.add( 'bootstrap_button', function( editor ) {
    return {
        title: 'Edit Button',
        minWidth: 500,
        minHeight: 200,
        contents: [
            {
                id: 'label',
                elements: [
                    {
                    	id:'label', 
                    	type: 'text', 
                    	label: 'Label of Button',
                    	width: '400px',
                    	setup: function( widget ) {
				            this.setValue( widget.data.label );
				        },
				        commit: function( widget ) {
				            widget.setData( 'label', this.getValue() );
				        }
                    },
                    {
                    	id: 'btn_type',
                    	type: 'select',
                    	label: 'Select Button Type',
                    	//width: '400px',
                    	default: 'primary',
                    	items: [
                    		['', ''],
                    		['Default', 'default'],
                    		['Primary', 'primary'],
                    		['Success', 'success'],
                    		['Warning', 'warning'],
                    		['Danger', 'danger']
                    	],
                    	setup: function( widget ) {
				            this.setValue( widget.data.btn_type );
				        },
				        commit: function( widget ) {
				            widget.setData( 'btn_type', this.getValue() );
				        }
                    }
                ]
            }
        ]
    };
} );