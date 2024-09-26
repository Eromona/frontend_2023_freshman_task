<script setup>
import { NSpace, NSpin, NButton, NDataTable } from 'naive-ui';
import { h, ref, inject, onMounted } from 'vue';

/**
 * 
 * @param {Object} onDeleteRowClick 
 * @param {Object} onModifyRowClick 
 */
const createColumns = (onDeleteRowClick, onModifyRowClick) => [
    {
        type: "selection",
    }, {
        title: "Index",
        key: "key",
        render(row) {
            return h("span", row.key + 1);
        }
    }, {
        title: "Username",
        key: "username"
    }, {
        title: "Password",
        key: "password"
    }, {
        title: "Email",
        key: "email"
    }, {
        title: "First Name",
        key: "firstName"
    }, {
        title: "Last Name",
        key: "lastName"
    }, {
        title: "Age",
        key: "age"
    }, {
        title: "Gender",
        key: "gender"
    }, {
        title: "Height",
        key: "height"
    }, {
        title: "Weight",
        key: "weight"
    }, {
        title: "Action",
        key: "action",
        render(row) {
            return h(NSpace, null, [h(
                NButton,
                {
                    strong: true,
                    tertiary: true,
                    type: "primary",
                    onClick: () => onModifyRowClick(row)
                },
                { default: () => "Modify" }
            ), h(
                NButton,
                {
                    strong: true,
                    tertiary: true,
                    type: "error",
                    onClick: () => onDeleteRowClick(row)
                },
                { default: () => "Delete" }
            )
            ])
        }
    }
];

const checkedRowKeysRef = ref([]);
const spinShow = ref(true);
const { data, editModelData, showModal, initModel: initModal } = inject("datas");
console.log("initModel!!!")
console.log(initModal)

/**
 * Delete selected values for both remote and local. Then update index.
 */
function onDeleteClick() {
    checkedRowKeysRef.value.forEach(key => {
        fetch(`https://dummyjson.com/users/${data.value[key].id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(console.log);
    })
    data.value = data.value.filter(ele => !checkedRowKeysRef.value.includes(ele.key));
    checkedRowKeysRef.value = []
    data.value.forEach((ele, index) => ele.key = index);
}

/**
 * show a modal
 */
function onAddRowClick() {
    initModal("add");
    showModal.value = true;
    editModelData.value = {
        key: 0,
        username: "",
        password: "",
        email: "",
        firstName: "",
        lastName: "",
        age: 0,
        gender: "",
        height: 0,
        weight: 0,
        id: data.value.length,
    };
}

function onDeleteRowClick(row) {
    fetch(`https://dummyjson.com/users/${row.key}`, {
        method: 'DELETE',
    })
        .then(res => res.json())
        .then(console.log);
    data.value = data.value.filter(ele => ele.key != row.key);
    checkedRowKeysRef.value = checkedRowKeysRef.value.filter(ele => ele != row.key);
    data.value.forEach((ele, index) => ele.key = index);
}
function onModifyRowClick(row) {
    initModal("edit");
    showModal.value = true;
    editModelData.value = { ...row };
}
function rowKey(row) {
    return row.key;
}
function handleCheck(rowKeys) {
    checkedRowKeysRef.value = rowKeys;
}
const columns = createColumns(onDeleteRowClick, onModifyRowClick);
function rowClassName(row) {
    if (row.key % 2) {
        return 'odd-line';
    }
    return 'even-line'
}


onMounted(() => {
    fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(res => {
            console.log(res);
            res.users.forEach((element, index) => {
                data.value.push({
                    id: element.id,
                    key: index,
                    username: element.username,
                    password: element.password,
                    email: element.email,
                    firstName: element.firstName,
                    lastName: element.lastName,
                    age: element.age,
                    gender: element.gender,
                    height: element.height,
                    weight: element.weight
                });
            });
            spinShow.value = false;
        });
});

</script>

<template>
    <n-space class="mb-3 animate__animated animate__fadeIn animate__delay-1s">
        <n-button size="large" type="primary" @click="onAddRowClick">Add</n-button>
        <n-button size="large" type="error" @click="onDeleteClick">Delete</n-button>
    </n-space>
    <n-spin :show="spinShow">
        <n-data-table class="animate__animated animate__fadeIn animate__delay-1s" :row-key="rowKey" :columns="columns"
            :data="data" :pagination="{
                pageSize: 10
            }" :row-class-name="rowClassName" @update:checked-row-keys="handleCheck"
            :checked-row-keys="checkedRowKeysRef" :bordered="false" />
    </n-spin>
</template>

<style scoped>
:deep(.odd-line td) {
    background-color: rgba(244, 255, 254, 0.75);
}
</style>
