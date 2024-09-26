//"新增"模态对话框"
document.addEventListener("DOMContentLoaded", function() {

  // 打开模态对话框
  const openAdditionModal = document.getElementById("openAdditionModal");
const modal = document.getElementById("additionModal");
const closeAdditionModal = document.getElementById("closeAdditionModal");

openAdditionModal.addEventListener("click", function() {
  modal.style.display = "block";
});

// 关闭模态对话框
closeAdditionModal.addEventListener("click", function() {
  modal.style.display = "none";
});



// 下拉式菜单-选择学院 
const selectElement = document.querySelector('.college');
    
    selectElement.addEventListener('change', function() {
      const selectedOption = selectElement.options[selectElement.selectedIndex];
      selectElement.firstChild.textContent = selectedOption.textContent;
    });

//下拉式菜单-选择专业
    const collegeSelect = document.getElementById('college-select');
    const majorSelect = document.getElementById('major-select');
  
    // 定义各学院对应的专业
    const majorOptions = {
      机械工程学院: ["请选择专业","海洋工程与技术", "机械设计制造及其自动化", "车辆工程"],
      电子信息学院: ["请选择专业","电子科学与技术", "电子信息工程", "电子信息科学与技术", "光电信息科学与工程", "集成电路设计与集成系统"],
      通信工程学院: ["请选择专业","通信工程", "信息工程", "信息对抗技术"],
      自动化学院: ["请选择专业","人工智能", "自动化", "智能科学与技术", "电气工程及其自动化", "测控技术与仪器", "医学信息工程"],
      计算机学院: ["请选择专业","计算机科学与技术", "软件工程"],
      网络空间安全学院: ["请选择专业","网络工程", "信息安全"],
      材料与环境工程学院: ["请选择专业","环境科学", "环境工程", "材料科学与工程"],
      理学院: ["请选择专业","信息与计算科学", "应用物理学", "数学与应用数学", "应用统计学", "光电信息科学与工程"],
      经济学院: ["请选择专业","金融学", "统计学", "国际经济与贸易", "经济统计学", "经济学"],
      管理学院: ["请选择专业","工业工程", "人力资源管理", "保密管理", "信息管理与信息系统", "市场营销", "工业工程", "工商管理", "电子商务", "物流管理"],
      会计学院: ["请选择专业","财务管理", "会计学", "审计学"],
      外国语学院: ["请选择专业","英语", "德语"],
      人文艺术与数字媒体学院: ["请选择专业","数字媒体技术", "传播学", "工业设计", "产品设计", "数字媒体"],
      法学院: ["请选择专业","法学", "社会学", "汉语国际教育"],
      卓越学院: ["请选择专业","理工类实验班", "经管类实验班"],
      圣光机联合学院: ["请选择专业","计算机科学与技术", "自动化"]
    };

    // 更新第二个下拉菜单的选项
    function updatemajorOptions() {
      const selectedCollege = collegeSelect.value;
      const majors = majorOptions[selectedCollege] || [];
  
      // 清空原有选项
      majorSelect.innerHTML = '';
  
      // 添加新选项
      majors.forEach(major => {
        const option = document.createElement('option');
        option.value = major;
        option.textContent = major;
        majorSelect.appendChild(option);
      });
    }
  
    // 监听第一个下拉菜单的选择事件
    collegeSelect.addEventListener('change', updatemajorOptions);
  
    // 初始加载第二个下拉菜单的选项
    updatemajorOptions();

});


//重置函数
function reset() {
  var inputs = document.getElementsByClassName("input-field");
  var selects = document.getElementsByClassName("college");
  
  document.getElementById("grade-select").selectedIndex = 0;
  document.getElementById("major-select").selectedIndex = 0;
 

  // 清空输入框内容
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = "";
  }
 
  // 清除下拉菜单的选择
  for (var i = 0; i < selects.length; i++) {
    selects[i].selectedIndex = 0;
  }
}

//通过取消按钮关闭模态对话框
function cancel() {
  // 获取模态对话框元素
  const cancelmodal = document.querySelector(".modal");

  // 隐藏模态对话框
  cancelmodal.style.display = "none";
}

//合并reset和cancel函数
function resetAndCancel() {
  reset(); // 调用 reset() 函数
  cancel(); // 调用 cancel() 函数
}

//合并addRow和reset函数
function addRowAndReset(){
  addRow();
  reset();
}



//表格的“新增”功能
let rowNum=0;
function addRow() {
// 创建查看按钮元素
const checkButton = document.createElement("check-button");
checkButton.textContent = "查看"; // 设置按钮的文本
checkButton.className = "check-button"; // 可以设置按钮的样式类

//迫不得已用js而不是css改变查看按钮样式

checkButton.style.color = "black";
checkButton.style.border = "none";
checkButton.style.padding = "5px 5px";

// 创建删除按钮元素
const deleteButton = document.createElement("delete-button");
deleteButton.textContent = "删除"; // 设置按钮的文本
deleteButton.className = "delete-button"; // 可以设置按钮的样式类

//迫不得已用js而不是css改变删除按钮样式

deleteButton.style.color = "#d16363";
deleteButton.style.border = "none";
deleteButton.style.padding = "5px 5px";



// 将查看按钮添加到文档
document.body.appendChild(checkButton);

// 将删除按钮添加到文档
document.body.appendChild(deleteButton);


//"查看"模态对话框
const modalContent = `
  <div id="modal" class="modal">
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <table >
  <thead class="schoolTimeTable">
    <tr>
      <th>10月</th>
      <th>一</th>
      <th>二</th>
      <th>三</th>
      <th>四</th>
      <th>五</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td> 1  (8:05-8:50)</td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
    </tr>
    <tr>
      <td> 2  (8:55-9:40)</td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
    </tr>
    <tr>
      <td>3(10:00-10:45)</td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
    </tr>
    <tr>
      <td>4(10:50-11:35)</td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
    </tr>
    <tr>
      <td>5(11:40-12:25)</td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
    </tr>
    <tr>
      <td>6(13:30-14:15)</td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
    </tr>
    <tr>
      <td>7(14:20-15:05)</td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
    </tr>
    <tr>
      <td>8(15:15-16:00)</td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
    </tr>
    <tr>
      <td>9(16:05-16:50)</td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
    </tr>
    <tr>
      <td>10(18:30-19:15)</td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
    </tr>
    <tr>
      <td>11(19:20-20:05)</td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
    </tr>
    <tr>
      <td>12(20:10-20:55)</td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
    </tr>
    <tr>
      <td>13(21:00-21:45)</td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
      <td> </td>
    </tr>
  </tbody>
</table>

    </div>
  </div>
`;



document.body.insertAdjacentHTML('beforeend', modalContent);

// 获取模态对话框元素
const modal = document.getElementById('modal');

// 获取关闭按钮元素
const closeButton = document.querySelector('.close-button');

// 为按钮添加点击事件监听器，打开模态对话框
checkButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

// 为关闭按钮添加点击事件监听器，关闭模态对话框
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});


// 创建复选框和单元格
const checkBox = document.createElement("input");
checkBox.type = "checkbox";
const checkBoxCell = document.createElement("td");
checkBoxCell.appendChild(checkBox);



  // 获取输入框和下拉菜单的值
  
  const inputStudentNumber = document.getElementById("studentNumber").value;
  const inputName = document.getElementById("name").value;
  const selectCollege = document.getElementById("college-select").value;
  const selectMajor = document.getElementById("major-select").value;
  const selectGrade = document.getElementById("grade-select").value;
  const inputClass = document.getElementById("class").value;

  // 获取表格的 <tbody> 元素
  const tableBody = document.getElementById("tableBody");

  // 创建新行和单元格
  const newRow = document.createElement("tr");
  const newCell1 = document.createElement("td");
  const newCell2 = document.createElement("td");
  const newCell3 = document.createElement("td");
  const newCell4 = document.createElement("td");
  const newCell5 = document.createElement("td");
  const newCell6 = document.createElement("td");
  const newCell7 = document.createElement("td");
  const newCell8 = document.createElement("td");
  const newCell9 = document.createElement("td");

  // 设置单元格的文本内容为输入框和下拉菜单的值
  newCell1.textContent = ++rowNum;
  newCell2.textContent = inputStudentNumber;
  newCell3.textContent = inputName;
  newCell4.textContent = selectCollege;
  newCell5.textContent = selectMajor;
  newCell6.textContent = selectGrade;
  newCell7.textContent = inputClass;

  // 将复选框的单元格添加到新行中
  newRow.appendChild(checkBoxCell);

  // 将按钮添加到新行的最后一个单元格
  newCell8.appendChild(checkButton);
  newCell8.appendChild(deleteButton);
  
  // 将单元格添加到新行中
  newRow.appendChild(newCell1);
  newRow.appendChild(newCell2);
  newRow.appendChild(newCell3);
  newRow.appendChild(newCell4);
  newRow.appendChild(newCell5);
  newRow.appendChild(newCell6);
  newRow.appendChild(newCell7);
  newRow.appendChild(newCell8);

  // 将新行添加到表格的 <tbody> 中
  tableBody.appendChild(newRow);

  //交替变换每一行的背景颜色
  if(rowNum%2===0){
    newCell1.style.backgroundColor="rgb(247, 223, 140)";
    newCell2.style.backgroundColor="rgb(247, 223, 140)";
    newCell3.style.backgroundColor="rgb(247, 223, 140)";
    newCell4.style.backgroundColor="rgb(247, 223, 140)";
    newCell5.style.backgroundColor="rgb(247, 223, 140)";
    newCell6.style.backgroundColor="rgb(247, 223, 140)";
    newCell7.style.backgroundColor="rgb(247, 223, 140)";
    newCell8.style.backgroundColor="rgb(247, 223, 140)";
    newCell9.style.backgroundColor="rgb(247, 223, 140)";
    checkButton.style.backgroundColor = "rgb(247, 223, 140)";
    checkBoxCell.style.backgroundColor="rgb(247, 223, 140)";
  }
  else{
    newCell1.style.backgroundColor="rgb(241, 229, 189)";
    newCell2.style.backgroundColor="rgb(241, 229, 189)";
    newCell3.style.backgroundColor="rgb(241, 229, 189)";
    newCell4.style.backgroundColor="rgb(241, 229, 189)";
    newCell5.style.backgroundColor="rgb(241, 229, 189)";
    newCell6.style.backgroundColor="rgb(241, 229, 189)";
    newCell7.style.backgroundColor="rgb(241, 229, 189)";
    newCell8.style.backgroundColor="rgb(241, 229, 189)";
    newCell9.style.backgroundColor="rgb(241, 229, 189)";
    checkButton.style.backgroundColor = "rgb(241, 229, 189)";
    checkBoxCell.style.backgroundColor="rgb(241, 229, 189)";
  }


//实现删除功能
// 获取所有删除按钮
const deleteButtons = document.querySelectorAll('.delete-button');
    
// 添加点击事件监听器到每个删除按钮
deleteButtons.forEach(button => {
  button.addEventListener('click', function () {
      // 找到按钮所在的行
      const row = button.closest('tr');
      // 删除行
      row.remove();
  });
});


//为动态表格添加黑夜模式
newCell1.classList.add("dynamicTable");
newCell2.classList.add("dynamicTable");
newCell3.classList.add("dynamicTable");
newCell4.classList.add("dynamicTable");
newCell5.classList.add("dynamicTable");
newCell6.classList.add("dynamicTable");
newCell7.classList.add("dynamicTable");
newCell8.classList.add("dynamicTable");
newCell9.classList.add("dynamicTable");
checkBoxCell.classList.add("dynamicTable"); 
checkButton.classList.add("dynamicTable");
deleteButton.classList.add("dynamicButton");

}

  // 重置输入框和下拉菜单的值
    function reset() {
    var inputs = document.getElementsByClassName("input-field");
    var selects = document.getElementsByClassName("college");
  
    document.getElementById("grade-select").selectedIndex = 0;
    document.getElementById("major-select").selectedIndex = 0;
 

    // 清空输入框内容
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }

    // 清除下拉菜单的选择
    for (var i = 0; i < selects.length; i++) {
      selects[i].selectedIndex = 0;
    }
  }



//表格复选框
const checkboxes = document.querySelectorAll(".checkbox");
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("click", function () {
    if (checkbox.checked) {
      // 复选框被选中，可以执行相应的操作
      console.log("复选框被选中");
    } else {
      // 复选框被取消选中，可以执行相应的操作
      console.log("复选框被取消选中");
    }
  });
});


//实现查询功能
document.addEventListener("DOMContentLoaded", function () {

 // 获取输入框和按钮的引用
 var inputNumber = document.getElementById("inputNumber");
 var inquiryButton = document.getElementById("inquiryButton");
 
 // 监听按钮点击事件
 inquiryButton.addEventListener("click", function() {
   // 获取输入框中的序号值
   var searchValue = inputNumber.value;
 
   // 获取表格中的所有行（除了第一行表头）
   var rows = document.querySelectorAll("#table tr:not(:first-child)");
 
   // 遍历每一行
   for (var i = 0; i < rows.length; i++) {
     var row = rows[i];
     var cells = row.getElementsByTagName("td");
 
     // 获取当前行的序号值
     var rowValue = cells[2].textContent;  // 学号在每一行第三个单元格中

     // 检查是否是第二行或者匹配的行
    if (rowValue === searchValue) {
      // 显示匹配的行
      row.style.display = "";
    } else {
      // 隐藏不匹配的行
      row.style.display = "none";
    }
 
   }
 });
 

});


//深浅色模式切换

document.addEventListener("DOMContentLoaded", function () {
  const darkModeButton = document.getElementById('darkModeButton');
  const table = document.getElementById('table');
  const body = document.body;
  
  let isDarkMode = false;
  
  darkModeButton.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
  
    if (isDarkMode) {
      body.classList.add('dark-mode');
      tablehead.classList.add('dark-mode');
      
      darkModeButton.textContent = '深色模式';
      darkModeButton.style.backgroundColor="#888";
      darkModeButton.style.color="white";
      
    } else {
      body.classList.remove('dark-mode');
      tablehead.classList.remove('dark-mode');
     
      darkModeButton.textContent = '浅色模式';
      darkModeButton.style.backgroundColor="#fbaf2d";
      darkModeButton.style.color="black";
    }
  });
});