import '@/style/globals.scss';
import Header from '@/components/global/header';
import { Providers } from '@/src/redux/provider';

export const metadata = {
	title: 'Orbit',
	description: '게이머를 위한 차세대 SNS 플랫폼, 오르빗입니다.',
};

export default function RootLayout({ children }) {
	return (
		<html lang="ko-KR">
			<body>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}
