import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
	function login() {
		axios.post(
			"https://django-cisl-52818-9-1318437721.sh.run.tcloudbase.com/api/admin-login",
			{
				username: "ecckaka",
				password: "chrisfufu",
			}
		);
	}
	function getTables() {
		axios.get(
			"https://django-cisl-52818-9-1318437721.sh.run.tcloudbase.com/api/tables",
			{
				headers: {
					"Content-Type": "application/json;",
					// "X-Session-Key": "whqex9hmw03kf3j55fb80k1q1jfolg3v",

					// document.cookie.split("=")[1]
					//   ? document.cookie.split("=")[1]
					//   : "",
					// "X-WX-SERVICE": "django-cisl",
				},
			}
		);
	}
	return (
		<div className="App">
			<header className="App-header">
				<button onClick={login}>admin login</button>
				<button onClick={getTables}>fetch tables</button>
			</header>
		</div>
	);
}

export default App;
