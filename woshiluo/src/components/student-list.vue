<script setup>
import { ref, toRaw } from 'vue';

import Student from './student.vue';
import StudentDialog from './student-dialog.vue';

const props = defineProps({ data: Array });
const emit = defineEmits(['edit', 'delete', 'toggle']);

const pages = ref(1);
const PAGE_MAX = 20;

const page_vaild = (offset) => {
	if (
		pages.value + offset < 1 ||
		pages.value + offset > Math.ceil((1.0 * props.data.length) / PAGE_MAX)
	)
		return false;
	return true;
};
const page_add = (offset) => {
	pages.value += offset;
};
const check_display = (idx) => {
	return (pages.value - 1) * PAGE_MAX <= idx && idx < pages.value * PAGE_MAX;
};
const toggle_student = (idx) => {
	emit('toggle', idx);
};
const delete_student = () => {
	emit('delete');
};
const save_student = () => {
	localStorage.setItem('students', JSON.stringify(props.data));
};

const dialogs = ref([]);

const push_dialog = (idx, title, editable) => {
	dialogs.value.push({
		id: idx,
		title: title + props.data[idx].name,
		editable: editable,
		student: toRaw(props.data[idx])
	});
};

const push_edit = (idx) => {
	push_dialog(idx, '编辑 ', true);
};

const push_view = (idx) => {
	push_dialog(idx, '查看 ', false);
};

const destory_dialog = (idx) => {
	dialogs.value.splice(idx, 1);
};

const add_student = () => {
	dialogs.value.push({
		id: -1,
		title: '添加用户',
		editable: true,
		student: {}
	});
};

const update_student = (
	id,
	student_id,
	name,
	college,
	major,
	year,
	class_id,
	old
) => {
	const student = {
		student_id: student_id,
		name: name,
		college: college,
		major: major,
		year: year,
		class_id: class_id,
		old: old
	};
	if (id >= 0) props.data[id] = student;
	else props.data.push(student);
};
</script>

<template>
	<div class="main">
		<table class="table">
			<thead class="table-header">
				<tr class="table-row">
					<th class="table-cell table-checkbox"></th>
					<th class="table-cell">#</th>
					<th class="table-cell">学号</th>
					<th class="table-cell">姓名</th>
					<th class="table-cell">学院</th>
					<th class="table-cell">专业</th>
					<th class="table-cell">年级</th>
					<th class="table-cell">班级</th>
					<th class="table-cell">年龄</th>
					<th class="table-cell">操作</th>
				</tr>
			</thead>
			<tbody class="table-body">
				<template v-for="(student, idx) in data">
					<Student
						:id="idx"
						:key="idx"
						@edit="push_edit(idx)"
						@view="push_view(idx)"
						@toggle="toggle_student"
						v-if="check_display(idx)"
						v-bind="student"
					></Student>
				</template>
			</tbody>
		</table>
	</div>
	<div class="student-control">
		共 {{ Math.ceil((1.0 * props.data.length) / PAGE_MAX) }} 页（每页
		{{ PAGE_MAX }} 条，共 {{ data.length }} 条）
		<button
			class="control control-button control-save"
			@click="save_student"
		>
			保存
		</button>
		<button
			class="control control-button control-delete"
			@click="delete_student"
		>
			删除
		</button>
		<button class="control control-button control-add" @click="add_student">
			添加
		</button>
	</div>
	<div class="table-control">
		<button
			class="control control-button control-left"
			:class="{ 'control-disable': !page_vaild(-1) }"
			@click="page_add(-1)"
		>
			&lt;
		</button>
		<span class="control control-text">{{ pages }}</span>
		<button
			class="control control-button control-right"
			:class="{ 'control-disable': !page_vaild(1) }"
			@click="page_add(1)"
		>
			&gt;
		</button>
	</div>

	<div class="dialog-set">
		<template v-for="(dialog, idx) in dialogs">
			<component
				:is="StudentDialog"
				v-bind="dialog"
				@submit="update_student"
				@destory="destory_dialog(idx)"
			></component>
		</template>
	</div>
</template>

<style scoped>
.main {
	height: 60em;
	overflow: scroll;
}

.table {
	width: calc(100% - 1em);
	margin-left: auto;
	margin-right: auto;
	padding: 0;
	border-spacing: 0;
	border-radius: 0.1em;
	overflow: hidden;
	max-height: 100%;
	box-shadow:
		rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
		rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
		rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}
.table-header {
	background-color: #00695c;
	color: #fff;
}

.table-body {
	background-color: #fff;
}

.table-body > .table-row:nth-child(even) {
	background-color: #e0f2f1;
}

.table-body > .table-row:nth-child(odd) {
	background-color: #b2dfdb;
}

.table-row {
	cursor: pointer;
	transition: filter 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
}

.table-row:hover {
	filter: brightness(90%);
}

.table-cell {
	height: 1em;
	padding: 1em;
}

.table-checkbox {
	max-width: 1em;
}

.table-control {
	display: flex;
	padding-top: 1em;
	justify-content: space-between;
}

.control-disable {
	opacity: 0;
}

.control {
	background: #90caf9;
	padding: 0.2em;
	padding-left: 0.4em;
	padding-right: 0.4em;
	border-radius: 0.1em;
	font-size: 1.2em;
	color: #fff;
	transition: background 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
}

.control:hover {
	background: #2196f3;
}

.control-text {
	background: #2196f3;
}

.control-button {
	border: none;
}

.student-control {
	display: flex;
	justify-content: right;
	align-items: baseline;
	padding-top: 1em;
}

.student-control > * {
	margin-left: 1em;
}

.control-delete {
	background: #ef5350;
}

.control-delete:hover {
	background: #b71c1c;
}

.control-add {
	background: #4caf50;
}

.control-add:hover {
	background: #1b5e20;
}

.control-save {
	background: #448aff;
}

.control-add:hover {
	background: #2962ff;
}
</style>
