/**
 * dropshuttle.shell.js
 * shell module for dropshuttl
 */

/*jslint    browser : true, continue : true,
 devel : true, indent : 2, maxerr : 50,
 newcap : true, nomen : true, plusplus:true,
 regexp : true, sloppy : true, vars : true,
 white : true
 */
/* global $, dropshuttl */

dropshuttl.shell = (function(){
	//-----------------begin module scope variables--------------
	var 
		configMap = {
			main_html : String()
				+'<div  class="dropshuttl-shell-head">'
				   + '<div class="dropshuttl-shell-head-logo"></div>'
				   + '<div class="dropshuttl-shell-head-navigation"></div>'
				   + '<div class="dropshuttl-shell-head-account"></div>'
				  +'</div>'
				  +'<div  class="dropshuttl-shell-main">'
				   + '<div class="dropshuttl-shell-main-content"></div>'
				  +'</div>'
				  +'<div  class="dropshuttl-shell-foot"></div>'
				  +'<div  class="dropshuttl-shell-chat"></div>'
				  +'<div class="dropshuttl-shell-modal"></div>'
			},
			stateMap = { $container:null },
			jQueryMap = {},
			
			setJqueryMap, initModule;
	
	//-----------------end module scope variables--------------
	
	//-----------------begin utility methods-------------------
	//-----------------end utility methods---------------------
	
	//-----------------begin DOM methods-----------------------
	//-----begin DOM method /setJqueryMap/
	setJqueryMap = function(){
		var $container = stateMap.$container;
		jQueryMap = {$container:$container};
	};
	//-----end DOM method /setJqueryMap/
	//-----------------end DOM methods-------------------------
	
	//-----------------begin event handlers-------------------
	//-----------------end event handlers---------------------
	
	//-----------------begin public methods-------------------
	//-----begin public method /initModule/
	initModule = function( $container ){
		stateMap.$container = $container;
		$container.html(configMap.main_html);
		setJqueryMap();
	};
	//-----end public method /initModule/
	//-----------------end public methods---------------------
	
	return { initModule : initModule };
}());
