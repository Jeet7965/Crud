
// var slectedRow = null;

// let btn = document.getElementById('btn');

// // --------- massage
// function showMessage(message, className) {
//     const div = document.createElement('div');
//     div.className = `alert alert-${className}`;
//     div.appendChild(document.createTextNode(message));
//     const container = document.querySelector('.container');
//     const main = document.querySelector('.main')
//     container.insertBefore(div, main)

//     setTimeout(() =>
//         document.querySelector('.alert').remove(), 3000
//     )
// }

// //  _______  Add Student ------------------

// btn.addEventListener('click', (e) => {
//     e.preventDefault();

//     const fname = document.getElementById('firstname')
//     const lname = document.getElementById('lastname')
//     const address = document.getElementById('address')

//     if (fname.value === '' || lname === '' || address === '') {
//         showMessage('please Fill the Form!', "danger")
//     }
//     else {
//         if(slectedRow == null) {

//             let list_student = document.getElementById('student');
//             const row = document.createElement('tr')
//             row.innerHTML = `
//                 <td>${fname.value}</td>
//                 <td>${lname.value}</td>
//                 <td>${address.value}</td>
//                 <td>
//                 <button class="btn btn-warning btn-sm " onclick="editData(this)" >Edit</button>
//                 <button class="btn btn-danger btn-sm " onclick="removeData(this)" >Delete</button>
//                 </td>`;
//             list_student.appendChild(row);
//             showMessage("Student Added..... ", "success")
//         }
//         else {

//             slectedRow.children[0].textContent = fname;
//             slectedRow.children[1].textContent = lname;
//             slectedRow.children[2].textContent = address
//             slectedRow = null;
//             showMessage("Student Info Edit ", "info")
//         }
//         fname.value = '';
//         lname.value = '';
//         address.value = '';
//     }



// })

// function removeData(currentElement){
//     currentElement.parentElement.parentElement.remove();
//     showMessage(" Student remove ......", "danger");

// }

// function editData(currentElement) {

//     let slectedRow = currentElement.parentElement.parentNode;

//     document.getElementById('firstname').value = slectedRow.children[0].textContent;

//     document.getElementById('lastname').value = slectedRow.children[1].textContent;
//     document.getElementById('address').value = slectedRow.children[2].textContent;


//     showMessage("Student Edit ..... ", "success")
// }


// // jokes


