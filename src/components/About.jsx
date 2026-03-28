import "./About.css";
import useReveal from "../hooks/useReveal";

const LOCAL_CV_URL =
	"https://drive.google.com/uc?export=download&id=1knyuW33se0nTRXFto9xN30xWRtNs_hF-";

const stackGroups = [
	{
		label: "Backend",
		items: ["Java", "Spring Boot", "Spring Security", "JPA / Hibernate"],
	},
	{
		label: "Frontend",
		items: ["React", "Vite", "JavaScript"],
	},
	{
		label: "Infra",
		items: ["PostgreSQL", "Docker", "Nginx", "DigitalOcean", "Git"],
	},
];

/** Renders a concise bio and grouped core technology stack tags. */
function About() {
	const sectionRef = useReveal(0.15);

	return (
		<section className="about utility__reveal-section" id="about" ref={sectionRef}>
			<div className="about__inner">
				<div className="about__grid">
					<div className="about__bio">
						<p className="about__label">About</p>

						<p className="about__text">
							I&apos;m a final-semester Computer Science student in Bangladesh,
							building toward a career in software engineering.
						</p>

						<p className="about__text">
							I didn&apos;t start with a roadmap. I started with a problem — free AI
							models that forget everything when you switch tabs — and I built a
							system to solve it. That&apos;s Nurun.
						</p>

						<p className="about__text">
							I write Java and Spring Boot at the backend, React at the
							frontend, and I&apos;ve taken a full production app through Docker,
							Nginx, SSL, and a DigitalOcean deployment. I work best when the
							problem is real.
						</p>

						<a
							className="about__cv-link"
							href={LOCAL_CV_URL}
							download="IrfanKhanSajid-CV-Bangladesh.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							Download CV (PDF) ↓
						</a>

						<p className="about__resume-note">
							Resume is maintained in both international and local formats.
						</p>
					</div>

					<aside className="about__stack">
						{stackGroups.map((group) => (
							<div className="about__group" key={group.label}>
								<p className="about__group-label">{group.label}</p>

								<div className="about__pills">
									{group.items.map((item) => (
										<span className="about__pill" key={item}>
											{item}
										</span>
									))}
								</div>
							</div>
						))}

						<a className="about__skills-link" href="/skills/index.html" target="_blank" rel="noopener noreferrer">
							View all skills ↗
						</a>
					</aside>
				</div>
			</div>
		</section>
	);
}

export default About;
