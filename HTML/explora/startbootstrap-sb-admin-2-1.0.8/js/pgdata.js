$(document).ready(function(){
	$.ajax({
	url:"/cgi-bin/explora/projectview_script.py",
	data:{id:"1"},
	type:"POST",
	success:function(data){
	//console.log(data);
	var json=JSON.parse(data);
	//console.log(json);
	//console.log(o);
	//console.log(a);
	$("#heading").append(""+json["name"]+"");
	$("#restbody").append("<p><b>Started Date : </b>"+json["date"]+"</p><br/>");
	$("#restbody").append("<p><b>Description : </b>"+json["desc"]+"</p><br/>");
	$("#restbody").append("<p><b>Domain</b> : "+json["domain"]+"</p><br/>");
	$("#restbody").append("<p><b>Guiding Faculty</b> : "+json["faculty"]+"</p><br/>");
	$("#restbody").append("<p><b>Team Members </b> : "+json["team_mem"]+"</p><br/>");
	$("#restbody").append("<p><b>Abstract </b> : "+json["abstract"]+"</p><br/>");
	var o=json["status"]
	$("#status").append("<p><b>Status </b> : "+json["status"]+"</p><br/>");
	if(o=="Ongoing")
	{
		$("#status").css("color","green");
	}
	else if(o=="Completed")
	{
		$("#status").css("color","red");
	}
	else
	{
		$("#status").css("color","blue");
	}
	}
	});});
