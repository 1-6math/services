import { auth } from '@/auth';
import UserMenu from './UserMenu';

export default async function AuthButton() {
	const session = await auth();
	console.log(session?.user?.email);
	if (!session?.user) return null;

	return <UserMenu image={session.user.image!} />;
}
