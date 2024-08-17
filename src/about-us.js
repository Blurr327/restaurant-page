export { loadAbout }



const loadAbout = (doc, contentDiv) => {
    const card1Div = doc.createElement("div");
    const card2Div = doc.createElement("div");
    card1Div.classList.add("card");
    card2Div.classList.add("card");
    card1Div.textContent = "We're actually a non profit. We just wanna fatten you up with sea food.";
    card2Div.textContent = "Why do you want to find out more about us anyways ?";
    const header  = doc.createElement("h2");
    header.textContent = "About";
    contentDiv.appendChild(card1Div);
    contentDiv.appendChild(card2Div);
    contentDiv.appendChild(header);
}