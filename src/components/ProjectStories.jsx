import "./ProjectStories.css";
import useReveal from "../hooks/useReveal";

const allProjects = [
	{
		title: "Nurun",
		description: "AI router with persistent conversation memory and model fallback routing.",
		liveHref: "https://nurun.tech",
		sourceHref: "https://github.com/irfankhansajid/Nurun",
		briefHref: "/stories/nurun.html",
	},
	{
		title: "Note",
		description: "Secure note app with JWT auth, per-user isolation, and clean backend contracts.",
		liveHref: "https://note-irfan.vercel.app/",
		sourceHref: "https://github.com/irfankhansajid/note",
		briefHref: "/stories/note.html",
	},
	{
		title: "OCR System",
		description: "Image-to-text extraction work started during internship and extended independently.",
		sourceHref: "https://github.com/irfankhansajid/Optical-Character-Recognition---OCR.",
		briefHref: "/stories/ocr.html",
	},
	{
		title: "FlavorFusion",
		description: "Frontend recipe experience with responsive UI and polished interaction flow.",
		liveHref: "https://flavorfusion-five.vercel.app/",
		sourceHref: "https://github.com/irfankhansajid/flavorfusion",
		briefHref: "/stories/flavorfusion.html",
	},
	{
		title: "Applab",
		description: "Web project demonstrating layout precision and polished UI patterns.",
		liveHref: "https://irfankhansajid.github.io/Applab",
		sourceHref: "https://github.com/irfankhansajid/Applab",
	},
	{
		title: "Brandi",
		description: "Frontend project focused on clean sections, visual hierarchy, and responsiveness.",
		liveHref: "https://irfankhansajid.github.io/Brandi/",
		sourceHref: "https://github.com/irfankhansajid/Brandi",
	},
];

/** Renders the complete project archive with live links and source code access. */
function ProjectStories() {
	const sectionRef = useReveal(0.1);

	return (
		<section className="stories utility__reveal-section" id="all-projects" ref={sectionRef}>
			<div className="stories__inner">
				<p className="stories__label">All Projects</p>
				<p className="stories__intro">
					Full archive of shipped and experimental builds. Open live demos, source
					code, and technical notes from here.
				</p>

				<div className="stories__grid">
					{allProjects.map((project) => (
						<article className="stories__card" key={project.title}>
							<h3 className="stories__title">{project.title}</h3>
							<p className="stories__description">{project.description}</p>

							<div className="stories__actions">
								{project.liveHref ? (
									<a
										className="stories__link stories__link--live"
										href={project.liveHref}
										target="_blank"
										rel="noopener noreferrer"
									>
										Live ↗
									</a>
								) : null}

								{project.briefHref ? (
									<a
										className="stories__link"
										href={project.briefHref}
										target="_blank"
										rel="noopener noreferrer"
									>
										Brief →
									</a>
								) : null}

								<a
									className="stories__link"
									href={project.sourceHref}
									target="_blank"
									rel="noopener noreferrer"
								>
									Source ↗
								</a>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

export default ProjectStories;
