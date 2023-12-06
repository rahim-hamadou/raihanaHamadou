import Image from "next/image";
import NavBar from "./components/navBar/NavBar.js";
import Footer from "./components/footer/Footer.js";
import Textanime from "./components/textanime/Textanime.js";
import ImgComponent from "./components/contain_img/ImgComponent.js";

const name = "TakeCare";

const bg = "./assets/bg/sleep.jpg";
export default function Home() {
	let data = {
		name: "TakeCare",
		title: "Bienvenue chez votre Partenaire Bien-Être pour les Tout-Petits !",
		message_header: `Salut,

		Chez ${name}, nous comprenons que la période de la petite enfance est l'une des phases les plus importantes et délicates de la vie. Nous sommes ravis de vous offrir notre service de puériculture à domicile dédié à assurer le bien-être et le développement harmonieux de votre petit trésor.
		`,

		services: {
			soins: ` Nos professionnels de la puériculture expérimentés chez TakeCare sont là pour offrir des soins personnalisés adaptés aux besoins spécifiques de votre enfant. De la nutrition à l'hygiène en passant par le jeu éducatif, nous nous engageons à fournir une attention individualisée.`,
			eveil: `Nous croyons en l'importance du jeu dans le développement des compétences cognitives et sociales de votre enfant. Les spécialistes de TakeCare créent un environnement stimulant qui favorise l'apprentissage et l'éveil, tout en respectant les rythmes naturels de votre tout-petit.`,
			flexible: ` Nous comprenons que chaque famille est unique. C'est pourquoi nous offrons des horaires flexibles et des services adaptés à vos besoins spécifiques, apportant ainsi confort et tranquillité d'esprit à votre domicile.`,
		},
		message_footer: `	Je suis une professionnelle de la puériculture hautement qualifiée et dévouée. La sécurité de votre enfant est ma priorité absolue chez TakeCare. Je respecte les normes les plus strictes en matière de sécurité et d'hygiène.
    
    Je suis consciente que chaque enfant est unique, et mes services sont adaptés pour répondre aux besoins spécifiques de chaque petit individu.
    
    Faites-nous confiance pour être votre partenaire de confiance dans le merveilleux voyage de la parentalité.
    
   Je suis impatiente de prendre soin de vos petits trésors avec tout l'amour et l'attention qu'ils méritent.

   Pour plus d'informations et pour discuter de la manière dont nous pouvons répondre aux besoins uniques de votre famille, n'hésitez pas à nous contacter`,
		salutation: ` Bienvenue dans la famille TakeCare !`,

		dataImg: {
			tel: "/phonecall.svg",
			mail: "/email.svg",
			width: 60,
			height: 60,
			alt: "icon contact",
		},
	};
	return (
		<>
			<NavBar />

			<div className="body_head_container  ">
				<div id="banner" className="banner_app">
					<Textanime />
				</div>
			</div>
			<div className="container_body">
				<div className="home_section">
					<div className="action_call">
						<h1 className="home_header_title">{data.title} </h1>
						<div className="icon">
							<a className="icon_el" href="mailto:raihanamik@gmail.com">
								<ImgComponent
									src="/email.svg"
									width={data.dataImg.width}
									height={data.dataImg.height}
									alt={data.dataImg.alt}
								/>
							</a>
							<a className="icon_el" href="tel:0667862607">
								<ImgComponent
									src="/phonecall.svg"
									width={data.dataImg.width}
									height={data.dataImg.height}
									alt={data.dataImg.alt}
								/>
							</a>
						</div>
					</div>
					<p className="home_header_message">{data.message_header}</p>
					<ul className="service_list">
						<li className="services_items soin animate__bounce">
							<b>Soins Personnalisés: </b>
							{data.services.soins}
						</li>
						<li className="services_items eveil">
							<b>Éveil et Développement: </b>
							{data.services.eveil}
						</li>
						<li className="services_items flexibility">
							<b>Flexibilité et Confort: </b>
							{data.services.flexible}
						</li>
					</ul>

					<p className="home_header_message_footer">{data.message_footer}</p>
					<p className="home_header_message_footer_salutation">
						<b>{data.salutation}</b>
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
}
