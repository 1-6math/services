import Image from 'next/image';
import React from 'react';
import { signIn } from '../../../auth';

export function SignIn() {
	return (
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
	);
}
