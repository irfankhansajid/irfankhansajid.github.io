import "./Hero.css";

/** Renders the full-height hero introduction with primary portfolio calls to action. */
function Hero() {
	return (
		<section className="hero" id="hero">
			<div className="hero__accent" aria-hidden="true" />

			<div className="hero__content">
				<p className="hero__label">Full-Stack Engineer · Bangladesh</p>

				<h1 className="hero__name">Irfan Khan Sajid</h1>

				<p className="hero__tagline">I build AI systems that don&apos;t forget.</p>

				<div className="hero__actions">
					<a
						className="hero__btn hero__btn--primary"
						href="https://nurun.tech"
						target="_blank"
						rel="noopener noreferrer"
					>
						See Nurun →
					</a>

					<a
						className="hero__btn hero__btn--secondary"
						href="https://github.com/irfankhansajid"
						target="_blank"
						rel="noopener noreferrer"
					>
						View on GitHub →
					</a>
				</div>
			</div>
		</section>
	);
}

export default Hero;
