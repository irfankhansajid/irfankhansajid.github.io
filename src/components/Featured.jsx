import "./Featured.css";
import useReveal from "../hooks/useReveal";
import FeaturedDemo from "./FeaturedDemo";

const stackItems = [
	{ name: "React / Vite", dotClass: "featured__dot--react" },
	{ name: "Spring Boot 4", dotClass: "featured__dot--spring" },
	{ name: "PostgreSQL", dotClass: "featured__dot--postgres" },
	{ name: "Docker Compose", dotClass: "featured__dot--docker" },
	{ name: "Nginx + SSL", dotClass: "featured__dot--nginx" },
	{ name: "DigitalOcean", dotClass: "featured__dot--do" },
];

/** Renders the Nurun case study with problem/solution narrative, stack, and live simulation widget. */
function Featured() {
	const sectionRef = useReveal(0.15);

	return (
		<section className="featured utility__reveal-section" id="work" ref={sectionRef}>
			<div className="featured__inner">
				<p className="featured__label">Featured Project</p>

				<header className="featured__header">
					<div className="featured__title-wrap">
						<h2 className="featured__title">Nurun</h2>
						<span className="featured__separator" aria-hidden="true">
							·
						</span>
						<p className="featured__subtitle">AI Router with Persistent Memory</p>
					</div>

					<p className="featured__live-badge">
						<span className="featured__live-dot" aria-hidden="true" />
						Live at nurun.tech
					</p>
				</header>

				<div className="featured__grid">
					<div className="featured__story">
						<article className="featured__block">
							<p className="featured__block-label">THE PROBLEM</p>
							<p className="featured__block-text">
								Every free AI model—Gemini, DeepSeek—has a message limit. Hit it,
								and you open a new chat. The AI forgets everything. Your name,
								your project, your entire context. Gone. Most people just accept
								this.
							</p>
						</article>

						<article className="featured__block">
							<p className="featured__block-label featured__block-label--accent">
								THE SOLUTION
							</p>
							<p className="featured__block-text">
								Nurun stores every message in PostgreSQL and reconstructs full
								conversation history before every AI call. The model doesn&apos;t
								need to remember—the system remembers for it. When one provider
								hits its rate limit, Nurun routes to the next. You never notice.
							</p>
						</article>

						<article className="featured__block">
							<p className="featured__block-label">WHAT I LEARNED</p>
							<p className="featured__block-text">
								How to design a stateless backend that creates statefulness
								through persistence. How JWT auth, per-user isolation, and REST
								contracts work together. How to take a system from local → Docker
								→ DigitalOcean → Nginx → SSL in a single deployment pipeline.
							</p>
						</article>
					</div>

					<aside className="featured__side">
						<FeaturedDemo />

						<p className="featured__stack-title">Stack</p>

						<div className="featured__stack-card">
							{stackItems.map((item, index) => (
								<div className="featured__stack-row" key={item.name}>
									<span className={`featured__dot ${item.dotClass}`} aria-hidden="true" />
									<span className="featured__stack-name">{item.name}</span>
									{index < stackItems.length - 1 ? (
										<span className="featured__stack-arrow" aria-hidden="true">
											→
										</span>
									) : null}
								</div>
							))}
						</div>

						<div className="featured__links">
							<a
								className="featured__link featured__link--primary"
								href="https://nurun.tech"
								target="_blank"
								rel="noopener noreferrer"
							>
								Visit nurun.tech ↗
							</a>

							<a
								className="featured__link featured__link--secondary"
								href="https://github.com/irfankhansajid/Nurun"
								target="_blank"
								rel="noopener noreferrer"
							>
								View source on GitHub ↗
							</a>
						</div>
					</aside>
				</div>
			</div>
		</section>
	);
}

export default Featured;
