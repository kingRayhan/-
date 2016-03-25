        	jQuery(document).ready(function($) {
        		var goldPriceToday = 40000;
        		var silarPriceToday = 800;
        		var goldMinimumPrice = 15000;
        		var silverMinimumPrice = 800;

        		$('#goldprice_input').val(goldPriceToday);
        		$('#silvarprice_input').val(silarPriceToday);

        		$('#goldprice_input').change(function() {
        			if( $('#goldprice_input').val() == '' || $('#goldprice_input').val() == 0 )  $('#goldprice_input').val(goldPriceToday);
        			if ( $('#goldprice_input').val() < goldMinimumPrice ) {
	        				$('.goldPriceGroup').addClass('has-error');
	        				$('.goldprice-error').removeClass('hidden');
	        				$('input:not(#goldprice_input)').attr("disabled", "disabled");
		       				$('#goldprice_input').popover();
		    				$('#goldprice_input').attr({
		    					'data-content':'সোনার দাম এত কম হতে পারে না'
		    				});

        			}else{
        				$('.goldPriceGroup').removeClass('has-error');
        				$('.goldprice-error').addClass('hidden');
        				$('input:not(#goldprice_input)').removeAttr("disabled");
        				$('#goldprice_input').popover('destroy');
        			}
        		});



        		$('#silvarprice_input').change(function() {
        			if( $('#silvarprice_input').val() == '' || $('#silvarprice_input').val() == 0 )  $('#silvarprice_input').val(silarPriceToday);
        			if ( $('#silvarprice_input').val() < silverMinimumPrice) {
	        				$('.silverPriceGroup').addClass('has-error');
	        				$('.silverPrice-error').removeClass('hidden');
	        				$('input:not(#silvarprice_input)').attr("disabled", "disabled");
		       				$('#silvarprice_input').popover();
		    				$('#silvarprice_input').attr({
		    					'data-content':'রূপার দাম এত কম হতে পারে না'
		    				});
        			}else{
        				$('.silverPriceGroup').removeClass('has-error');
        				$('.silverPrice-error').addClass('hidden');
        				$('input:not(#silvarprice_input)').removeAttr("disabled");
        				$('#silvarprice_input').popover('destroy');
        			}
        		});


        		$('#asset').keyup(function() {
        			var getGoldPrice = $('#goldprice_input').val();
        			var getSilverPrice = $('#silvarprice_input').val();
        			var goldNisab = getGoldPrice*7.5;
        			var silverNisab = getSilverPrice*52.5;
        			var assets = $('#asset').val();
        			if( assets > goldNisab || assets > silverNisab){
	        			var jakat = (assets*2.5)/100;
	        			$('.havetoGiveZakat').html('<h2>আপনাকে যাকাত দিতে হবে</h2><h3>' + jakat + ' টাকা</h3>');
        			}else{
        				$('.havetoGiveZakat').text('আপনার সম্পত্তি যাকাতের নিসাব পরিমানে পৌছায়নি। তাই আপনাকে যাকাত দিতে হবে না')
        			}
        		});



        	});