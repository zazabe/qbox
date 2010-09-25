
$(document).ready(function() {

		$('#example1 li').colorize();
		$('#example3 div').colorize();
		
		
		
		//demo interaction
	    $('a.resume-pause').click(function(){
	        var qBox = $(this).siblings('div.demos').qbox();
	        
	        if (qBox.isRunning()) {
	            qBox.pause();
	            $('span', this).text('resume');
	        }
	        else {
	            qBox.resume();
	            $('span', this).text('pause');
	        }
	        return false;
	    });
	    
	    $('a.debug-mode').click(function(){
	        var qBox = $(this).siblings('div.demos').qbox();
	        
			if (qBox.switchOutsidePositionsDisplay()) {
	            $('span', this).text('hide');
	        	$(this).siblings('div.demos').css({'overflow' : 'visible'});
	        }
	        else {
	            $('span', this).text('show');
				$(this).siblings('div.demos').css({'overflow' : 'hidden'});
	        }
	        
	        return false;
	    });
		
	});