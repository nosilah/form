

let name = document.querySelector('.name'),
    userName = document.querySelector('.username'),
    email = document.querySelector('.email'),
    street = document.querySelector('.address-street'),
    city = document.querySelector('.address-city'),
    phone = document.querySelector('.phone');

let nameInForm = document.getElementById('name'),
    usernameInForm = document.getElementById('username'),
    emailInForm = document.getElementById('email'),
    streetInForm = document.getElementById('street'),
    cityInForm = document.getElementById('city'),
    phonInForm = document.getElementById('phone');

let row = document.getElementById('table-id');

async function getResponse() {


    let newRow = {
        name: "kjhkjkbbbbbbbbbbj",
        username: 'kjlkj',
        email: 'lkhkjhkj',
        address: {
            street: 'bbjhhj',
            city: 'kjhkj'
        },
        phone: '45654564654564564'
    };

    let response = await fetch('test.json');
// console.log(response);

   let content = await response.json();
   
    // console.log(content);
    content.push(newRow);
    console.log(content);
    for (const key in content) {
        row.innerHTML += `
      
    <tr>
    <td class="name"> ${content[key].name} </td>
     <td class="username">${content[key].username}</td>
     <td class="email">${content[key].email}</td>
     <td class="address-street">${content[key].address.street}</td>
     <td class="address-city">${content[key].address.city}</td>
     <td  class="phone">${content[key].phone}</td>
     <td><button id="delete" value="delete">delet</button></td>
 </tr>
 
     `

    }

}
getResponse();
