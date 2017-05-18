for (var i = 0; i< 64; i++) {
	if (i<8 || (i>15 && i<24) || (i>31 && i<40) || (i>47 && i<56))  {
		if (i%2==0){
			document.getElementById('board').innerHTML+='<div class="block1"></div>';
		}	
		else {
			if ((i<24) || (i>39)) {
				document.getElementById('board').innerHTML+='<div class="block2"><div class="checker"></div></div>';
			}	
			else {
				document.getElementById('board').innerHTML+='<div class="block2"></div>';
			}		
		}
	}
	else {
		if (i%2==0){
			if ((i<24) || (i>39)) {
				document.getElementById('board').innerHTML+='<div class="block2"><div class="checker"></div></div>';
			}
			else {
				document.getElementById('board').innerHTML+='<div class="block2"></div>';
			}			
		}	
		else {
			document.getElementById('board').innerHTML+='<div class="block1"></div>';
		}
	}
}

