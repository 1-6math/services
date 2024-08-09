'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import style from './header.module.css';
import { NAVIGATION_LIST } from '@/shared/const/navi';
import { useAuthorizedRouter } from '@/shared/hook/useAuthorized';

export default function NavLinks() {
	const pathname = usePathname();
	useAuthorizedRouter(pathname);

	return (
		<nav className={style.navigation}>
			{NAVIGATION_LIST.map((nav) => {
				const isActive = pathname === nav.url;

				return (
					<Link key={nav.label} href={nav.url} style={{ textDecoration: 'none' }}>
						<div className={isActive ? style.active : style.inactive}>{nav.label}</div>
					</Link>
				);
			})}
		</nav>
	);
}
