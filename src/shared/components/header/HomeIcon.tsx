import Image from 'next/image';

export default function HomeIcon() {
	return <Image priority src="/images/logo.png" alt="homelogo" width={60} height={60} />;
}
