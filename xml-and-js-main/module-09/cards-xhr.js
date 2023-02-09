const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    displayData(this.responseXML);
  }
};
xhttp.open("GET", "cards.xml");
xhttp.send();

function stringToNode(html) {
  const template = document.createElement(`template`);
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}

function createCard(card) {
  const content = `<li>
  <article>
    <p>${card.type}</p>
    <h2>${card.number}</h2>
    <div>
      ${card.balance} ${card.currency}
    </div>
  </article>
</li>`;

  return stringToNode(content);
}

function parseCard(xml) {
  const number = xml.getElementsByTagName(`number`)[0].childNodes[0].nodeValue;
  const type = xml.getElementsByTagName(`type`)[0].childNodes[0].nodeValue;
  const currency =
    xml.getElementsByTagName(`currency`)[0].childNodes[0].nodeValue;
  const balance =
    xml.getElementsByTagName(`balance`)[0].childNodes[0].nodeValue;

  return {
    number,
    type,
    currency,
    balance,
  };
}

function displayData(xmlDoc) {
  const cards = xmlDoc.getElementsByTagName(`record`);

  const list = document.getElementById(`cards`);

  for (let index = 0; index < cards.length; index++) {
    const element = cards[index];
    const parsedCard = parseCard(element);

    const cardElement = createCard(parsedCard);
    list.appendChild(cardElement);
  }
}
