import React from "react";
import styles from "./ContactPhone.module.css";
import ImgComponent from "../contain_img/ImgComponent.js";

function ContactPhone(data) {
	return (
		<div className={styles.contactphone_container}>
			<h2 className={styles.contactphone_title}>{data.title}</h2>
			<p>
				Localisation: <span>{data.location}</span>
			</p>
			<p>
				Telephone:
				<a className="icon_el" href="tel: 0667862607">
					0667862607
				</a>
			</p>
		</div>
	);
}

export default ContactPhone;
