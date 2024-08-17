import "./style.css";
import { loadHome } from "./home.js";
import { loadAbout } from "./about-us.js";
import { loadContact } from "./contact.js";

function displayHandler(doc){
    const contentDiv = doc.querySelector("div#content");

    const clickHandler = (e) => {
        switch(e.target.id) {
            case "home":
                contentDiv.textContent ="";
                loadHome(doc, contentDiv);
                break;
            case "about":
                contentDiv.textContent ="";
                loadAbout(doc, contentDiv);
                break;
            case "contact":
                contentDiv.textContent ="";
                loadContact(doc, contentDiv);
                break;
            default:
                break;
        }
    }

    doc.addEventListener('click', clickHandler);
}

displayHandler(document);