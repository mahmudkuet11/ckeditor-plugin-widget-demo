CKEDITOR.plugins.add( 'bootstrap', {
    requires: 'widget',
    icons: 'bootstrap',

    init: function( editor ) {
        // Plugin logic goes here...

        this.registerWidget.addPanel(editor);
		this.registerWidget.addButton(editor);

		this.registerToobarButton(editor);

		editor.addCommand( 'insertPanel', {
            exec: function( editor ) {
            	editor.execCommand( 'bootstrap_panel' );    
			}
        });
        editor.ui.addButton( 'Bootstrap', {
		    label: 'Insert Bootstrap Component',
		    command: 'insertPanel',
		    toolbar: 'editing'
		});


    },
    registerToobarButton: function(editor){
		var config = editor.config;
		editor.ui.addRichCombo('bootstrap', {
			label: 'Giftwee',
			title: 'Giftwee component',
			panel :
            {
               css : [ config.contentsCss, CKEDITOR.getUrl( 'skins/moono-lisa/editor.css' ) ]
            },
			init: function(){
				this.add('panel', 'Panel', 'Add a panel');
				this.add('button', 'Button', 'Add a Button');
			},
			onClick : function( value ){         
               if(value == 'panel'){
					editor.execCommand( 'bootstrap_panel' );   
               }
               if(value == 'button'){
					editor.execCommand( 'bootstrap_button' );   
               }
            }
		});
    },
    registerWidget: {
    	addPanel: function(editor){
			editor.widgets.add('bootstrap_panel', {
	        	template: 
					'<div class="panel panel-primary">'+
					  '<div class="panel-heading">'+
					    '<h3 class="panel-title">Panel primary</h3>'+
					  '</div>'+
					  '<div class="panel-body">'+
					    'Panel content'+
					  '</div>'+
					'</div>',

	        	editables: {
	        		panel_title: {
	        			selector: '.panel-title',
	        			allowedContent: ''
	        		},
	        		panel_body: {
	        			selector: '.panel-body',
	        		}
	        	}
	        });
    	},
    	addButton: function(editor){
    		CKEDITOR.dialog.add( 'bootstrap_button', CKEDITOR.plugins.getPath('bootstrap') + 'dialogs/button.js' );

	        editor.widgets.add('bootstrap_button', {
	        	template: '<button class="btn btn-primary">Click meh</button>',
	        	editables: {
	        		label: {
	        			selector: 'button'
	        		}
	        	},
	        	dialog: 'bootstrap_button',
	        	init: function(){
	        		this.setData('label',this.element.textContent);
	        		if(this.element.hasClass('btn-default')){
	        			this.setData('btn_type','default');
	        		}
	        		if(this.element.hasClass('btn-primary')){
	        			this.setData('btn_type','primary');
	        		}
	        		if(this.element.hasClass('btn-success')){
	        			this.setData('btn_type','success');
	        		}
	        		if(this.element.hasClass('btn-warning')){
	        			this.setData('btn_type','warning');
	        		}
	        		if(this.element.hasClass('btn-danger')){
	        			this.setData('btn_type','danger');
	        		}
	        	},
	        	data: function(){
	        		if(this.data.label != '' && this.data.label != undefined){
	        			//console.log(this.element.$);
	        			this.element.$.innerHTML = this.data.label;
	        		}else{
	        			this.element.$.innerHTML = "Click";
	        		}

	        		if(this.data.btn_type != ''){
	        			this.element.removeClass('btn-default');
	        			this.element.removeClass('btn-primary');
	        			this.element.removeClass('btn-success');
	        			this.element.removeClass('btn-warning');
	        			this.element.removeClass('btn-danger');

	        			this.element.addClass('btn-' + this.data.btn_type);
	        		}
	        	}
	        });
    	}
    }
} );