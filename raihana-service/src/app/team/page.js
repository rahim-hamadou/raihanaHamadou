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
			"Explorez sereinement le monde de l'informatique avec notre service établi, fort d'une expérience de plus de 5 ans. Nous vous proposons une offre complète incluant des services et cours personnalisés, une assistance dédiée et une formation approfondie sur le matériel informatique. Que vous soyez débutant, souhaitiez approfondir vos compétences ou simplement curieux, notre équipe expérimentée vous accompagne tout au long du processus d'apprentissage. Maîtrisez les outils informatiques essentiels et découvrez la création de sites web. En outre, nous vous offrons une assistance complète pour l'installation et le dépannage de vos outils informatiques et de haute technologie tels que les caméras, imprimantes, et bien d'autres. Naviguez avec assurance à travers les complexités de la technologie, bénéficiant de notre expertise et de notre expérience de plus de 5 ans dans le domaine, pour atteindre vos objectifs informatiques avec succès.",
	};
	return (
		<>
			<NavBar />

			<div className="banner_app_service"></div>
			<div className="container_body">
				<div className="team_container_services">
					<h1 className="text-center home_header_title">Nos services</h1>
					<ul className="team_container_services_list">
						<Item
							title="Depannage"
							content="Pour un dépannage rapide et efficace, contactez nos experts. Résolution de problèmes informatiques, électroniques, mécaniques et plus encore."
							src="/helpdesk.jpg"
						/>
						<Item
							title="Installation"
							content="Installation informatique complète : matériel, logiciels, réseau. Experts disponibles pour répondre à vos besoins. Contactez-nous pour une solution sur mesure."
							src="/repair.jpg"
						/>
						<Item
							title="Site Web"
							content="Conception de sites web sur mesure. Design attractif, fonctionnalités avancées. Contactez-nous pour concrétiser votre vision en ligne avec succès."
							src="/team-help.jpg"
						/>
					</ul>
				</div>
				<div className="team_container">
					<h1 className="text-center mb-5 home_header_title">Notre equipe & mission</h1>
					<p className="text-justify	">{data.services}</p>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default team;
