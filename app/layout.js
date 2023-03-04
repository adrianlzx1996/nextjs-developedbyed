import './globals.css'
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	weights: [400, 500, 600, 700],
	subsets: ["latin"],
	variable: '--font-montserrat'
});
export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({children}) {
	return (
		<html lang="en">
		<body className={`${montserrat.className} mx-32`}>
		{children}
		</body>
		</html>
	)
}
