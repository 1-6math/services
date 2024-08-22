'use client';

import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { checkUser } from '@/api/user';
import { getAuthGrade, setAuthGrade } from '../const/client';

export const useAuthorizedRouter = (path: string) => {
	const { data: session } = useSession();
	const router = useRouter();
	const auth = getAuthGrade();
	console.log(auth);
	useEffect(() => {
		const authorize = async () => {
			if (!session?.user) {
				setAuthGrade(undefined);
				return;
			}
			if (auth) {
				return;
			}

			if (path !== '/' && session.user.email) {
				try {
					const user = await checkUser({ email: session.user.email });
					if (!user || (user.auth !== 1 && user.auth !== 2 && user.auth !== 3)) {
						router.push('/');
					} else {
						setAuthGrade(user.auth);
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
