export { loadContact };



const loadContact = (doc, contentDiv) => {
    const card1Div = doc.createElement("div");
    const card2Div = doc.createElement("div");
    card1Div.classList.add("card");
    card2Div.classList.add("card");
    card1Div.textContent = "This is our contact page. Yay";
    card2Div.textContent = "+212 56 65 85 72";
    const header  = doc.createElement("h2");
    header.textContent = "Contact";
    contentDiv.appendChild(card1Div);
    contentDiv.appendChild(card2Div);
    contentDiv.appendChild(header);
}