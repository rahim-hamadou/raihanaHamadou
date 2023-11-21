"use client";

import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<footer className=" footer_container bg-blue-500 hover:bg-blue-700  text-center dark:bg-neutral-800 lg:text-left">
			<div className="footer_contain">
				<ul className={styles.footer_list}>
					<li className={styles.footer_list_item}>
						<a href="/">TechEase</a>
					</li>
					<li className={styles.footer_list_item}>
						<a href=""></a>
						<a href="/team">Qui sommes nous</a>
					</li>
					<li className={styles.footer_list_item}>
						<a href="/contact">Contactez-nous</a>
					</li>
				</ul>
			</div>
			<div className="p-1 text-center text-neutral-700 dark:text-neutral-200">
				© 2023 Copyright :{" "}
				<a className="text-neutral-800 dark:text-neutral-400" href="https://rahim-hamadou.netlify.app/">
					Rahim HAMADOU
				</a>
			</div>
		</footer>
	);
}
