import { useRef, useEffect } from "react";
import "./Education.css";

/** Education & Experience component showcasing education timeline, internship, and certifications. */
function Education() {
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("utility__revealed");
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.15 });

		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	const certifications = [
		{ name: "Advanced Java & Spring", issuer: "Pondit", color: "amber" },
		{ name: "Android Development", issuer: "New Vision Information Technology(Internship / Training)", color: "teal" },
	];

	return (
		<section ref={sectionRef} className="education utility__reveal-section" id="education">
			<span className="education__label">Education & Experience</span>

			<div className="education__grid">
				{/* Left Column: Education Timeline */}
				<div className="education__column education__column--left">
					{/* BSc Card */}
					<div className="education__card">
						<span className="education__year">2023 — 2026</span>
						<h3 className="education__degree">B.Sc. in Computer Science</h3>
						<span className="education__institution">East Delta University · Chattogram</span>
						<span className="education__badge education__badge--amber">Final Semester</span>
						<p className="education__note"> </p>
					</div>

					{/* Connector Line */}
					<div className="education__connector"></div>

					{/* Diploma Card */}
					<div className="education__card">
						<span className="education__year">2018 — 2023</span>
						<h3 className="education__degree">Diploma in Computer Technology</h3>
						<span className="education__institution">Bangladesh Sweden Polytechnic Institute · Kaptai</span>
						<span className="education__board">Bangladesh Technical Education Board</span>
					</div>
				</div>

				{/* Right Column: Internship & Certifications */}
				<div className="education__column education__column--right">
					{/* Internship Block */}
					<div className="education__block">
						<span className="education__section-label">Internship / Training</span>
						<h4 className="education__company">New Vision Information Technology</h4>
						<span className="education__role">Android Development</span>
						<span className="education__duration">Aug 2022 – Dec 2022 · 4 months</span>

						<div className="education__projects">
							<span className="education__project-tag">Learning Alphabet</span>
							<span className="education__project-tag">NewsAPI</span>
							<span className="education__project-tag">OCR System</span>
							<span className="education__project-tag">Attendance Management System</span>
						</div>

                        <p className="education__note"> Get Training in Android Development during Diploma. </p>
					</div>

					{/* Certifications Block */}
					<div className="education__block">
						<span className="education__section-label">Certifications</span>
						{certifications.map((cert, idx) => (
							<div key={idx} className="education__cert-row">
								<span className={`education__cert-dot education__cert-dot--${cert.color}`}></span>
								<div className="education__cert-content">
									<span className="education__cert-name">{cert.name}</span>
									<span className="education__cert-issuer">{cert.issuer}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Education;
