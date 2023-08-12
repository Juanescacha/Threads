"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { sidebarLinks } from "@/constants"
import { SignOutButton, SignedIn } from "@clerk/nextjs"

const LeftSidebar = () => {
	const router = useRouter()
	const pathname = usePathname()

	return (
		<section className="custom-scrollbar leftsidebar">
			<div className="flex flex-col flex-1 w-full gap-6 px-6">
				{sidebarLinks.map(link => {
					const isActive =
						(pathname.includes(link.route) &&
							link.route.length > 1) ||
						pathname === link.route
					return (
						<Link
							href={link.route}
							key={link.label}
							className={`leftsidebar_link ${
								isActive && "bg-primary-500"
							}`}>
							<Image
								src={link.imgURL}
								alt={link.label}
								width={24}
								height={24}
							/>
							<p className="text-light-1 max-lg:hidden">
								{link.label}
							</p>
						</Link>
					)
				})}
			</div>
			<div className="px-6 mt-10">
				<SignedIn>
					<SignOutButton
						signOutCallback={() => router.push("/sign-in")}>
						<div className="flex gap-4 p-4 cursor-pointer">
							<Image
								src="/assets/logout.svg"
								alt="logout"
								width={24}
								height={24}></Image>
							<p className="text-light-2 max-lg:hidden">logout</p>
						</div>
					</SignOutButton>
				</SignedIn>
			</div>
		</section>
	)
}

export default LeftSidebar
