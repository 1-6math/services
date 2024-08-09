import { auth } from '@/auth';
import AuthChecker from '@/features/home/AuthChecker';
import { SignIn } from '@/features/home/SignIn';

export default async function Home() {
	const session = await auth();
	return (
		<main className="flex min-h-screen flex-col items-center p-24 gap-6 lg:gap-9">
			{session?.user ? <AuthChecker email={session.user.email!} /> : <SignIn />}
		</main>
	);
}
