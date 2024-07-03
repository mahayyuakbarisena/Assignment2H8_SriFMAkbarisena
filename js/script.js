// Get Param Get



// Get All Param
const nama = document.getElementById("nama_tampil").innerText;
const role = document.getElementById("role_tampil").innerText;
const availability = document.getElementById("availability_tampil").innerText;
const usia = document.getElementById("usia_tampil").innerText;
const lokasi = document.getElementById("lokasi_tampil").innerText;
const pengalaman = document.getElementById("pengalaman_tampil").innerText;
const email = document.getElementById("email_tampil").innerText;

// Input Value Param
var nama_form = document.getElementById("nama");
var role_form = document.getElementById("role");
var availability_form = document.getElementById("availability");
var usia_form = document.getElementById("usia");
var lokasi_form = document.getElementById("lokasi");
var pengalaman_form = document.getElementById("pengalaman");
var email_form = document.getElementById("email");

var attr_value = document.createAttribute("value");
attr_value.value = nama;
nama_form.setAttributeNode(attr_value);

var attr_value = document.createAttribute("value");
attr_value.value = role;
role_form.setAttributeNode(attr_value);

var attr_value = document.createAttribute("value");
attr_value.value = availability;
availability_form.setAttributeNode(attr_value);

var attr_value = document.createAttribute("value");
attr_value.value = usia;
usia_form.setAttributeNode(attr_value);

var attr_value = document.createAttribute("value");
attr_value.value = lokasi;
lokasi_form.setAttributeNode(attr_value);

var attr_value = document.createAttribute("value");
attr_value.value = pengalaman;
pengalaman_form.setAttributeNode(attr_value);

var attr_value = document.createAttribute("value");
attr_value.value = email;
email_form.setAttributeNode(attr_value);

function update(){
    let nama_update = document.getElementById("nama").getAttribute("value");
    console.log(nama_update);
}


