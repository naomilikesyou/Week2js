$(document).ready(function(){
   console.log("OMG JAVASCRIPT");
   $("#celebs tbody tr:even").addClass("zebra")

   $('#hideButton').click(function(){
   		$('#disclaimer').hide();
   })
   $('#showButton').click(function(){
   		$('#disclaimer').show();
   })
});