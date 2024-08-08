import { SignIn } from '@/shared/header/auth/SignIn';

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center p-24 gap-6 lg:gap-9">
			<p className="text-center font-bold text-lg lg:text-3xl md:text-xl">
				로그인 후 서비스 이용 가능합니다.
			</p>
			<SignIn />
		</main>
	);
}
