//获取url中的参数
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return decodeURI(r[2]); return null; //返回参数值
}

console.log(typeof(getUrlParam("name")));
$(function(){
	var app = new Vue({
	  el: '#test',
	  data: {
	    list: [],
	    title:"test",
	    userName:""
	  },
	  methods:{
	  	searchUser:function(){

	  // 		var socket = new WebSocket('ws://localhost:8080/TomcatTest/HelloWorld'); 

			// // 打开Socket 
			// socket.onopen = function(event) { 

			//   // 发送一个初始化消息
			//   socket.send('I am the client and I\'m listening!'); 

			//   // 监听消息
			//   socket.onmessage = function(event) { 
			//     console.log('Client received a message',event); 
			//   }; 

			//   // 监听Socket的关闭
			//   socket.onclose = function(event) { 
			//     console.log('Client notified socket has closed',event); 
			//   }; 

			//   // 关闭Socket.... 
			//   //socket.close() 
			// };

	  		$.get("http://localhost:8080/TomcatTest/HelloWorld",{
				name:app.userName
			},function(result){
				app.list = result.data;
				console.log(result);
		  	});
	  	}
	  }
	});

	app.searchUser();
	$("body").on("keyup","input",function(){
		if($("input").val()){
			$(".reset").show();
			console.log("有输入内容！");
		}
		else{
			$(".reset").hide();
		}
	});
	
});