// import { auth } from '@/auth';
import { SignIn } from './SignIn';
// import UserMenu from './UserMenu';

export default async function AuthButton() {
	// const session = await auth();
	const session = { user: undefined };
	if (!session?.user) return <SignIn />;

	// return <UserMenu image={session.user.image!} />;
}
