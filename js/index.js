/*=============================================================================
#     FileName: index.js
#         Desc: 
#       Author: Mocker
#        Email: Zuckerwooo@gmail.com
#     HomePage: zuckonit.github.com
#      Version: 0.0.1
#   LastChange: 2013-08-13 22:57:02
#      History:
=============================================================================*/
var m=0;
$(document).ready(function(){
	$(".mindiv").hover(function(){
		m = $(this).val();
		if(m>0){
		$(this).children(".divbox").stop(true, true).animate({"top":"0%"},200); 
		m=m-1; 
		}
		else{
		$(this).children(".divbox").stop(true, true).animate({"top":"-100%"},200);
		m=m+1;
		}
		
	},function(){
		$(this).attr("value",m);
});
});
