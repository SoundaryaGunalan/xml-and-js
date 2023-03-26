

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

            xhttp.open("GET", "./customers.xml", true);
            xhttp.send();
            });

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

            xhr("./customers.xml").then(displayData);
 