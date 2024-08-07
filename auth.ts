import NextAuth, { NextAuthConfig } from 'next-auth';
import Google from 'next-auth/providers/google';

export const authConfig = {
	pages: {
		signIn: '/',
	},
	theme: { logo: 'https://authjs.dev/img/logo-sm.png' },
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;
			const protectedPath = ['/mypage'];
			const isProtected = protectedPath.includes(nextUrl.pathname);
			if (isProtected) {
				if (isLoggedIn) return true;
				return Response.redirect(new URL('/', nextUrl));
			}
			return true;
		},
	},
	providers: [Google],
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
