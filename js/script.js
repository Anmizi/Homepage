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
// about页
let about = document.querySelector('.about');
function aboutpage(n=1){
	window.scrollTo({
		top: window.innerHeight * n,
		behavior: 'smooth',
	});
}
arrow.addEventListener('click', function(){
	aboutpage();
});
about.addEventListener('click', function(){
	aboutpage();
})
