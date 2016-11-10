
          $.ajax({
			  type:"post",
			  url:"http://123.207.254.195/api/login",
			  datatype: "json",
			  data:{
			"email":"123@qq.com",
			"password":"321"
			},
			  success: function(msg,jqXHR){
				  alert("数据：" + msg + "\n状态：" + jqXHR.status)
				  },
				  error: function(jqXHR){
					  alert("发生错误:" + jqXHR.status)
			      },
			  		  
		  });
    