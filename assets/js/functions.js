$( document ).ready(function() {

  	hideoverlay();
 	showoverlay();

});

function showoverlay()
{

	$('.cta').on('click',function(){

		$(".overlay").addClass('is-open');
		
		return false;
	


	});
}


function hideoverlay()
{
	$('.close-btn').on('click',function(){

		$('.overlay').removeClass('is-open')

	});
	


}