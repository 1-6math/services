import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { checkUser } from '@/api/user';

export const useAuthorizedRouter = (path: string) => {
	const { data: session } = useSession();
	const router = useRouter();
	useEffect(() => {
		const authorize = async () => {
			if (path !== '/' && session?.user?.email) {
				try {
					const user = await checkUser({ email: session.user.email });
					if (!user || (user.auth !== 1 && user.auth !== 2 && user.auth !== 3)) {
						router.push('/');
					}
				} catch (error) {
					console.error('Authorization check failed:', error);
					router.push('/');
				}
			}
		};

		authorize();
	}, [path, session, router]);
};
