for (var i = 0; i < 10; i++) {
    (function (){
    	var num = i;
		setTimeout(function() {    
			console.log(num)
    
		}, 0)
    })();
}