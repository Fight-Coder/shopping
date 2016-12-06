window.onload = function(){
	function $(id){
		return document.getElementById(id);
	}
	var all = $("all");
	var price = $("price");
	var shoping = $("shoping");
	var lis = shoping.children;
	var geshu = $("geshu");
	var del = $("delete");
	var checks = document.getElementsByClassName("check01");
	var adds = document.getElementsByClassName("add");
	var subs = document.getElementsByClassName("sub");
	var qualitys = document.getElementsByClassName("quality");
	var allQuals = document.getElementsByClassName("allQual");
	var spans = document.getElementsByClassName("span01");
	// 小模块里的加减和数量的显示
	for(var i = 0; i < lis.length-1; i ++){
		// 加法
		adds[i].index = i;
		adds[i].onclick = function(){
		    var sum = parseInt(qualitys[this.index].value);
		    sum++;   
			qualitys[this.index].value = sum;
			if(sum > parseInt(allQuals[this.index].text)){
				alert("已经没有库存了");
			}
			total();
		}
        //减法,不能减到0以下
        subs[i].index = i;
        subs[i].onclick = function(){
		    var sum = parseInt(qualitys[this.index].value);
		    sum--;   
			qualitys[this.index].value = sum;
			if(sum <= 0){
				qualitys[this.index].value = 0;
				alert("已经到底了啊！");
			}
			total();
		}
	}
	//全选和单独选的控制
	    //全选的检测
	all.onclick=function(){
		for(var i = 0; i < checks.length; i++){
			checks[i].checked = this.checked;
		} 
		if(this.checked == true){
			del.style.display = "block";
		}else{
			del.style.display = "none";
		}
		total();
	}
	    //子元素的选择
	for(var m = 0; m < checks.length; m++){
		checks[m].onclick = function(){
			var allCheck = true;
			for (var n = 0; n < checks.length; n++){
				if(checks[n].checked == false){
	                allCheck = false;
	                break;
				}else{
					allCheck = true;
				}
			}
			all.checked = allCheck;
			if(this.checked == true){
				del.style.display = "block"
			}
			total();
		}
	}
	// 删除商品的提示
	del.onclick = function(){
        window.confirm("你确定要删除该商品吗？");
	}
	//总件数和总钱数的计算(封装函数，前边要多次使用)
	function total(){
        var ge = 0;
        var allprice = 0;
		for(var i = 0; i < checks.length; i++){
			if (checks[i].checked == true){
	            ge = ge + parseInt(qualitys[i].value);
	            //计算选中的li 的里边的商品的总价格,并且保留两位小数
	            allprice = allprice + parseInt(qualitys[i].value)*parseFloat(spans[i].innerHTML);
			}
		}
		geshu.innerHTML = ge;
		price.innerHTML = allprice.toFixed(2);
	}
}