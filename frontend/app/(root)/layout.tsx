import "../globals.css"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"

// Components import

import TopBar from "../../components/shared/Topbar"
import LeftSidebar from "../../components/shared/LeftSidebar"
import RightSidebar from "../../components/shared/RightSidebar"
import Bottombar from "../../components/shared/Bottombar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "Threads",
	description: "A Next.js 13 Meta Threads Application Clone",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<ClerkProvider>
			<html lang="en">
				<body className={inter.className}>
					<TopBar />
					<main>
						<LeftSidebar />
						<section className="main-container">
							<div className="w-full max-w-4xl">{children}</div>
						</section>
						<RightSidebar />
					</main>
					<Bottombar />
				</body>
			</html>
		</ClerkProvider>
	)
}
