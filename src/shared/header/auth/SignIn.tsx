import Image from 'next/image';
import React from 'react';
// import { signIn } from '@/auth';

export function SignIn() {
	return (
		<form
			action={async () => {
				'use server';
				// await signIn('google');
			}}
		>
			<button type="submit" className="no_style_btn">
				<Image src="/images/google_signin.png" alt="Login" width={160} height={40} />
			</button>
		</form>
	);
}
