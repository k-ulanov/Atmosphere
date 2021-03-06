
vh = document.documentElement.clientHeight; //высота экрана
H = document.documentElement.scrollHeight;	//высота контента
h = window.pageYOffset || document.documentElement.scrollTop;
y = H - h - vh/2;

log_cut = 100; //отрезает нижнюю часть инфоскроллера (100 отрежет 10 км)
var timer;

document.body.addEventListener('load',readurl);
document.body.addEventListener('load',info_resize);
window.addEventListener('resize',info_resize);
readurl();

info_resize(); //запустить инфо ресайз

window.addEventListener("scroll", frame_throttling);
window.addEventListener("scroll", position_throttling);
window.addEventListener("scroll", scroll_debouncing);

function readurl() {
	var url = location.href.split('#');
	(url.length > 1 && url[1]!="")
		?window.scrollTo(0,H - url[1]*10 - vh/2) //скролить на якорь
		:window.scrollTo(0,H); //скролить в самый низ, если пустой якорь
}


function move(obj,speed,pos,time) {
		
		if(pos < 0) pos = document.documentElement.clientWidth;
		obj.style.width = pos + "px";
		setTimeout(move,time,obj,speed,pos-speed,time);
}

function move_interval(obj,speed,pos,time) {
	setInterval(function() {
			pos -= speed;
			if(pos < 0) { 
				obj.style.transition = "none";
				pos = document.documentElement.clientWidth;
				obj.style.width = pos + "px";
			}		
			else {
				obj.style.transition = "width "+time+"ms linear";
				obj.style.width = Math.floor(pos) + "px";
			}
	},time);
} 

function frame_throttling() {
	window.removeEventListener("scroll", frame_throttling);
	setTimeout(function(){window.addEventListener("scroll", frame_throttling);},100);
	
	place_frame(info_slider);
	}

function position_throttling() {
	window.removeEventListener("scroll", position_throttling);
	setTimeout(function(){window.addEventListener("scroll", position_throttling);},300);
	position();
	}

function scroll_debouncing() {
	clearTimeout(timer);
	timer = setTimeout(debouncing, 50);
}

function debouncing() {
	position();
	place_frame(info_slider);
	history.replaceState(null, null, location.href.split('#')[0] + '#' + Math.round(y/10));
}

function position() {
	H = document.documentElement.scrollHeight;
	h = window.pageYOffset || document.documentElement.scrollTop;
	vh = document.documentElement.clientHeight;
	y = H - h - vh/2;
	
	float(mezo,mezo_fixed,50,85);
	float(termo,termo_fixed,84,690);
	float("",exo_fixed,690,190000);

	//float_title(atmos_title,-100,3000000);
	float_credit(des_title,120,180);
	//float_credit(art_title,220,280);
	//float_credit(school_title,410+vh/20,490+vh/20);
	float_credit(law_title,600+vh/20,670+vh/20);
	float_arrow(up,0,1);

	float_credit(t1,570);

	float_credit(t2,710);
	float_credit(t3,810);

	float_credit(t4,950,1096);
	float_credit(t5,1096,1242);
	float_credit(t6,1242,1300);

	float_credit(t7,1370); //пространство - вакуум

	float_credit(t9,1520,  2865); //про выживание в вакууме
	float_credit(t10,2865, 3950);
	float_credit(t11,4050, 5555);
	float_credit(t12,5555, 6900);
	float_credit(t13,6900, 8245);
	float_credit(t14,8245, 9590); //про радиацию
	float_credit(t15,9590, 10935);
	float_credit(t16,10935,12280);
	float_credit(t17,12280,13625);
	float_credit(t18,13625,14970);
   	float_credit(t182,14970,16315);
	float_credit(t19,16315,17660); 
	float_credit(t20,17660,19080);//закончили про космический мусор

	float_credit(t21,20250,22000);
	float_credit(t22,22000,24000);
	float_credit(t23,24000,25700);
	float_credit(t24,25700,27700);

	float_credit(t25,27800,30000);
	float_credit(t26,30000,32000);
	float_credit(t27,32000,34000);
	float_credit(t28,34000,35950);
	float_credit(t29,36060,38000);
	float_credit(t30,38000,40000);
	float_credit(t31,40000,42000);
	float_credit(t312,42000,44000);

	float_credit(t32,160000,176000); 
	float_credit(t33,180000,196000);
	float_credit(t34,200000,216000); 
	float_credit(t35,220000,236000);
	float_credit(t36,240000,256000);
	float_credit(t37,260000,276000);
	float_credit(t38,280000,296000);
	float_credit(t39,300000,316000);
	float_credit(t40,320000,336000);
	float_credit(t41,340000,356000);
	float_credit(t42,360000,376000);
}


function info_resize() {
	vh = document.documentElement.clientHeight; //обновляю высоту окна
	info_moon.style.bottom = log_height(H)+"px";

	place_frame_2(temp_gradient,100,2000);
	place_frame_2(termo_temp_gradient,1900,2000000);

	info_layers.innerHTML = "<div class=layer_line style='bottom:"+log_height(20*10)+"px'><span>Тропо</span></div>";
	info_layers.innerHTML += "<div class=layer_line style='bottom:"+log_height(50*10)+"px'><span>Страто</span></div>";
	info_layers.innerHTML += "<div class=layer_line style='bottom:"+log_height(85*10)+"px'><span>Мезо</span></div>";
	info_layers.innerHTML += "<div class=layer_line style='bottom:"+log_height(690*10)+"px'><span>Термо</span></div>";
	info_layers.innerHTML += "<div class=layer_line style='bottom:"+log_height(190000*10)+"px'><span>Экзо</span></div>";

	info_temp.innerHTML = "<div style='bottom:"+log_height(10*10)+"px'><span>+20°</span></div>";
	info_temp.innerHTML += "<div style='bottom:"+log_height(20*10)+"px'><span>−70°</span></div>";
	info_temp.innerHTML += "<div style='bottom:"+log_height(50*10)+"px'><span>−40°</span></div>";
	info_temp.innerHTML += "<div style='bottom:"+log_height(85*10)+"px'><span>−100°</span></div>";
	info_temp.innerHTML += "<div style='bottom:"+log_height(690*10)+"px'><span>2000°</span></div>";
	info_temp.innerHTML += "<div style='bottom:"+log_height(190000*10)+"px'><span>2000°</span></div>";


	info_obj.innerHTML = "";
	place_log_point(12,10,'Авиалайнер');
	/*place_log_point(23,0,'Озоновый слой');*/
	place_log_point(37,0,'Реакт. самолёт');
	place_log_point(41,20,'Аэростат');
	place_log_point(53,-14,'Метеозонд');
	place_log_point(76,-4,'Серебр. облака');
	place_log_point(100,-18,'Метеоракета');
	place_log_point(107,20,'X-15');
	place_log_point(112,0,'SpaceShipOne');
	place_log_point(188,-18,'Фау-2');
	place_log_point(215,10,'Спутник-1');
	place_log_point(302,-5,'Восток-1');
	place_log_point(358,-18,'Станция «Мир»');
	place_log_point(400,-2,'Старфиш-прайм');
	place_log_point(415,20,'МКС');
	place_log_point(569,0,'Хаббл');
	place_log_point(939,-18,'Спутник-1');
	place_log_point(1372,0,'Джемини-11');
	place_log_point(1518,20,'Блоустоун');
	/*place_log_point(2000,0,'Низкая орбита');*/
	/*place_log_point(4000,-18,'Радиационный пояс');*/
	place_log_point(6150,0,'Астероид 2008 TS26');
	/*place_log_point(17000,20,'Внеш. рад. пояс');*/
	place_log_point(19140,-15,'Глонасс');
	place_log_point(20200,7,'GPS');
	place_log_point(27743,0,'Астероид Дуэнде');
	/*place_log_point(35786,15,'Геостационарная орбита');
	place_log_point(36021,-8,'Орбита захоронения');*/
	place_frame(info_slider);

	log_greed.innerHTML = "";
	for(pow = 1; pow < 6; pow++) {
		for (l = 1; l < 10; l++) {
			//console.log(l*Math.pow(10,pow));
			if (l == 1 || (pow == 5 && l == 4)) {
				place_line_2(log_greed,l*Math.pow(10,pow));
			}
			else place_line(log_greed,l*Math.pow(10,pow));
		}
	}

}

function place_log_point(height,left,title){
	info_obj.innerHTML += "<div onclick='fly_to("+(vh-log_height(height*10))+")' class=click_area data-title=\""+title+"\" style='left: "+left+"px; bottom: calc("+log_height(height*10)+"px - 9px)'><div class='log_point'></div></div>";
}

function float(obj, sticky, min, max) {
	h_top = view_height("top");
	margin = 10;

	if(h_top > max*10+margin || h_top < min*10+60) {
		sticky.classList.remove("sticky_visible");
	}
	else {
		sticky.classList.add("sticky_visible");
	}

	if (h_top < max*10+margin) {
		if(obj!="")obj.classList.add("bdg_hidden");
		sticky.classList.add("sticky_lower");
	}
	else {
		if(obj!="")obj.classList.remove("bdg_hidden");
		sticky.classList.remove("sticky_lower");
	}

}

function float_credit(obj, min, max) {
	(min*10 < y && y < max*10)
	?obj.classList.add("credit_show")
	:obj.classList.remove("credit_show");
}

function float_title(obj, min, max) {
	obj.classList.add("title_visible");
}

function float_arrow(obj, min, max) {
	(view_height("bot") < min*10 || view_height("bot") > max*10) ? obj.style.opacity = "0" : obj.style.opacity = "1"; 
	if(obj.style.opacity == 0) {
		obj.style.transition = "opacity 0.5s ease-in, visibility 0.5s step-end"; //visibility будет сохранять свойство до конца анимации
		obj.style.visibility = "hidden";
	}
	else {
		obj.style.transition = "opacity 2s ease-in 6s, visibility 1s step-start 6s"; //visibility сменит свойство в начале анимации
		obj.style.visibility = "visible";
	}
}

function log(x) {
	 return Math.log(x) / Math.log(10);
}

function log_height(height) {
	return  (vh-34) * log(height/log_cut) / log(H/log_cut);
	//return  vh * ((height/log_cut) / (H/log_cut));
}

function full_height(num) { //конвертирует логарфмическую высоту в высоту от низа экрана
	return Math.pow(10,(num*log(H/log_cut)/(vh-34)))*log_cut;
}

/*принимает объект
делает ему нижний край как низ на схеме, верхний, как верх. через ботом и высоту*/
function place_frame(obj) {
	(view_height("bot")<=log_cut)?obj.style.bottom = "0px"
	:obj.style.bottom = log_height(view_height("bot")) + "px";
	obj.style.top = vh - log_height(view_height("top")) + "px";
	//console.log(log_height(1000));
}


function place_frame_2(obj,bot,top) {
	//console.log(top+" "+bot);
	(bot<=log_cut)
	?obj.style.bottom = "0px"
	:obj.style.bottom = log_height(bot) + "px";
	obj.style.top = vh - log_height(top) + "px";
}


function place_line(obj, height) {
	obj.innerHTML += "<div class=info_line style='bottom:"+log_height(height*10)+"px'></div>";

}


function place_line_2(obj, height) {
	var he = height + "";
	he = he.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1&thinsp;')
	obj.innerHTML += "<div class=info_line style='bottom:"+log_height(height*10)+"px'><span>"+he+"</span></div>";

}

/*возвращает уровень экрана, по верху низу или центру*/
function view_height(type) {
		H = document.documentElement.scrollHeight;
	    vh = document.documentElement.clientHeight;
	    h = window.pageYOffset || document.documentElement.scrollTop;

	switch (type) {
		case "top": return  H - h; break;
		case "mid": return  H - h - vh/2; break;
		case "bot": return  H - h - vh; break;
	}
}



function draw_info(Y) {
	//console.log(Y+" "+(vh-Y)+" "+full_height(vh-Y));

	var y = full_height(vh-Y);
	place_frame_2(info_hover,y-vh/2,y+vh/2);
}

function fly_to(Y) {
	//console.log(H-full_height(vh-Y)-vh/2);
	window.scrollTo(0,H-full_height(vh-Y)-vh/2);
}


var drag = false;

infoscroll.onmousedown = function(event) {
	drag = true;
	fly_to(event.clientY);
	place_frame(info_slider);
}

infoscroll.onmouseup = function() {
	drag = false;
}

infoscroll.onmousemove = function(event) {
	draw_info(event.clientY);

	if(drag) {
		fly_to(event.clientY);
		place_frame(info_slider);
	}
}

infoscroll.onmouseover = function() {
	info_hover.style.display='block';
}

infoscroll.onmouseout = function() {
	info_hover.style.display='none';
}