import React from "react";
import NavBar from "./components/NavBar";
import Formfield from "./components/Formfield";
import Coolbutton from "./components/Coolbutton";

class App extends React.Component {

	render() {
		return (
			<div>
			<NavBar />
			<Formfield />
			<Coolbutton />
			</div> 
	)}
}

export default App;
