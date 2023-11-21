import React from "react";
import styles from "./ContactPhone.module.css";
import ImgComponent from "../contain_img/ImgComponent.js";

function ContactPhone(data) {
	return (
		<div className={styles.contactphone_container}>
			<h2 className={styles.contactphone_title}>TechEase</h2>
			<p>
				Adresse: <span>Ile-de-france</span>
			</p>
			<p>
				Telephone:
				<a className="icon_el" href="tel: 0123456789">
					0123456789
				</a>
			</p>
		</div>
	);
}

export default ContactPhone;
