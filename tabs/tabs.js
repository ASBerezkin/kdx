// tabs js me
$(document).ready(function(){
    $('input').click(function () {
    	var tab_id = $(this).attr('data-tabs');

    	$('.content').removeClass('active');

    	$('#'+tab_id).addClass('active');
    })
});