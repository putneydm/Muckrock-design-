$(document) .ready (function()
	{	
	
	

	
	
	function mobile_menu (document_width)
		{
	//	$('#menu') .width (document_width);
	//	$('#menu') .height (800);
		
	if (embiggened 	=== 0)
	{	
		$( "#menu" ).animate({
		width: document_width,
		height: "800"
		}, 1000, function() {
		embiggened = 1;
		});			
  	}
  	
  	
  	if (embiggened 	=== 1)
	{	
		$( "#menu" ).animate({
		width: '45',
		height: '45'
		}, 1000, function() {
		embiggened = 0;
		});			
  	}


		}

			menu_status = 0;		


	
	/*
   var scroll_position = $(document) .scrollTop ();    
	    if (scroll_position == 0)
	    {
			$('#menu').hide (function ()
			{
			});
		}	

	*/
		
	embiggened = 0;	
	$('#menu_trigger') .click (function()
		{
		var document_width = .94 * $(window) .width ();
		console.log (document_width);
		mobile_menu(document_width);
		});	
		
		
	function show_hide_toolbox()
		{

		var hidden = $('#toolbox').height();
		
		console.log(hidden);
		
		if (hidden !== 0)
			{
			console.log('shows');					
			$('#toolbox_tab') .addClass ('toolbox_minimized_tab');
			$('#toolbox') .addClass ('toolbox_minimized');
			}
			
		else
			{
			console.log('hidden');
			$('#toolbox_tab') .removeClass ('toolbox_minimized_tab');
			$('#toolbox') .removeClass ('toolbox_minimized');
			}

		}
			
		$('#toolbox_tab') .click (function()
			{
			show_hide_toolbox()
			console.log('works');
			});
		
	});	
	

function menu(scroll_position, menu_height)
		{		
		if (scroll_position	> 100 && menu_status==0)
		{
		//	 $('#menu').fadeIn(100)
		//	menu_status = 1;
		//	console.log(menu_status);
		
		
		$( "#menu" ).animate({
		top: '0'
		}, 200, function() {
		menu_status = 1;
		});		
		
		}
		
		if (scroll_position<100 && menu_status==1)
		{
		

		$( "#menu" ).animate({
		top: '-28'
		}, 200, function() {
		menu_status = 0;
		});					

			
		}

		}	
	
/*	
$(window).scroll(function() {
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {    
    	var scroll_position = $(document) .scrollTop ();
    	var menu_height = $('#menu') .height();
		console.log(scroll_position);
        menu(scroll_position, menu_height);        
 }, 100));
});	
	
*/	

$(window) .resize (function()	
	{
	width = $('#measure_width') .width ();
	$('#measure_width') .text (width);
	
	console.log(width);
	
	});	
	
	