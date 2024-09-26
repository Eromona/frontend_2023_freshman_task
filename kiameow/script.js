if(!localStorage.getItem('start')){
  localStorage.setItem('start', 0);
}
if(!localStorage.getItem('colorMode')){
  localStorage.setItem('colorMode', 'light');
}

function clearData() {
  document.querySelector("tbody").innerHTML = "";
}

function fetchData() {
  // const bodyElement = document.querySelector('body');
  // bodyElement.style.transition = 'opacity qs ease-in-out';
  // bodyElement.style.opacity = 0;
  console.log("fetch");
  fetch("./data.json")
  .then(response => response.json())
  .then(json => {
    var length = json.length;
    var start = parseInt(localStorage.getItem('start'));
    if(start > length) {
      localStorage.setItem('start', 0);
    }
    var quantity = parseInt(localStorage.getItem('quantity'));
    var pageNum = Math.floor(start / quantity) + 1;
    var end = start+quantity;
    document.querySelector("#bottom-info").innerHTML = `第${pageNum}页,共${length}条(每页显示${quantity}条)`;

    for(let i=start; i<end && i<length; i++) {
      addRow(json.students[i]);
    }

    buttonInit(pageNum, length, quantity);
  })
  // bodyElement.style.opacity = 1;
}

function buttonInit(pageNum, length, quantity) {
  if(pageNum <= 1) {
    offButton('prev');
  } else {
    onButton('prev');
  }

  if(pageNum >= Math.floor(length/quantity)+1) {
    offButton('next');
  } else {
    onButton('next');
  }
}

function onButton(button_id){
  var button = document.getElementById(`${button_id}`);
  button.disabled = false;
}

function offButton(button_id){
  var button = document.getElementById(`${button_id}`);
  button.disabled = true;
}

function addRow(student) {
  const trElement = document.createElement('tr');

  const tdCheckbox = document.createElement('td');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.name = 'selected_id';
  checkbox.value = student.id;
  checkbox.className = 'select';
  tdCheckbox.appendChild(checkbox);
  trElement.appendChild(tdCheckbox);

  const tdElements = ['id', 'number', 'name', 'college', 'major', 'grade', 'class', 'age'];
  tdElements.forEach((prop) => {
    const td = document.createElement('td');
    td.textContent = student[prop];
    trElement.appendChild(td);
  });

  const tdButtons = document.createElement('td');
  const viewButton = document.createElement('button');
  viewButton.className = 'check';
  viewButton.textContent = '查看';
  const changeButton = document.createElement('button');
  changeButton.className = 'change';
  changeButton.textContent = '修改';
  tdButtons.appendChild(viewButton);
  tdButtons.appendChild(changeButton);
  trElement.appendChild(tdButtons);

  document.querySelector('tbody').appendChild(trElement);
}


function checkRow(check_button) {
  // element is the button whose class is "check"
  const dialog = document.querySelector("#check-dialog");
  
  const row = check_button.parentNode.parentNode;
  // console.log(row);
  const rowChildren = row.children;
  const checkDialogList = document.querySelector("#check-dialog-list");
  checkDialogList.innerHTML = "";
  const label = document.querySelector("#head-row");
  const labelChildren = label.children;
  for(let i=2; i<rowChildren.length-1; i++) {
    // console.log(children[i].innerHTML);
    let liElement = document.createElement('li');
    liElement.innerHTML = `${labelChildren[i].innerHTML}: ${rowChildren[i].innerHTML}`;
    checkDialogList.appendChild(liElement);
  }
  dialog.showModal();
}

function changeRow(change_button) {
  const dialog = document.querySelector("#change-dialog");
  const row = change_button.parentNode.parentNode;
  const rowChildren = row.children;
  
  const numberInput = dialog.querySelector("input#number");
  const nameInput = dialog.querySelector("input#name");
  const gradeInput = dialog.querySelector("input#grade");
  const classInput = dialog.querySelector("input#class");
  const ageInput = dialog.querySelector("input#age");

  numberInput.setAttribute('placeholder', rowChildren[2].innerHTML);
  nameInput.setAttribute('placeholder', rowChildren[3].innerHTML);
  gradeInput.setAttribute('placeholder', rowChildren[6].innerHTML);
  classInput.setAttribute('placeholder', rowChildren[7].innerHTML);
  ageInput.setAttribute('placeholder', rowChildren[8].innerHTML);



  const majorSelect = dialog.querySelector("select#majors");
  const majorOptions = majorSelect.children;
  Array.from(majorOptions).forEach(option => {
    if(option.innerHTML === rowChildren[5].innerHTML) {
      option.setAttribute("selected", "selected");
    } else {
      option.removeAttribute("selected");
    }
  })

  dialog.showModal();
}

function addNewRow() {
  // element is the button whose class is "check"
  const dialog = document.querySelector("#add-dialog");
  const label = document.querySelector("#head-row");
  const labelChildren = label.children;
  for(let i=1; i<labelChildren.length-1; i++) {
    // console.log(children[i].innerHTML);
    let liElement = document.createElement('li');
    liElement.innerHTML = `${labelChildren[i].innerHTML}: `;
    
  }
  dialog.showModal();
}

function updateDisplayDelete(select, delete_value) {
  if(select.checked) {
    select.parentNode.parentNode.className = "selected";
    delete_value.push(parseInt(select.value));
  } else {
    select.parentNode.parentNode.className = "";
    const index = delete_value.indexOf(parseInt(select.value));
    if(index != -1) {
      delete_value.splice(index, 1);
    }
  }
  const deleteBtn = document.querySelector("#delete");
  if(delete_value.length > 0) {
    deleteBtn.disabled = false;
  } else {
    deleteBtn.disabled = true;
  }
  console.log(delete_value);
}

function selectToggle(select_toggle, delete_value) {
  const selects = document.querySelectorAll('.select');
  selects.forEach(select => {
    if(select.checked === select_toggle.checked) {
      return;
    }
    select.checked = select_toggle.checked;
    updateDisplayDelete(select, delete_value);
  });
}

function deleteRows(delete_value) {
  // post delete_value
  const deleteDialog = document.querySelector("#delete-dialog");
  const deleteInfo = deleteDialog.querySelector("p");
  deleteInfo.innerHTML = `你确定要删除序号为${delete_value}的行吗？` 
  deleteDialog.showModal();
  return;
}

function resetSelect(delete_value) {
  const select_toggle = document.querySelector("#select-toggle");
  select_toggle.checked = false;
  selectToggle(select_toggle, delete_value);
}

document.addEventListener("DOMContentLoaded", () => {

  fetchData();
  
  const htmlElement = document.querySelector("html");
  // const colorMode = htmlElement.getAttribute("color-mode");
  const prevColorMode = localStorage.getItem('colorMode');
  htmlElement.setAttribute('color-mode', prevColorMode);

  document.querySelector("#prev").onclick = () => {
    var start = parseInt(localStorage.getItem('start'));
    var quantity = parseInt(localStorage.getItem('quantity'));
    start = start - quantity;
    localStorage.setItem('start', start);
    
    resetSelect(delete_value);
    clearData();
    fetchData();
  }
  
  document.querySelector("#next").onclick = () => {
    var start = parseInt(localStorage.getItem('start'));
    var quantity = parseInt(localStorage.getItem('quantity'));
    start = start + quantity;
    localStorage.setItem('start', start);
    
    resetSelect(delete_value);
    clearData();
    fetchData();
  }

  document.querySelector("#color-mode").onclick = () => {
    const colorMode = htmlElement.getAttribute('color-mode');
    if(colorMode === 'light') {
      htmlElement.setAttribute('color-mode', 'dark');
      localStorage.setItem('colorMode', 'dark');
    } else {
      htmlElement.setAttribute('color-mode', 'light');
      localStorage.setItem('colorMode', 'light');
    }
  }

  const delete_value = [];
  document.addEventListener('click', event => {
    var element = event.target;
    if(element.className === 'check') {
      checkRow(element);
    } else if(element.className === 'change') {
      const changeDialog = document.querySelector("#change-dialog");
      const row = element.parentNode.parentNode;
      const rowChildren = row.children;
      const collegeSelect = changeDialog.querySelector("#colleges");
      const collegeOptions = collegeSelect.children;
      Array.from(collegeOptions).forEach(option => {
        if(option.innerHTML === rowChildren[4].innerHTML) {
          option.setAttribute("selected", "selected");
        } else {
          option.removeAttribute("selected");
        }
      })
      populateMajors(collegeSelect);
      changeRow(element);
      // populateMajors(collegeSelect);
    } else if(element.className === 'select') {
      updateDisplayDelete(element, delete_value);
    } else if(element.id === 'select-toggle') {
      selectToggle(element, delete_value);
    } else if(element.id === "delete") {
      deleteRows(delete_value);
      // resetSelect(delete_value);
    } else if(element.id === "delete-confirm") {
      resetSelect(delete_value);
    } else if(element.id === "add") {
      const addDialog = document.querySelector("#add-dialog");
      const collegeSelect = addDialog.querySelector("#colleges");
      addNewRow();
      populateMajors(collegeSelect);
    } 
  })

  const collegeSelects = document.getElementsByClassName('colleges');

  const majorsByCollege = {
      JSJ: ['软件工程', '计算机科学与工程'],
      ZDH: ['自动化','机器人'],
      RGZN: ['人工智能','大数据'],
      WLAQ: ['信息安全','密码科学与技术','网络工程'],
      JX: ['车辆工程','工业设计','材料工程']
  };

  function populateMajors(collegeSelect) {
    const selectedCollege = collegeSelect.value;
    const formElement = collegeSelect.parentNode;
    const majorSelect = formElement.querySelector("select#majors");
    majorSelect.innerHTML = ''; // 清空专业下拉菜单
    majorsByCollege[selectedCollege].forEach(function(major) {
        const option = document.createElement('option');
        option.value = major;
        option.textContent = major;
        majorSelect.appendChild(option); // 添加专业选项到下拉菜单
    });
  }
  // 监听学院选择事件
  Array.from(collegeSelects).forEach(collegeSelect => {
    collegeSelect.addEventListener('change', () => {  // collegeSelect.addEventListener("change", populateMajors(collegeSelect)); wrong
      populateMajors(collegeSelect);
    });
  })

  // not working...?
  // document.querySelectorAll('#add').forEach(function(button) {
  //   button.onclick = () => {
  //     alert("add");
  //   }
  // }) 

  // document.querySelectorAll('.change').forEach(function(button) {
  //   button.onclick = () => {
  //     alert("change");
  //   }
  // }) 
})