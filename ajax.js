
          $.ajax({
			  type:"post",
			  url:"http://123.207.254.195/api/login",
			  datatype: "json",
			  data:{
			"email":"123@qq.com",
			"password":"321"
			},
			  success: function(msg){
				  alert("数据：" + data.msg + "\n状态：" + status)
				  },
				  error: function(){
					  alert("发生错误:" + jqXHR.status)
			      },
			  		  
		  });
    