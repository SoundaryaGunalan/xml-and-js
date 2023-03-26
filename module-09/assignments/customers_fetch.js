
function stringToNode(html) 
            {
                const temp_1 = document.createElement(`template`);
                html = html.trim();
                temp_1.innerHTML = html;
                return temp_1.content.firstChild;
            }

            function displayData(xmlDoc) 
            {
                const element_list = document.getElementById(`cust`);
                const nodes = xmlDoc.getElementsByTagName(`customer`);

                for (let index = 0; index < nodes.length; index++) 
                {
                    const node = nodes[index];
                    console.log(node.getElementsByTagName(`order`))
                    const item_list = stringToNode(`<li>
                    <h2>${
                        node.getElementsByTagName(`name`)[0].attributes[0].nodeValue
                    } 
                    ${
                        node.getElementsByTagName(`name`)[0].childNodes[0].nodeValue
                    }</h2>

                    <p> Address: ${node.getElementsByTagName(`address`)[0].childNodes[0].nodeValue} </p>
                    <p> phoneNumber: ${node.getElementsByTagName(`phone`)[0].childNodes[0].nodeValue} </p>
                    <p>${`Email: ${
                        node.getElementsByTagName(`email`)[0] ? node.getElementsByTagName(`email`)[0].childNodes[0].nodeValue : ""
                    }`}</p>
                    
                    <ol id="${node.getAttribute('custID')}"> <h4> Order Items </h4> </ol> 
                    </li>`);

                    element_list.appendChild(item_list);
                }
                displayOrderData(xmlDoc)
            }
      
            function displayOrderData(xmlDoc) 
            {
                const nodes = xmlDoc.getElementsByTagName(`order`);
                for (let index = 0; index < nodes.length; index++) 
                {
                    const node = nodes[index];
                    console.log(node.getElementsByTagName(`items`)[0].children[0].getElementsByTagName('itemPrice')[0].childNodes[0].nodeValue)
                    const orderElement = document.getElementById(`${ node.getAttribute('orderBy')}`);
                    const orderItems = stringToNode(`
                    <li>
                    <p> OrderDate: ${node.getElementsByTagName(`orderDate`)[0].childNodes[0].nodeValue} </p>
                    <p> itemPrice: ${node.getElementsByTagName(`items`)[0].children[0].getElementsByTagName('itemPrice')[0].childNodes[0].nodeValue} </p>
                    <p> itemQty: ${node.getElementsByTagName(`items`)[0].children[0].getElementsByTagName('itemQty')[0].childNodes[0].nodeValue} </p>
                    </li>`);
                    orderElement.appendChild(orderItems);
                }
            }

/*
fetch method 1:
fetch("customers.xml")
  .then((response) => response.text())
  .then((str) => new DOMParser().parseFromString(str, "text/xml"))
  .then(displayData);
Async await method 2:
  const loadData = async () => {
    const response = await fetch("./customers.xml");
    const str = await response.text();
    const xmlData = new DOMParser().parseFromString(str, "text/xml");
    displayData(xmlData);
  };
  
  loadData();
  */
//asyn await method with .then method 3:
  const loadData = async () => {
    const response = await fetch("./customers.xml")
    .then((data)=> data.text())
    .then((strData)=>
     new DOMParser().parseFromString(data, "text/xml"));
    displayData(strData);
  };
  
  loadData();