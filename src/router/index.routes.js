import Home from '../views/home.js'
import Login from '../views/login.js'

let content = document.getElementById("root");

const router = (route) => {
    content.innerHTML = '';
    switch (route) {
        case "#/Home":
            {
                return content.appendChild(Home());
            }

        case "#/login":
            {
                return content.appendChild(Login());
            }

        default:
            return console.log("Error 404");
    }
};

export { router };