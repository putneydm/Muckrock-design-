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
		
		
		$('.switcher') .click (function()
		{	
		var myClass = $('#document_list').attr("class");
		var button = $(this).attr("title");

		$('.switcher') .removeClass ('clicked');		
		$(this) .addClass ('clicked');
	
		console.log(button);
	
		myClass = myClass.replace(/dataTable/ , '');
		myClass = myClass.replace(/\s/ , '');
		
		
		
		if (myClass != 'list_view' & button != 'grid')
			{
			$('#document_list') .fadeOut (0);
			$('#document_list') .removeClass ('grid_view') .addClass ('list_view');	
			$('#document_list') .fadeIn (100);	
			
			console.log(myClass);
			}
			
			if (myClass != 'grid_view'  & button != 'list')
			{
			$('#document_list') .fadeOut (0);
		$('#document_list') .removeClass ('list_view') .addClass ('grid_view');	
		$('#document_list') .fadeIn (100);	
			
			console.log(myClass);
			}	
			
			
			
			});
		


/*
		
		
		//console.log('grid');
		$('#document_list') .fadeOut (0);
		$('#document_list') .removeClass ('list_view') .addClass ('grid_view');	
		$('#document_list') .fadeIn (100);	
		});
		
	
		$('#list') .click (function()
		{
			//	console.log('list');
		$('#document_list') .fadeOut (0);
		$('#document_list') .removeClass ('grid_view') .addClass ('list_view');;	
		$('#document_list') .fadeIn (100);	
		});
	*/
	
	
		});	
	
	
	//resizes input text box on review page to show all the text 
	
	/*
			$('#request_detail_review').css('height','auto')
		    var text = jQuery('#request_detail_review').val(),
            // look for any "\n" occurences

            matches = text.match(/\n/g),
            breaks = matches ? matches.length : 2;

        jQuery('#request_detail_review').attr('rows',breaks + 3);
	
	     //       console.log(text);
		
	});	
	
*/
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
	
	