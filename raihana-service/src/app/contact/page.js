// @ts-nocheck
import Link from "next/Link";
import NavBar from "../components/navBar/navBar.js";
import Footer from "../components/footer/Footer.js";
// import Card from "../components/cards/Card.js";
import ContactForm from "../components/contacform/ContactForm.js";
import ContactPhone from "../components/ContactPhone/ContactPhone.js";

function contact() {
	let dataContact = {
		title: "TechEase",
		title_head: `Posez-nous vos questions, nous avons les réponses!`,
		invitation: `Nous espérons que tout va bien de ton côté! 🌟 Si tu as atterri sur notre site, c'est que tu as probablement des questions sur nos services de dépannage informatique, de création de sites web, ou d'autres prestations que nous proposons.

		Ne te retiens surtout pas! Nous sommes là pour répondre à toutes tes interrogations, que ce soit sur les tarifs, les services spécifiques, ou même pour discuter de situations particulières auxquelles tu fais face.
		
		Chez Techease, nous accordons une grande importance à la satisfaction de nos clients. La transparence et la communication sont nos maîtres-mots. N'hésite pas à nous écrire, nous sommes là pour t'aider.
		
		Tu peux compter sur une réponse rapide de notre part. Ton confort et ta tranquillité d'esprit sont notre priorité.
		Sans oublier que nosu sommes aussi joignable par telephone.
		

		À très bientôt`,
	};
	return (
		<>
			<NavBar />
			<div className="container_body">
				<div className="contact_section">
					<h1 className="home_header_title text-center mb-5">{dataContact.title_head}</h1>
					<p className="invitation">{dataContact.invitation}</p>
				</div>

				{/* <Card /> */}
				<div className="contact_container ">
					<ContactForm />
					<ContactPhone />
				</div>
			</div>

			{/* <Link href="/">join Home</Link> */}
			<Footer />
		</>
	);
}

export default contact;
