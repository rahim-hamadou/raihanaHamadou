"use client";
import styles from "./NavBar.module.css";
import React, { useEffect, useState } from "react";

import Link from "next/link";

function NavBar() {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="navBar_container bg-amber-300 hover:bg-amber-400 p-4 ">
			<div className="container mx-auto">
				<div className="flex  justify-between">
					<Link href="/" className=" text-xl font-bold">
						TakeCare
					</Link>
					<div className="lg:hidden">
						<button onClick={toggleMenu} className=" focus:outline-none">
							{/* Burger icon for mobile */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="h-6 w-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16m-7 6h7"
								/>
							</svg>
						</button>
					</div>
					<div
						className={`lg:flex ${
							isMenuOpen ? "flex" : "hidden"
						} flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4`}
					>
						<Link href="/activity" className="text-black">
							Mon activité
						</Link>
						<Link href="/contact" className="text-black">
							Me joindre
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
