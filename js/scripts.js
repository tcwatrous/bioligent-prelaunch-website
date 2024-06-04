/*!
* Start Bootstrap - Coming Soon v6.0.7 (https://startbootstrap.com/theme/coming-soon)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-coming-soon/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//https://bioligent.us22.list-manage.com/subscribe/post-json?u=676bce35dbc7263f042c98ac0&amp;id=62b49a52f5&amp;f_id=000ecee1f0&amp;c=?

console.log('script loaded');

$(document).ready( function () {
	$("#loader").hide();
	$("#mc-embedded-subscribe-form").submit(function(e) {
	    e.preventDefault();
	});
	$("#submitButton").click(function() {
		console.log('click');
		$("#loader").show();
		$(".button-text").hide();
		$("#submitErrorMessage").addClass("d-none");
		$("#submitSuccessMessage").addClass("d-none");

		$.ajax({
		  	type: 'POST',
			url: 'https://bioligent.us22.list-manage.com/subscribe/post?u=676bce35dbc7263f042c98ac0&amp;id=62b49a52f5&amp;f_id=000ecee1f0&amp;c=?',
			data: $('#mc-embedded-subscribe-form').serialize(), 
			cache: false,
		    dataType: 'json',
			contentType: "application/json; charset=utf-8", 
			error: (error) => {
				console.log('Error');
				console.log(error) 
				$("#loader").hide();
				$(".button-text").show();
			},  
			success: (res) => 
			{    
				console.log('Success');  
				console.log(res);
				console.log(res.result=="success");
				if(res.result=="success"){
					$("#submitSuccessMessage").removeClass("d-none"); 
				} else {
					$("#submitErrorMessage").removeClass("d-none");
					let s = res.msg.split(" - ");
					if(s[1])
					{
						$("#errorText").text(s[1]);
					} else {
						$("#errorText").text(res.msg);
					}
					
				}
				$("#loader").hide();
				$(".button-text").show();
			}
		});
	});
});

