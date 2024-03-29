$(document).ready(function(){

	/**
	 * jQuery Validate Function
	 *
	 * This function provides front-end validation for your form.
	 * If all tests set up here pass, the form data is AJAX submitted
	 * to the index.php file.
	 *
	 * Update this file as needed for your form.
	 * All ids and name values must match up to your form here.
	 *
	 * @author Rochelle Lewis <rlewis37@cnm.edu>, I just copypasted and made some edits
	 **/

	/* begin validate function here */
	$("#daniel-contact-form").validate({

		// setup handling of form errors
		debug: true,
		errorClass: "alert alert-danger",
		errorLabelContainer: "#output-area",
		errorElement: "div",

		// rules here define what is good or bad input
		// each rule starts with the form input element's NAME attribute
		rules: {
			Name: {
				required: true
			},
			email: {
				email: true,
				required: true
			},
			Subject: {
				required: false
			},
			Message: {
				required: true,
				maxlength: 2000
			}
		},

		// error messages to display to the end user when rules above don't pass
		messages: {
			Name: {
				required: "Please enter your name."
			},
			email: {
				email: "Please enter a valid email address.",
				required: "Please enter a valid email address."
			},
			Message: {
				required: "Please enter a message.",
				maxlength: "2000 characters max."
			}
		},

		// AJAX submit the form data to back end if rules pass
		submitHandler: function(form) {
			$("#daniel-contact-form").ajaxSubmit({
				type: "POST",
				url: $("#daniel-contact-form").attr("action"),

				success: function(ajaxOutput) {
					// clear the output area's formatting
					$("#contact-form-output-area").css("display", "");

					// write the server's reply to the output area
					$("#contact-form-output-area").html(ajaxOutput);

					// reset the form if it was successful
					if($(".alert-success").length >= 1) {
						$("#daniel-contact-form")[0].reset();
					}
				}
			})
		}

	});/* end validate function here */

	// Auto close menu when clicking/tapping anywhere
	$('body').on("click", function() {
		$('.navbar-collapse').collapse('hide');
	})
});/*end document.ready()*/