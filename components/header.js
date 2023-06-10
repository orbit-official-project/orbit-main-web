'use client'
import Link from "next/link"
import logo from "@/public/logo.png"
import Image from "next/image"
import { useEffect } from "react"

export default function Header(){
    useEffect(()=>{
        let header = document.querySelector('#header');
        
        document.addEventListener('scroll', ()=>{
            if(window.scrollY >= header.offsetHeight){
                header.classList.add('header-scroll');
            }
            else{
                header.classList.remove('header-scroll');
            }
        });
    },[])
    return(
        <>
            <div className="header-wrap" id='header'>
                <div className='header'>
                    <Link className="header-logo" href='/'>
                        <Image src={logo}/>
                    </Link>
                    <div className='header-pc-item-container'>
                        <MenuItem/>
                    </div>
                    <Hamburger/>
                </div>
            </div>
            <MobileMenu/>
        </>
    )
}

function Hamburger(){

    function hamburger(){
        let hamburger = document.getElementById('hamburger');
        let close = document.getElementById('hamburger-x');
        hamburger.classList.toggle('display-none', 'hamburger');
        hamburger.classList.toggle('hamburger');
        close.classList.toggle('display-none');
        close.classList.toggle('hamburger')
    
        if(hamburger.classList.contains('hamburger')){
            if(window.scrollY >= header.offsetHeight){
                header.classList.add('header-scroll');
            }
            else{
                header.classList.remove('header-scroll');
            }
        }
        else{
            header.classList.remove('header-scroll');
        }
    
        let mobileMenu = document.getElementById('mobile-menu')
        mobileMenu.classList.toggle('mobile-menu');
        mobileMenu.classList.toggle('display-none')
    }

    return(
        <a onClick={ hamburger } className="hamburger-container">
            <svg id='hamburger' className="hamburger" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"></path>
            </svg>
            <svg id='hamburger-x' className="display-none" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </a>
    )
}

function MobileMenu(props){
    return(
        <div id='mobile-menu' className="display-none">
            <MenuItem/>
        </div>
    )
}

function MenuItem(){

    function closeMenu(){
        let hamburger = document.getElementById('hamburger');
        let close = document.getElementById('hamburger-x');
        hamburger.classList.toggle('display-none', 'hamburger');
        hamburger.classList.toggle('hamburger');
        close.classList.toggle('display-none');
        close.classList.toggle('hamburger')
    
        if(hamburger.classList.contains('hamburger')){
            if(window.scrollY >= header.offsetHeight){
                header.classList.add('header-scroll');
            }
            else{
                header.classList.remove('header-scroll');
            }
        }
        else{
            header.classList.remove('header-scroll');
        }
    
        let mobileMenu = document.getElementById('mobile-menu')
        mobileMenu.classList.toggle('mobile-menu');
        mobileMenu.classList.toggle('display-none')
    }

    return(
        <>
            <Link onClick={ closeMenu } href='/about'>오르빗</Link>
            <Link onClick={ closeMenu } href='/servers'>서버 목록</Link>
            <Link onClick={ closeMenu } href='/servers/new'>서버 만들기</Link>
            <Link onClick={ closeMenu } href='/team'>팀</Link>
            <Link onClick={ closeMenu } href='/supporter'>서포터</Link>
        </>
    )
}