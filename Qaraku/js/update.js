//update.js文件实现修改界面的修改和保存button

// 修改按钮；通过style.display来实现
function update(obj) {
    // 打开修改框架：通过style.display来实现
    document.getElementById('updateBlock').style.display = 'block';
    document.getElementById('totalBackground').style.display = 'block';

    // 获取当前行
    var iTr = obj.parentNode.parentNode;

    // 获取当前行中的所有单元格
    iTds = iTr.getElementsByTagName('td');

    // 将新增框架中的输入框中内容设为当前行对应的内容//即为重新读取
    document.getElementById('stuId2').value = iTds[2].innerText;
    document.getElementById('name2').value = iTds[3].innerText;
    document.getElementById('colg2').value = iTds[4].innerText;
    document.getElementById('profession2').value = iTds[5].innerText;
    document.getElementById('grade2').value = iTds[6].innerText;
    document.getElementById('stuClass2').value = iTds[7].innerText;
    document.getElementById('age2').value = iTds[8].innerText;
}

// 保存按钮
function preservation() {
    // 将新内容写入
    iTds[2].innerText = document.getElementById('stuId2').value;
    iTds[3].innerText = document.getElementById('name2').value;
    iTds[4].innerText = document.getElementById('colg2').value;
    iTds[5].innerText = document.getElementById('profession2').value;
    iTds[6].innerText = document.getElementById('grade2').value;
    iTds[7].innerText = document.getElementById('stuClass2').value;
    iTds[8].innerText = document.getElementById('age2').value;
    // 关闭修改框架
    document.getElementById('updateBlock').style.display = 'none';
    document.getElementById('totalBackground').style.display = 'none';
}

// 修改中的取消按钮
function updateCancel() {
    // 关闭修改框架
    document.getElementById('updateBlock').style.display = 'none';
    document.getElementById('totalBackground').style.display = 'none';
}
