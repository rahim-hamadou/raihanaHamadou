"use client";

import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<footer className=" footer_container bg-amber-300 hover:bg-amber-400  text-center  lg:text-left">
			<div className="footer_contain">
				<ul className={styles.footer_list}>
					<li className={styles.footer_list_item}>
						<a href="/">TakeCare</a>
					</li>
					<li className={styles.footer_list_item}>
						<a href=""></a>
						<a href="/activity">Mon activité</a>
					</li>
					<li className={styles.footer_list_item}>
						<a href="/contact">Me joindre</a>
					</li>
				</ul>
			</div>
			<div className="p-1 text-sm text-center text-neutral-700 dark:text-neutral-800">
				© 2023 Copyright :{" "}
				<a className="text-neutral-800 dark:text-neutral-800" href="https://rahim-hamadou.netlify.app/">
					Rahim HAMADOU
				</a>
			</div>
		</footer>
	);
}
