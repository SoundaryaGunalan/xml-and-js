
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

/*
fetch method 1:
fetch("people.xml")
  .then((response) => response.text())
  .then((str) => new DOMParser().parseFromString(str, "text/xml"))
  .then(displayData);
Async await method 2:
  const loadData = async () => {
    const response = await fetch("./people.xml");
    const str = await response.text();
    const xmlData = new DOMParser().parseFromString(str, "text/xml");
    displayData(xmlData);
  };
  
  loadData();
  */
//asyn await method with .then method 3:
  const loadData = async () => {
    const response = await fetch("./people.xml")
    .then((data)=> data.text())
    .then((strData)=>
     new DOMParser().parseFromString(data, "text/xml"));
    displayData(strData);
  };
  
  loadData();