// toggle Nav JS

// toggle Nav JS

var btn = document.getElementsByClassName('btn');


for(i=0; i<btn.length;i++){
	btn[i].addEventListener('click', function(e){
		e.preventDefault();
		var el = this;
		var parent = el.parentElement;
		console.log(parent);
		var btnContent = parent.querySelector('.btn-content', parent);
		if (btnContent.getAttribute('data-state') == 'expanded'){
			btnContent.setAttribute('data-state', 'collapsed');
		}else{
			btnContent.setAttribute('data-state', 'expanded');
		}
	});
}