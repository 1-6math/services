import React from 'react';
import { registerUser } from '@/api/user';

export async function Register({ email }: { email: string }) {
	return (
		<form
			action={async (formData: FormData) => {
				'use server';

				const name = formData.get('name') as string;
				await registerUser({ name, email });
			}}
		>
			<p>성함을 입력해주세요</p>
			<input name="name" />
			<button type="submit">등록하기</button>
		</form>
	);
}
