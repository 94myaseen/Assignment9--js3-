
var siteName = document.getElementById("SiteName");
var siteURL = document.getElementById("SiteUrl");
var mybody = document.getElementById("myBody");
var er = document.getElementById("error");
var er1 = document.getElementById("error1");
var list;
if (localStorage.getItem("list")) {
    list = JSON.parse(localStorage.getItem("list"))
    display(list)
} else {
    list = [];
}

function getinformation() {
    if (nameValidation() === true && citeValidation() == true) {
        var info = {
            name: siteName.value,
            url: siteURL.value
        }

        list.push(info)
        savetolocalstorage()
        clearInput()
        display(list)
    } else {
        console.log("no validation true");
    }

}
function display(plist) {
    var cartoona = "";
    for (var i = 0; i < plist.length; i++) {

        cartoona += `<tr> <td>${i}</td>
        <td>${plist[i].name}</td>
        <td><a class="btn btn-outline-warning" href="http://${plist[i].url}" target="_blank" >Visit</a></td>
        <td><button class="btn btn-outline-warning"onclick="deletedata(${i})" >Delete</button></td> </tr>`

    }

    mybody.innerHTML = cartoona;

}
// function for insert data
function clearInput() {
    siteName.value = "";
    siteURL.value = "";
}
// function for delete data
function deletedata(index) {
    list.splice(index, 1);
    savetolocalstorage()
    display(list)
}
// function for save in local storage
function savetolocalstorage() {

    localStorage.setItem("list", JSON.stringify(list))

}
// name function validation
function nameValidation() {
    var ragex = /[A-Za-z0-9]{3,}/;
    
    if (ragex.test(siteName.value) === true) {
        er.classList.replace("d-block", "d-none")
        siteName.classList.add("is-valid")
        siteName.classList.remove("is-invalid")
        return true
    } else {
        er.classList.replace("d-none", "d-block")
        siteName.classList.add("is-invalid")
        siteName.classList.remove("is-valid")
        return false
    }
}

//  cite function validation
function citeValidation() {
    var ragex = /^www\.[a-z]{0,}\.[a-z]{2,}$/;
    if (ragex.test(siteURL.value) === true) {
        er1.classList.replace("d-block", "d-none")
        siteURL.classList.add("is-valid")
        siteURL.classList.remove("is-invalid")
        return true
    } else {
        er1.classList.replace("d-none", "d-block")
        siteURL.classList.add("is-invalid")
        siteURL.classList.remove("is-valid")
        return false
    }
}


