;(function($){
	var Progress=function(option){
		//定义默认参数
		var _default={
			value:0.5
		}
		//扩展参数
		this.settings=$.extend({},_default,option);
		//console.log(this.settings);
		//功能语句，创建HTML结构,书写css样式
		var html=$("<div class='pro_wrap'><div class='pro'></div></div>");
		//添加到容器中
		this.settings.container.append(html);
		//设置进度条的宽
		var w=html.width();
		//console.log(w);
		html.find(".pro").css("width",w*this.settings.value+"px");
		//显示数值
		if(!this.settings.show) return false;
		var num=$("<p>"+this.settings.value*100+"%</p>")
		html.after(num);

	}
	$.progress=function(option){
		new Progress(option);
	}
})(jQuery)