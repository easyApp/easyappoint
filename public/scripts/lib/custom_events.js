$(document).ready(function(){
	$('#processing_icon').attr("hidden", true);

$('#sign_in_button').on("click",function(){
//	$('#sign_in_button').text("Processing...").addClass('submit');
	$('#processing_icon').attr("hidden", false);
	$('.body_container').addClass('submit');
  var userName = $('#inputUsername').val();
	var psswd = $('#inputPassword').val();
	var rememberMe = $('#checkRemember').val();
	jQuery.ajax('/login',{
		type: 'POST',
		dataType: 'JSON',
		data: {'userName':userName,
						'psswd' : psswd,
					 'rememberMe': rememberMe},
		success: function (data){
		  if(typeof(Storage) !== "undefined") {
				sessionStorage.xtoken = $(data)[0].token;
				location.href = $(data)[0].nextScreen;
			}else{
				alert('sessionStorage not available');
			}

		},
		error: function (err){
		//	alert(err);
		},
	});
	//$('#sign_in_button').attr("display", "none");
	//$('#sign_in_button').attr("background-color","#e6e6e6");
	disablePage();
});



$('#sign_up_button').on("click",function(){
	$('#processing_icon').attr("hidden", false);
	$('.container').addClass('submit');
	disablePage();
  location.href = "/register";
});

$('#create_account_button').on("click",function(){
	$('#processing_icon').attr("hidden", false);
	$('.container').addClass('submit');
	disablePage();

});


$('#reset').click(function(){
	$('#first_name').val("");
	$('#last_name').val("");
	$('#mobile_no').val("");
	$('#email').val("");

});

function disablePage(){
	$("input").attr("disabled",true);
	$("select").attr("disabled",true);
	$("button").attr("disabled",true);
	$("a").on("click",function(){
		return false;
	});
}

});
