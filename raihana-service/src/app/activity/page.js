// @ts-ignore
import Link from "next/Link";
import NavBar from "../components/navBar/navBar.js";
import Footer from "../components/footer/Footer.js";
import Item from "../components/item/Item.js";

function team() {
	const data = {
		title: "Depannage",
		content:
			"Pour un dépannage rapide et efficace, contactez nos experts. Disponibles 24/7, résolution de problèmes informatiques, électroniques, mécaniques et plus encore.",
		services:
			"Bienvenue chez TakeCare, experts de la puériculture à domicile. Nous offrons des soins personnalisés, du bien-être, et un soutien dévoué pour le développement harmonieux de vos tout-petits, directement chez vous. Avec flexibilité et professionnalisme, TakeCare est votre partenaire de confiance dans la parentalité.",
	};
	return (
		<>
			<NavBar />

			<div className="banner_app_service"></div>
			<div className="container_body">
				<div className="activity_container_services">
					<h1 className="text-center home_header_title">Nos services</h1>
					<ul className="activity_container_services_list">
						<Item
							title="Soins"
							content="La puériculture englobe l'ensemble des soins et des pratiques visant à assurer le bien-être, la santé, et le développement harmonieux des nourrissons et des jeunes enfants."
							src="/care.jpg"
						/>
						<Item
							title="Eveil"
							content="Installation informatique complète : matériel, logiciels, réseau. Experts disponibles pour répondre à vos besoins. Contactez-nous pour une solution sur mesure."
							src="/play2.jpg"
						/>
						<Item
							title="Flexible"
							content="Conception de sites web sur mesure. Design attractif, fonctionnalités avancées. Contactez-nous pour concrétiser votre vision en ligne avec succès."
							src="/eveil.jpg"
						/>
					</ul>
				</div>
				<div className="activity_container_description">
					<h1 className="text-center mb-5 service_header_title">Notre equipe & mission</h1>
					<p className="text-justify	">{data.services}</p>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default team;
