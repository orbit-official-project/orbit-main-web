'use client'
import { useEffect } from 'react'
import './home.scss'

export default function Home() {
  useEffect(()=>{
    function changeTitle(){
      let title = document.getElementById('title-highlight');
      if(title.innerText == '트랜디한'){
        title.innerText = '똑똑한'
      }
      else if(title.innerText == '똑똑한'){
        title.innerText = '안전한'
      }
      else if(title.innerText == '안전한'){
        title.innerText = '믿을만한'
      }
      else {
        title.innerText = '트랜디한'
      }
    }

    setInterval(changeTitle, 2000)
  })
  return (
    <>
      <div className='home-top'>
        <div className='home-text'>
          <h2>누구보다 <highlight id='title-highlight'>트랜디한</highlight></h2>
          <p>
            게이머를 위한 탈 중앙화 SNS 플랫폼, 오르빗입니다<br/>
            게임 속 나만의 소중한 순간들을<br/>
            누구보다 안전하게 저장하고, 공유해 보세요
          </p>
          <div className='home-top-botton'>
            <button className='start'>
              Let's Start!
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
              </svg>
            </button>
            <div></div>
            <button className='start'>
              Make Your Own Server!
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
