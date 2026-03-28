import "./Contact.css";
import useReveal from "../hooks/useReveal";
import { useEffect, useRef, useState } from "react";

/** Renders compact contact links with direct ways to start a conversation. */
function Contact() {
	const sectionRef = useReveal(0.15);
	const [emailCopied, setEmailCopied] = useState(false);
	const resetTimerRef = useRef(null);

	useEffect(() => {
		return () => {
			if (resetTimerRef.current) {
				window.clearTimeout(resetTimerRef.current);
			}
		};
	}, []);

	const handleEmailClick = async (event) => {
		event.preventDefault();

		try {
			await navigator.clipboard.writeText("irfankhansajid@gmail.com");
			setEmailCopied(true);

			if (resetTimerRef.current) {
				window.clearTimeout(resetTimerRef.current);
			}

			resetTimerRef.current = window.setTimeout(() => {
				setEmailCopied(false);
			}, 2000);
		} catch {
			window.location.href = "mailto:irfankhansajid@gmail.com";
		}
	};

	return (
		<section className="contact utility__reveal-section" id="contact" ref={sectionRef}>
			<div className="contact__inner">
				<p className="contact__label">Contact</p>
				<h2 className="contact__headline">Let&apos;s build something.</h2>
				<p className="contact__subline">
					Open to remote roles, freelance projects, and technical conversations.
				</p>

				<div className="contact__links">
					<a className="contact__link" href="mailto:irfankhansajid@gmail.com" onClick={handleEmailClick}>
						{emailCopied ? "Copied ✓" : "Email ↗"}
					</a>

					<a
						className="contact__link"
						href="https://linkedin.com/in/irfankhansajid"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn ↗
					</a>

					<a
						className="contact__link"
						href="https://github.com/irfankhansajid"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub ↗
					</a>
				</div>

				<p className="contact__copyright">© 2026 Irfan Khan Sajid</p>
			</div>
		</section>
	);
}

export default Contact;
