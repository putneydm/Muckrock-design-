$(document) .ready (function()
	{	

	// this hides items for show/hide actions so that if js is off, they can still be used.

		 hide_show_too('#inside_page_search');
		 hide_show_too('.window_shade');		 


		
	// function that hides or shows 
	// passses name of item clicked on it. looks for name, which is the id of the item to be shown, hidden
	// initial visibility doesn't matter. It does the opposite of whatever its state is.
	
	function hide_show (clicked)
		{	
		
		var target = '#' + $(clicked) .attr ('name');
		var visible = $(target) .is(":visible");

			if (visible == true)
			{
			$(target) .fadeOut (100);	
			}
		
			if (visible == false)
			{
			$(target) .fadeIn (100);		
			}

		}
		
	// second version of a function that hides or shows 
	// passes an argument that includes the name of the item that you want to show or hide.
	// initial visibility doesn't matter. It does the opposite of whatever its state is.		
		
		function hide_show_too (target, time)
		{	
		
			if(typeof time === 'undefined'){
				time = 0
			 }
		
			else
				{
				time=time
				}
		
		var visible = $(target) .is(":visible");

			if (visible == true)
			{
			$(target) .fadeOut (time);	
			}
		
			if (visible == false)
			{
			$(target) .fadeIn (100);		
			}

		}	
		
		
		function toggle_header_height (div)
			{
			var width = $(div) .width ();
			console.log(width);	

				$(div).animate({
					height: "toggle"
				  }, 150, function() {
					// Animation complete.
				  });					
			}
		
		
		
	// this hides items for show/hide actions so that if js is off, they can still be used.
	$(document) .ready (function()
		{
		 hide_show_too('#inside_page_search');
		 hide_show_too('.window_shade');		 
		});


	
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
	
	//this triggers window shade action on teh credit card ccv number. 
	
	$('#CCV_explainer, #CCV_image_close, #CCV_image') .click (function()
		{	
		hide_show(this);	
		});
	
	
	// this triggers the windowshade action on the search box at the top of the inside page header
	
	$('#search_icon, #close_icon') .click (function()
		{
		toggle_header_height('#inside_page_search');
		hide_show_too('#search_icon');
		hide_show_too('#close_icon');
		});	
		
		
	// this triggers the window shade action of the site nav on mobile.
	
	$('#link_nav') .click (function()
		{
		toggle_header_height('#inside_nav');
		hide_show_too('#close_menu_icon');
		hide_show_too('#menu_icon');
		});	
		
		
		//this is for the submit page 
		// it hides the chooser box with the two buttons 
		// based on the button clicked, it shows the correct action forms.
		
		$('#create_new, #fork') .click (function()
		{
		hide_show_too('.top_info_container', 150, function()
		{
			var target_div = '#' + $(this) .attr ('id') + '_shade';
			console.log(counter);

		
		if (counter == 0)
		{
		toggle_header_height(target_div);
		counter ++;
		}
		});
		return false; 
		});		
		
		
		
	// this triggers generic window shade action sitewide
		var counter = 0;	
	$('.window_shade_trigger') .click (function()
		{
		var target_div = '#' + $(this) .attr ('id') + '_shade';
				console.log(counter);

		
		if (counter == 0)
		{
		toggle_header_height(target_div);
		counter ++;
		}


		});	
			
		
		
		
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
		

	
	
	
*/
function menu(scroll_position, menu_height)
		{		
		if (scroll_position	> 100 && menu_status==0)
		{

		
		
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
	


$(window) .resize (function()	
	{
	width = $('#measure_width') .width ();
	$('#measure_width') .text (width);
	
	console.log(width);
	
	
	});	
	
	