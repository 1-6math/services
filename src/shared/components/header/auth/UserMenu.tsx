'use client';

import Image from 'next/image';
import { useReducer } from 'react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { getAuthGrade } from '@/shared/const/client';
import style from '../header.module.css';

export default function UserMenu({ image }: { image: string }) {
	const [isOpen, toggleIsOpen] = useReducer((v) => !v, false);
	const auth = getAuthGrade();

	return (
		<div style={{ position: 'relative' }}>
			<button type="button" className={`no_style_btn ${style.user_menu}`} onClick={toggleIsOpen}>
				<Image src={image} alt="프로필사진" width={40} height={40} />
				<p>유저 메뉴</p>
			</button>
			{isOpen && (
				<div className={style.pop_over}>
					{auth === 1 && (
						<Link className={style.pop_button} href="/mypage" onClick={() => toggleIsOpen()}>
							선생 관리
						</Link>
					)}
					<button type="button" className={style.pop_button} onClick={() => signOut()}>
						로그아웃
					</button>
				</div>
			)}
		</div>
	);
}
