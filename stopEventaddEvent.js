(function(w,d){

 var a='addEventListener',b='attachEvent',p=d[a]?a:d[b]?b:0;
 function g(o,e,f){var r=0;if(o && o[p]){r=o[p](e,f,0)};return r};
 w.onEvent=p?g:0;
 w.stopEvent=w.Event?function(e){function f(o,p){if(o[p]){o[p]()}};f(e,'preventDefault');f(e,'stopPropagation')}:function(){var e=w.event;if(e){e.cancelBubble=1;e.returnValue=0}};

})(window,document);



/*
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
*/
