import React from "react";
import styles from "./Textanime.module.css";

export default function textanime() {
	return (
		<div className={styles.container}>
			<p className={styles.text}>
				<span className={styles.span_el}>Une assistance</span>
			</p>
			<p className={styles.text}>
				<span className={styles.span_el}>je suis la pour vous</span>
			</p>
		</div>
	);
}
