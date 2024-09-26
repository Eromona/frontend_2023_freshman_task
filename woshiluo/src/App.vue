<script setup>
import { ref } from 'vue';

import StuentList from './components/student-list.vue';

const students = ref(JSON.parse(localStorage.getItem('students')));

const toggle_student = (idx) => {
	students.value[idx].checked = !students.value[idx].checked;
};

const delete_student = () => {
	let list = [];
	for (const idx in students.value) {
		if (!students.value[idx].checked) list.push(students.value[idx]);
	}
	students.value = list;
};
</script>

<template>
	<h1 class="title main-title">学生信息管理系统</h1>
	<div class="main-table">
		<StuentList
			:data="students"
			@toggle="toggle_student"
			@delete="delete_student"
		></StuentList>
	</div>
</template>

<style scoped>
.title {
	text-align: center;
	margin-top: 8vh;
	margin-bottom: 4vh;
}

.main-table {
	margin-left: auto;
	margin-right: auto;
	border-radius: 0.1em;
	width: 96vw;
}
</style>
