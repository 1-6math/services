let authGrade: number | undefined;

export function getAuthGrade() {
	return authGrade;
}

export function setAuthGrade(auth: typeof authGrade) {
	authGrade = auth;
}
