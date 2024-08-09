import React from 'react';
import styles from './header.module.css';
import NavLinks from './NavLinks';
import HomeIcon from './HomeIcon';
import AuthButton from './auth';

export default async function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.left}>
				<HomeIcon />
				<NavLinks />
			</div>
			<AuthButton />
		</header>
	);
}
