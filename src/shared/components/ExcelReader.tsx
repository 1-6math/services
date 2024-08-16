'use client';

import React from 'react';

export default function ExcelReader(): React.ReactElement {
	// const [data, setData] = useState<any[][]>([]);

	// const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	const file = event.target.files?.[0];
	// 	if (!file) return;

	// 	const reader = new FileReader();

	// 	reader.onload = (e: ProgressEvent<FileReader>) => {
	// 		const binaryStr = e.target?.result as string;
	// 		const workbook = XLSX.read(binaryStr, { type: 'binary' });
	// 		const worksheet = workbook.Sheets[workbook.SheetNames[0]];
	// 		const sheetData: any[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
	// 		setData(sheetData);
	// 	};

	// 	reader.readAsBinaryString(file);
	// };

	return (
		<div>
			<input
				type="file"
				accept=".xlsx, .xls"
				//	onChange={handleFileUpload}
			/>
			<div>
				<h3>Extracted Data:</h3>
				{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
			</div>
		</div>
	);
}
