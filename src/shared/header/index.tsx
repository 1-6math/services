import React from 'react';
import styles from './header.module.css';
import AuthButton from './auth';
import NavLinks from './NavLinks';
import HomeIcon from './HomeIcon';

export default function Header() {
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
