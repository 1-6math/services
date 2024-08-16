import ExcelReader from '@/shared/components/ExcelReader';

export default function Time() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			시간표
			<ExcelReader />
		</main>
	);
}
