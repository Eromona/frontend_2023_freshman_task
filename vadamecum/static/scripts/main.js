const selectAll = document.querySelector("#select-all");

// 监听change事件
selectAll.addEventListener('change', (e) => {
    // 获取所有选择框
    const items = document.querySelectorAll("input[type=checkbox]");

    // 设置checked状态
    items.forEach(item => {
        item.checked = e.target.checked;
    })
})


