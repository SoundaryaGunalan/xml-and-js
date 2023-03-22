
const xhr = (url, method = `GET`) =>
  new Promise((resolve) => {
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () 
{
    if (this.readyState == 4 && this.status == 200) 
    {
        displayData(this.responseXML);
    }
};

xhttp.open("GET", "people.xml", true);
xhttp.send();

  });

function stringToNode(html)
{
    const template = document.createElement(`template`);
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
}

function displayData(peopleDoc) 
{
    const listElement = document.getElementById(`peoples`);
    const infoNodes = peopleDoc.getElementsByTagName(`dataset`);
    for (let index = 0; index < infoNodes.length; index++) 
    {
        const infoNode = infoNodes[index];
        const listItem = stringToNode(`<li>
        <h1>${
                infoNode.getElementsByTagName(`first_name`)[0].childNodes[0]
                .nodeValue
            } 
            ${
            infoNode.getElementsByTagName(`last_name`)[0].childNodes[0]
            .nodeValue
            }
        </h1>
        <b><p>Email: ${infoNode.getElementsByTagName(`email`)[0].childNodes[0].nodeValue}</p></b>
        <p>Gender: ${infoNode.getElementsByTagName(`gender`)[0].childNodes[0].nodeValue}</p>
        <p>IP Address: ${infoNode.getElementsByTagName(`ip_address`)[0].childNodes[0].nodeValue}</p>
        </li>`);
    listElement.appendChild(listItem);
    }
}

xhr("./people.xml").then(displayData);