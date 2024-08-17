export { loadHome }



const loadHome = (doc, contentDiv) => {
    const header  = doc.createElement("h2");
    const card1Div = doc.createElement("div");
    const card2Div = doc.createElement("div");
    card1Div.classList.add("card");
    card2Div.classList.add("card");
    card1Div.textContent = "Our food is the best.";
    card2Div.textContent = "Look at the ocean. Pretty cool right ?";
    header.textContent = "Home";
    contentDiv.appendChild(card1Div);
    contentDiv.appendChild(card2Div);
    contentDiv.appendChild(header);
}