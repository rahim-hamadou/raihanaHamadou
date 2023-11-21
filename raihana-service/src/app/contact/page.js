// @ts-nocheck
import NavBar from "../components/navBar/NavBar.js";
import Footer from "../components/footer/Footer.js";
import ContactForm from "../components/contacform/ContactForm.js";
import ContactPhone from "../components/contactphone/ContactPhone.js";

function contact() {
	let dataContact = {
		title: "TakeCare",
		title_head: `Posez-nous vos questions, nous avons les réponses!`,
		location: "Ile-De-France",
		invitation: `Chez TakeCare, nous sommes déterminés à offrir des services de puériculture exceptionnels, adaptés à vos besoins uniques. Si vous avez des questions, des demandes spécifiques ou si vous souhaitez en savoir plus sur nos offres, n'hésitez pas à nous contacter.
		

		Notre équipe dévouée est là pour répondre à toutes vos interrogations et discuter de la manière dont TakeCare peut contribuer au bien-être de votre famille. Votre tranquillité d'esprit commence ici !
		`,
		salutation: `
		Prenez soin de vos petits trésors avec TakeCare.`,
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
					<ContactPhone title={dataContact.title} location={dataContact.location} />
				</div>
				<h2 className="contact_container_salutation ">{dataContact.salutation}</h2>
			</div>

			<Footer />
		</>
	);
}

export default contact;
