
// 新增按钮
const btn_add = document.querySelector('.btn-add')
const info = document.querySelector('.info')
btn_add.addEventListener('click', function () {
    info.style.visibility = 'visible'
})
//取消按钮
// const info_btn_cancel = document.querySelector('.info-button-cancel')
// info_btn_cancel.addEventListener('click', function () {
//     info.style.visibility = 'hidden'
// })


const tbody = document.querySelector('tbody')
const info_main = document.querySelector('.info-main')
//新增信息
const arr = []
const info_btn_submit = document.querySelector('.info-button-submit')
info_btn_submit.addEventListener('click', function (e) {
    // info_main.addEventListener('submit', function (e) {
    e.preventDefault()
    const num2 = document.querySelector('.num2')
    const uname = document.querySelector('.uname')
    const xy = document.querySelector('.xy')
    const zy = document.querySelector('.zy')
    const grade = document.querySelector('.grade')
    const class1 = document.querySelector('.class1')
    const age = document.querySelector('.age')
    //表单验证
    //获取所有带有name属性的元素
    // const items = document.querySelectorAll('[name]')
    // // console.log(items);

    // for (let i = 0; i < items.length; i++) {
    //     if (items[i].value === '') {
    //         return alert('输入内容不能为空')
    //     }
    // }

    const obj = {
        stuId: arr.length + 1,
        num2: num2.value,
        uname: uname.value,
        xy: xy.value,
        zy: zy.value,
        grade: grade.value,
        class1: class1.value,
        age: age.value,

    }
    arr.push(obj)
    // stuId.value = ''
    num2.value = ''
    uname.value = ''
    xy.value = ''
    zy.value = ''
    grade.value = ''
    class1.value = ''
    age.value = ''
    console.log(arr);
    render()
    info.style.visibility = 'hidden'

    // })
})
// info_main.addEventListener('submit', function (e) {
//     e.preventDefault()
//     const num2 = document.querySelector('.num2')
//     const uname = document.querySelector('.uname')
//     const xy = document.querySelector('.xy')
//     const zy = document.querySelector('.zy')
//     const grade = document.querySelector('.grade')
//     const class1 = document.querySelector('.class1')
//     const age = document.querySelector('.age')

//     const obj = {
//         stuId: arr.length + 1,
//         num2: num2.value,
//         uname: uname.value,
//         xy: xy.value,
//         zy: zy.value,
//         grade: grade.value,
//         class1: class1.value,
//         age: age.value,

//     }
//     arr.push(obj)
//     num2.value = ''
//     uname.value = ''
//     xy.value = ''
//     zy.value = ''
//     grade.value = ''
//     class1.value = ''
//     age.value = ''
//     // console.log(arr);
//     render()

// })
function render() {
    tbody.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <th><input type="checkbox" class="check-sg"></th>
        <th>${arr[i].stuId}</th>
        <th>${arr[i].num2}</th>
        <th>${arr[i].uname}</th>
        <th>${arr[i].xy}</th>
        <th>${arr[i].zy}</th>
        <th>${arr[i].grade}</th>
        <th>${arr[i].class1}</th>
        <th>${arr[i].age}</th>
        <th>
            <a href="javascript:">查看</a>
            <a href="javascript:" data-id=${i}>删除</a>
        </th>
        `
        if (i % 2 === 1) {
            tr.classList.add('tr1')
        }
        else {
            tr.classList.add('tr2')
        }
        tbody.appendChild(tr)
    }
}


//删除操作:最右侧操作
tbody.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        if (e.target.textContent === '删除') {
            // console.log(e.target);
            // console.log(e.target.dataset.id);
            arr.splice(e.target.dataset.id, 1);
            // console.log(arr);
            render();
        }
    }
})
//删除操作:最左侧操作
// 当点击 tr 中的第一个 input 时
const dataId1 = 0
tbody.addEventListener('click', function (e) {
    if (e.target.tagName === 'INPUT' && e.target.classList.contains('check-sg')) {
        // 获取与 input 相关的 tr
        const tr = e.target.closest('tr');

        // 从 tr 中获取 “删除” 链接的 data-id
        const deleteLink = tr.querySelector('a[data-id]');
        if (deleteLink) {
            const dataId = deleteLink.getAttribute('data-id');
            // console.log(dataId);
            dataId1 = dataId
        }
    }
});

//删除按钮
const btn_delete = document.querySelector('.btn-delete')
btn_delete.addEventListener('click', function () {
    arr.splice(dataId1, 1)
    render()
})

//全选
const checkAll = document.querySelector('.check-all')
const cks = document.querySelectorAll('.check-sg')
checkAll.addEventListener('change', function () {
    for (let i = 0; i < cks.length; i++) {
        cks[i].checked = checkAll.checked
    }
})
//反选
for (let i = 0; i < cks.length; i++) {
    cks[i].addEventListener('click', function () {
        checkAll.checked = document.querySelectorAll('.check-sg:checked').length === cks.length
    })
}

//查看学生信息
const examine = document.querySelector('#examineCancel')
const examineBlock = document.querySelector('#examineBlock')
examine.addEventListener('click', function () {
    examineBlock.style.display = 'none'
})
//点击查看按钮
tbody.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        if (e.target.textContent === '查看') {
            // console.log(e.target);
            // console.log(e.target.dataset.id);
            // arr.splice(e.target.dataset.id, 1);
            // console.log(arr);
            // render();
            // console.log(e.target.textContent);
            examineBlock.style.display = 'block'


        }
    }
})