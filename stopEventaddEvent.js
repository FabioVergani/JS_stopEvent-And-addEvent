
(function(w,n,f){
	w[n]=w.Event?function(e){f(e,'preventDefault');f(e,'stopPropagation')}:function(){var e=w.event;if(e){e.cancelBubble=1;e.returnValue=0}};
})(window,'stopEvent',function(o,p){if(o[p]){o[p]()}});
//
(function(x,d,a,b){//a:p1,b:p2
 var r=function(){return x},f=d[a];
 function g(o,e,f){var r=x;if(o && o[p]){r=o[p](e,f,x)};return r};
 if(f){p=a;r=g}else{f=d[b];if(f){p=b;r=g}};
 window.addEvent=r
})(false,document,'addEventListener','attachEvent');
