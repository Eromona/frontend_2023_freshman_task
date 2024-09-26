
let btnnew=document.querySelector("#new");
/*function newdate(){
    let myline = prompt("请输入序号");
    let myxh = prompt("请输入你的学号");
    let myname = prompt("请输入你的姓名");
    let myschool = prompt("请输入你的学院");
    let mystudy  = prompt("请输入你的专业");
    let mylevel = prompt("请输入你的年级");
    let myclass = prompt("请输入你的班级");
    let myage = prompt("请输入你的年龄");
    let table = document.querySelector("table");
    let newrow = table.insertRow();
    let cellcheck = newrow.insertCell();  
    let checkbox = document.createElement("input");  // 创建一个复选框
    checkbox.type = "checkbox";  // 设置复选框类型为复选框
    cellcheck.appendChild(checkbox);  // 将复选框添加到单元格中

    let cellline = newrow.insertCell();
    let cellxh = newrow.insertCell();
    let cellname = newrow.insertCell();
    let cellschool = newrow.insertCell();
    let cellstudy = newrow.insertCell();
    let celllevel = newrow.insertCell();
    let cellclass = newrow.insertCell();
    let cellage = newrow.insertCell();
    let celllook = newrow.insertCell();
    let cellreview = newrow.insertCell();
    cellline.innerHTML = myline;
    cellxh.innerHTML = myxh;
    cellname.innerHTML = myname;
    cellschool.innerHTML = myschool;
    cellstudy.innerHTML = mystudy;
    celllevel.innerHTML = mylevel;
    cellclass.innerHTML = myclass;
    cellage.innerHTML = myage;
    celllook.innerHTML = "查看";
    cellreview.innerHTML = "修改";
}*/
function addTmplFile() {
    /*let page1 = document.getElementById("page1").style;
    page1.display = "none";*/
    document.getElementById("addname").innerHTML="新增同学信息";
    let page2 = document.getElementById("page2").style;
    page2.display = "block";
    let totalbg = document.getElementById("totalBackground").style;
    totalbg.display = "block";

    document.getElementById("submit1").style.display = "block";
    document.getElementById("submit2").style.display = "none";
    document.getElementById("name").value = null;
    document.getElementById("study").value = null;
    document.getElementById("class1").value = null;
    document.getElementById("number").value = null;
    document.getElementById("studynumber").value = null;
    document.getElementById("grade").value = null;
    document.getElementById("age").value = null;
    document.getElementById("school").value = null;

}
function submit1(){
    let name = document.getElementById("name").value;
    let study = document.getElementById("study").value;
    let number = document.getElementById("number").value;
    let studynumber = document.getElementById("studynumber").value;
    let class1 = document.getElementById("class1").value;
    let school = document.getElementById("school").value;
    let grade = document.getElementById("grade").value;
    let age = document.getElementById("age").value;
    name = document.createTextNode(name);
    age = document.createTextNode(age);
    study = document.createTextNode(study);
    class1 = document.createTextNode(class1);
    number = document.createTextNode(number);
    studynumber = document.createTextNode(studynumber);
    school = document.createTextNode(school);
    grade = document.createTextNode(grade);
    let tr = document.createElement("tr");
    let td9 = document.createElement("td");
    let checkbox1 = document.createElement("input");
    checkbox1.type = "checkbox";
    td9.appendChild(checkbox1);
    let td1 = document.createElement("td");
    td1.appendChild(name);
    let td2 = document.createElement("td");
    td2.appendChild(studynumber);
    let td3 = document.createElement("td");
    td3.appendChild(study);
    let td4 = document.createElement("td");
    td4.appendChild(age);
    let td5 = document.createElement("td");
    td5.appendChild(grade);
    let td6 = document.createElement("td");
    td6.appendChild(class1);
    let td7 = document.createElement("td");
    td7.appendChild(school);
    let td8 = document.createElement("td");
    td8.appendChild(number);
    let td10 = document.createElement("td");
    td10.style.textAlign = "center";
    let td11 = document.createElement("td");
    td11.style.textAlign = "center";
    var input1 = document.createElement('input');
    var input2 = document.createElement('input');
    input1.setAttribute('type','button');
    input1.setAttribute('value','查看');
    input1.setAttribute('onclick','look(this)');
    input1.id = 'btn1';
    input2.setAttribute('type','button');
    input2.setAttribute('onclick','modify(this)');
    input2.setAttribute('value','修改');
    //input2.setAttribute('onclick','modify(this)');
    input2.id = 'btn2';
    td10.appendChild(input1);
    td11.appendChild(input2);
    let table = document.getElementById("table1");
    table.appendChild(tr);
    tr.appendChild(td9);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);
    tr.appendChild(td8);
    tr.appendChild(td10);
    tr.appendChild(td11);

    let totalbg = document.getElementById("totalBackground").style;
    totalbg.display = "none";
    let page2 = document.getElementById("page2").style;
    page2.display = "none";
}

let table=document.querySelector("table");
let btndel=document.querySelector("#del");
btndel.onclick = function(){
    table.deleteRow(table.rows.length-1);
}
function modify(obj){
    document.getElementById("addname").innerHTML="修改信息";
    let totalbg = document.getElementById("totalBackground").style;
    totalbg.display = "block";
    let page2 = document.getElementById("page2").style;
    page2.display = "block";
    document.getElementById("submit1").style.display = "none";
    document.getElementById("submit2").style.display = "block";
    cortr = obj.parentNode.parentNode;
    cortd = cortr.getElementsByTagName('td');
    let name = document.getElementById("name").value = cortd[1].innerText;
    let study = document.getElementById("study").value = cortd[2].innerText;
    let studynumber = document.getElementById("studynumber").value = cortd[3].innerText;
    let grade = document.getElementById("grade").value = cortd[4].innerText;
    let age = document.getElementById("age").value = cortd[5].innerText;
    let class1 = document.getElementById("class1").value = cortd[6].innerText;
    let school = document.getElementById("school").value = cortd[7].innerText;
    let number = document.getElementById("number").value = cortd[8].innerText;

}
function submit2(){
    let totalbg = document.getElementById("totalBackground").style;
    totalbg.display = "none";
    let page2 = document.getElementById("page2").style;
    page2.display = "none";
    cortd[1].innerText = document.getElementById("name").value;
    cortd[2].innerText = document.getElementById("study").value;
    cortd[3].innerText = document.getElementById("studynumber").value;
    cortd[4].innerText = document.getElementById("grade").value;
    cortd[5].innerText = document.getElementById("age").value;
    cortd[6].innerText = document.getElementById("class1").value;
    cortd[7].innerText = document.getElementById("school").value;
    cortd[8].innerText = document.getElementById("number").value;
    
}
function look(obj){
    document.getElementById("addname").innerHTML="查看信息";
    let totalbg = document.getElementById("totalBackground").style;
    totalbg.display = "block";
    let page2 = document.getElementById("page2").style;
    page2.display = "block";
    document.getElementById("submit1").style.display = "none";
    document.getElementById("submit2").style.display = "none";
    document.getElementById("submit3").style.display = "block";
    cortr = obj.parentNode.parentNode;
    cortd = cortr.getElementsByTagName('td');
    let name = document.getElementById("name").value = cortd[1].innerText;
    let study = document.getElementById("study").value = cortd[2].innerText;
    let studynumber = document.getElementById("studynumber").value = cortd[3].innerText;
    let grade = document.getElementById("grade").value = cortd[4].innerText;
    let age = document.getElementById("age").value = cortd[5].innerText;
    let class1 = document.getElementById("class1").value = cortd[6].innerText;
    let school = document.getElementById("school").value = cortd[7].innerText;
    let number = document.getElementById("number").value = cortd[8].innerText;

}
function cancel(){
    let totalbg = document.getElementById("totalBackground").style;
    totalbg.display = "none";
    let page2 = document.getElementById("page2").style;
    page2.display = "none";
}
