import Link from 'next/link'
import './globals.scss'
import Header from './header'

export const metadata = {
  title: 'Orbit',
  description: '게이머를 위한 차세대 SNS 플랫폼, 오르빗입니다.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko-KR">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  )
}
