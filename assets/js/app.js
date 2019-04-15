let btn = document.getElementById('btn');
let result = document.getElementById('result');


let uranai = ['大吉','吉','中吉','小吉','凶','大凶']
btn.addEventListener('click', function(){

			let num = Math.floor(Math.random() * uranai.length);
			console.log(uranai[num]);

// テキストをhtml上に
result.textContent = (uranai[num]);



			});