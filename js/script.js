// 一言接口
fetch('https://v1.hitokoto.cn?c=i&c=d')
	.then(response => response.json())
	.then(data => {
		const hitokoto = document.getElementById('hitokoto_text')
		hitokoto.innerText = data.hitokoto
	})
	.catch(console.error)

// 箭头点击下拉
let arrow = document.querySelector('.icon-arrowdown');
let about = document.querySelector('.about');
arrow.addEventListener('click',function(event){
	window.scrollTo({
		top: window.innerHeight,
		behavior: 'smooth',
	});
})
about.addEventListener('click',function(){
	window.scrollTo({
		top: window.innerHeight,
		behavior: 'smooth',
	});
})