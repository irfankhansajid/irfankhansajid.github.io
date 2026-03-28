import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Projects from "./components/Projects";
import About from "./components/About";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./App.css";

/** Renders the full single-page portfolio layout with a scroll-activated sticky navbar. */
function App() {
	const [showNavbar, setShowNavbar] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			setShowNavbar(window.scrollY >= window.innerHeight * 0.95);
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div className="app">
			<header className={`app__navbar ${showNavbar ? "app__navbar--visible" : ""}`}>
				<a className="app__brand" href="#hero">
					IKS
				</a>

				<nav className="app__nav-links" aria-label="Primary">
					<a className="app__nav-link" href="#work">
						Work
					</a>
					<span className="app__separator" aria-hidden="true">
						·
					</span>
					<a className="app__nav-link" href="#about">
						About
					</a>
					<span className="app__separator" aria-hidden="true">
						·
					</span>
					<a className="app__nav-link" href="#contact">
						Contact
					</a>
				</nav>
			</header>

			<Hero />
			<Featured />
			<Projects />
			<About />
			<Education />
			<Contact />
		</div>
	);
}

export default App;
