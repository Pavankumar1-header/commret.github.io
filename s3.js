function render(data){
	var html="<div class='commentb'><div class='rightp'><span>"+data.name+"</span><div class='date'>"+data.date+"</div><p>"+data.body+"</p></div><div class='clear'></div></div>"
	$('#container').append(html);
}




$( document ).ready(function() {
	var comt=[];
	if(!localStorage.comtData){
		localStorage.comtData=[]

	}else{
		comt=JSON.parse(localStorage.comtData)
	}




	
		for (var i=0;i<comt.length;i++){
			render(comt[i]);
		}
	$('#ac').click(function(){
		var addObj={
			"name":$('#name').val(),
			"date":$('#date').val(),
			"body":$('#bodyText').val()
		};
		
		comt.push(addObj)
		localStorage.comtData=JSON.stringify(comt);
		render(addObj);
		$('#name').val('');
		$('#date').val('dd/mm/yyyy');
		$('#bodyText').val('');

	});
});