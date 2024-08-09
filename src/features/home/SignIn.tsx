import React from 'react';
import Image from 'next/image';
import { signIn } from '@/auth';

export function SignIn() {
	return (
		<>
			<p className="text-center font-bold text-lg lg:text-3xl md:text-xl">
				로그인 후 서비스 이용 가능합니다.
			</p>
			<form
				action={async () => {
					'use server';

					await signIn('google');
				}}
			>
				<button type="submit">
					<Image src="/images/google_signin.png" alt="Login" width={500} height={300} />
				</button>
			</form>
		</>
	);
}
