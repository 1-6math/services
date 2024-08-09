import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { checkUser } from '@/api/user';

export const useAuthorizedRouter = async (path: string) => {
	const { data } = useSession();
	const router = useRouter();
	if (path !== '/' && data?.user?.email) {
		const user = await checkUser({ email: data?.user?.email });
		if (user && (user.auth === 1 || user.auth === 2 || user.auth === 3)) {
			return;
		}
		router.push('/');
	}
};
