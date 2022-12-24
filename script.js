let arr = [
  {Name: "john", profession: "developer", age: "18" },
  {Name: "jack", profession: "developer", age: "20" },
  {Name: "karen", profession: "admin", age: "19" },
];
let result = document.getElementById("result");
arr.forEach((item) => {
      let div = document.createElement("div");
      div.innerText = "  Name:" +
        item.Name +
        "   Profession:" +
        item.profession +
        "  Age:" +
        item.age;
      
      div.style.border = "1px solid white";
      div.style.borderRadius = "5px";
      div.style.width = " 400px";
      div.style.height = " 40px";
      div.style.alignContent = "center";
      div.style.padding = "2px";
      div.style.margin = "10px";
      div.style.fontSize = "18px";

      result.append(div);
    
  });


let dropdown = document.getElementById("dropdown");
let btn = document.getElementById("filterBtn");

function filterByProfession() {
  result.innerHTML = "";

  let dropdownValue = dropdown.value;
  console.log(dropdownValue);

  if (dropdownValue == "profession") {
    alert("Please select a profession");
    return;
  }

  arr.forEach((item) => {
    if (item.profession === dropdownValue) {
        let div = document.createElement("div");
     div.innerText = "  Name:" +
        item.Name +
        "   Profession:" +
        item.profession +
        "  Age:" +
        item.age;
      div.style.border = "1px solid white";
      div.style.borderRadius = "5px";
      div.style.width = " 400px";
      div.style.height = " 30px";
      div.style.alignContent = "center";
      div.style.padding = "2px";
      div.style.margin = "10px";
      div.style.fontSize = "18px";

      result.append(div);
    }
  });
}

btn.addEventListener("click", filterByProfession);

let addbtn = document.getElementById("add");


function AddUser() {
    let nameVal = document.getElementById("fn").value;
    let ageVal = document.getElementById("age").value;
    let profVal = document.getElementById("profession").value;
    let div1 = document.createElement("div").innerText = {Name: + nameVal ,  profession: profVal ,age: ageVal };
    arr.push(div1);
    console.log(arr); // to see the userlist

}

addbtn.addEventListener("click", AddUser);
