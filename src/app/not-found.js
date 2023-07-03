'use client';

export const metadata = {
	title: 'Not Found - Orbit',
	description: '게이머를 위한 차세대 SNS 플랫폼, 오르빗입니다.',
};

export default function NotFound() {
	return (
		<div className="error">
			<h2>404 Not Found..</h2>
			<p>페이지를 찾을 수 없어요</p>
			<button onClick={ () => {
				window.location.href = '/';
			} }>HOME
			</button>
		</div>
	);
}