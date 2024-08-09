'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthorizationChecker({ auth }: { auth: number }) {
	const router = useRouter();
	const validateUser = auth === 1 || auth === 2 || auth === 3;
	useEffect(() => {
		if (validateUser) {
			router.push('/time');
		}
	}, [validateUser, router]);

	if (validateUser) {
		return <div>페이지 이동중입니다.</div>;
	}

	if (auth === 4) {
		return <div>원장님이 아직 승인하지 않았습니다.</div>;
	}

	return <div>비정상적인 접근입니다.</div>;
}
