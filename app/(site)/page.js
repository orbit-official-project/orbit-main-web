'use client';
import { useEffect } from 'react';
import '@/style/home.scss';

export default function Home() {
	useEffect(() => {
		async function changeText(){
			function sleep(sec) {
				return new Promise(resolve => setTimeout(resolve, sec * 1000));
			}
			
			async function changeTitle() {
				if (typeof window !== 'object') return;
				let title = document?.getElementById('title-highlight');
				let texts = [ '믿음직한', '똑똑한', '안전한', '트렌디한' ];
				let text = '';
				
				for (let i = 0; i < texts.length; i++) {
					if (texts[i] == title.innerText && i != texts.length - 1) {
						text = texts[i + 1];
					} else if (texts[i] == title.innerText && i == texts.length - 1) {
						text = texts[0];
					} else if (!texts.includes(title.innerText)) {
						text = texts[0];
					}
				}
				
				if (title.innerText.length != 0) {
					for (let i = 0; i < text.length; i++) {
						title.innerText = title.innerText.slice(0, -1);
						await sleep(0.2);
					}
					
					title.innerText = '';
					await sleep(0.2);
				}
				
				for (let i = 0; i < text.length; i++) {
					title.innerText = title.innerText + text.charAt(i);
					await sleep(0.2);
				}
			}

			await sleep(2);
			
			changeTitle();
			
			let currentInterval = setInterval(changeTitle, 5000);

			return currentInterval
		}

		let textInterval = changeText()
		
		let mouse = document.querySelector('.mouse-body')

		document.addEventListener('scroll', ()=>{
			if(window.scrollY >= 80){
				mouse.classList.add('opacity-zero')
			}
			else{
				mouse.classList.remove('opacity-zero')
			}
		});

		return clearInterval(textInterval)
	}, []);
	
	return (
		<>
			<div className="home-top">
				<div className="home-text">
					<h2 className="home-title">누구보다 <highlight id="title-highlight">믿음직한</highlight>
						<div className="text-fucus-bar"></div>
					</h2>
					<p>
						게이머를 위한 탈 중앙화 SNS 플랫폼, 오르빗입니다<br />
						게임 속 나만의 소중한 순간들을<br />
						누구보다 안전하게 저장하고, 공유해 보세요
					</p>
					<div className="home-top-botton">
						<button className="start">
							Let's Start!
							<svg fill="none"
							     stroke="currentColor"
							     strokeWidth="1.5"
							     viewBox="0 0 24 24"
							     xmlns="http://www.w3.org/2000/svg"
							     aria-hidden="true">
								<path strokeLinecap="round"
								      strokeLinejoin="round"
								      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
							</svg>
						</button>
						<div></div>
						<button className="start">
							Make Your Own Server!
							<svg fill="none"
							     stroke="currentColor"
							     strokeWidth="1.5"
							     viewBox="0 0 24 24"
							     xmlns="http://www.w3.org/2000/svg"
							     aria-hidden="true">
								<path strokeLinecap="round"
								      strokeLinejoin="round"
								      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
							</svg>
						</button>
					</div>
				</div>
				<div className="mouse-body">
					<div className="mouse-button"></div>
				</div>
			</div>
			<div className="home-first">
				<div className="home-first-devider"></div>
				<h2>왜 오르빗이어야 하나요?</h2>
				<div className='why-orbit'>
					<div className='why-orbit-item'>
						<h2>탈 중앙화 플랫폼</h2>
						
					</div>
				</div>
			</div>
		</>
	);
}
