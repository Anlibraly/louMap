$(document).ready(function(){
	bdsize();
});

function bdsize(){
	var bdWidth=$(window).width() ;
	var bdHeight=$(window).height()  ;
	var mainHeight=$(window).height() - 62;
	$("#wrapper").css({"width":bdWidth, "height": bdHeight});
	$("#main_wrap").css({"width":bdWidth, "height": mainHeight});
}

$(window).resize(function(){
	bdsize();
});

$(document).ready(function(){
	/*	头像信息 */
	$(".u_info").mouseover(function(){
		$(".u_info ul").css({"display":"block"});
	}).mouseout(function(){
		$(".u_info ul").css({"display":"none"});
	});
	
	/* 成员信息 */
	$(".member_list li").mouseover(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".active .m_info_wrap").css({"display":"block"});
		$(this).siblings().find(".m_info_wrap").hide();
	});
	$(".m_info_wrap").mouseleave(function(){
		$(this).css({"display":"none"});
	});
	
	/* 成员管理-弹框 */
	$(".m_manage").click(function(){
		$(".member_tooltip").css({"display":"block"});
	});
	$(".member_tooltip .close").click(function(){
		//alert(123)
		$(".member_tooltip").hide();
	});
	
	/* 添加新成员-弹框 */
	$(".add_mem").click(function(){
		$("#add_mem").css({"display":"block"});
	});
	$(".h_style a").click(function(){
		$("#add_mem").hide();
	});
	
	/* 注销-弹框 */
/*	$(".sub_m_list li a").click(function(){
		$("#cancel_m_wrap").css({"display":"block"});
	});*/
	$(".h_style a").click(function(){
		$(".add_m_wrap").hide();
	});
	
	/* 退出-弹框 */
	$(".exit").click(function(){
		$("#exit_m_wrap").css({"display":"block"});
	});
	/* 修改密码-弹框 */
	$(".m_password").click(function(){
		$("#change_password_wrap").css({"display":"block"});
	});
	/* ------数据报表-展开收起------ */
	var flag = true;
	//alert(12)
	$(".zhankai").click(function(){
		//alert(flag);
		if(flag){
			$(".r_data_wrap").animate({
				"height": "89px"
			},function(){
					$(".forBtn span").removeClass("zhankai")
					$(".forBtn span").addClass("shouqi")
				});
			flag = false;
		}else{
			$(".r_data_wrap").animate({
				"height": 43*census_nums
			},function(){
					$(".forBtn span").removeClass("shouqi")
					$(".forBtn span").addClass("zhankai")
				});
			flag = true;
		}
	});	
	
});