import { checkUser } from '@/api/user';
import { Register } from './Register';
import AuthorizationChecker from './AuthorizationChecker';

export default async function AuthChecker({ email }: { email: string }) {
	const validId = await checkUser({ email });

	return validId ? <AuthorizationChecker auth={validId.auth} /> : <Register email={email} />;
}
