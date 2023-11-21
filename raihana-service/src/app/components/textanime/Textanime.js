import React from "react";
import styles from "./textAnime.module.css";

export default function textanime() {
	return (
		<div className={styles.container}>
			<p className={styles.text}>
				<span className={styles.span_el}>Un besoin ?</span>
			</p>
			<p className={styles.text}>
				<span className={styles.span_el}>Contactez-nous</span>
			</p>
		</div>
	);
}
