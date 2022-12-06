import "./App.css";
import About from "./Components/About";
import Blogs from "./Components/Blogs";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ProjectGallery from "./Components/ProjectGallery";
import Testimonials from "./Components/Testimonials";
function App() {
	return (
		<div className="App">
			<Header />
			{/* <Contact />
			<Testimonials /> */}
			{/* <Blogs /> */}
			{/* <ProjectGallery /> */}
			<About />
		</div>
	);
}

export default App;
