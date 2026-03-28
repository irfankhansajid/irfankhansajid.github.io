import "./Projects.css";
import useReveal from "../hooks/useReveal";

const projects = [
	{
		id: "01",
		title: "Note",
		problem: "Secure note-taking. Your notes, encrypted and private.",
		description:
			"A full-stack application with JWT-based user authentication and per-user data isolation. Every note is tied to its owner — no shared access, no leaks.",
		tech: ["Java", "Spring Boot", "PostgreSQL", "React", "JWT"],
		liveHref: "https://note-irfan.vercel.app/",
		sourceHref: "https://github.com/irfankhansajid/note",
		briefHref: "/stories/note.html",
	},
	{
		id: "02",
		title: "OCR System",
		problem: "Image in. Text out. No manual transcription.",
		description:
			"An optical character recognition system that captures character data from images and returns plain text. Built to understand how ML-based text extraction works at an implementation level.",
		tech: ["Java", "Image Processing", "ML"],
		sourceHref: "https://github.com/irfankhansajid/Optical-Character-Recognition---OCR.",
		briefHref: "/stories/ocr.html",
	},
];

/** Renders two supporting project cards that highlight security and applied OCR work. */
function Projects() {
	const sectionRef = useReveal(0.15);

	return (
		<section className="projects utility__reveal-section" id="projects" ref={sectionRef}>
			<div className="projects__inner">
				<div className="projects__head">
					<p className="projects__label">More Work</p>
					<a className="projects__all-link" href="/projects/index.html" target="_blank" rel="noopener noreferrer">
						View All Projects ↗
					</a>
				</div>

				<div className="projects__grid">
					{projects.map((project) => (
						<article className="projects__card" key={project.title}>
							<p className="projects__index">{project.id}</p>
							<h3 className="projects__title">{project.title}</h3>
							<p className="projects__problem">{project.problem}</p>
							<p className="projects__description">{project.description}</p>

							<div className="projects__tags">
								{project.tech.map((tag) => (
									<span className="projects__tag" key={tag}>
										{tag}
									</span>
								))}
							</div>

							<div className="projects__actions">
								{project.liveHref ? (
									<a
										className="projects__link projects__link--live"
										href={project.liveHref}
										target="_blank"
										rel="noopener noreferrer"
									>
										Live demo ↗
									</a>
								) : null}

								{project.briefHref ? (
									<a
										className="projects__link projects__link--brief"
										href={project.briefHref}
										target="_blank"
										rel="noopener noreferrer"
									>
										Project brief →
									</a>
								) : null}

								<a
									className="projects__link"
									href={project.sourceHref}
									target="_blank"
									rel="noopener noreferrer"
								>
									View source ↗
								</a>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
