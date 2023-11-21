import React from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
	return (
		<form
			className={styles.form_container}
			action="mailto:techeaseassociation@gmail.com"
			method="get"
			enctype="text/plain"
		>
			Nom
			<input type="text" name="subject" placeholder="Votre nom" />
			Email:
			<input type="email" name="email" placeholder="Votre Email" />
			Message:
			<textarea name="body" rows="5" cols="30" placeholder="Votre Message"></textarea>
			<input type="submit" value="Envoyer" />
		</form>
	);
}

export default ContactForm;
