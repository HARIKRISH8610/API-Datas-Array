var divTable = document.getElementsByClassName("addArray")[0];

getData();

function getData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((result) => {
      datas = result;
      divTable.innerHTML = "";
      for (i = 0; i < result.length; i++) {
        divTable.innerHTML += `
            <tr>
            <td>${result[i].id}</td>
            <td>${result[i].name}</td>
            <td>${result[i].email}</td>
            <td>${result[i].phone}</td>
            <td>${result[i].website}</td>
            <td><button value=${
              i + 1
            } onclick="fnBtnMore(this)" class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal" > More details</button></td>
            </tr>`;
      }
    });
}

function fnBtnMore(btnValue) {
  var popup = [btnValue.value - 1];
  var popupDivUser = document.getElementById("detailsUser");
  var popupDivAdd = document.getElementById("address");
  var popupDivComp = document.getElementById("company");
  var popupHead=document.getElementById("exampleModalLabel");

popupHead.innerHTML=`Details about <span style="color: white;"> ${datas[popup].name} </span>`
  popupDivUser.innerHTML = `${datas[popup].username}`;
  popupDivComp.innerHTML = `${datas[popup].company.name}`;
  popupDivAdd.innerHTML = `${datas[popup].address.street},
             ${datas[popup].address.city},
             ${datas[popup].address.suite},
               ${datas[popup].address.zipcode}.`;
}

function btnClose() {
  var popupDiv = document.getElementsByClassName("divPopup")[0];
  popupDiv.innerHTML = "";
}