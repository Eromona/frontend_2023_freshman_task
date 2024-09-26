<script setup>
import { ref } from 'vue';

const props = defineProps({
	id: Number,
	title: String,
	editable: Boolean,
	student: Object
});
const emit = defineEmits(['destory', 'submit']);

const destory_self_when_body = (e) => {
	if (e.srcElement.className === 'dialog-body') emit('destory');
};

const student_id = ref(props.student.student_id);
const name = ref(props.student.name);
const college = ref(props.student.college);
const major = ref(props.student.major);
const year = ref(props.student.year);
const class_id = ref(props.student.class_id);
const old = ref(props.student.old);

const destory_self = () => {
	emit('destory');
};

const submit_self = () => {
	emit('submit', props.id, student_id, name, college, major, year, class_id, old);
	emit('destory');
};
</script>

<template>
	<div class="dialog">
		<div class="dialog-overlay"></div>
		<div class="dialog-body" @click.stop="destory_self_when_body">
			<div class="dialog-card">
				<h2 class="card-title">{{ title }}</h2>
				<div class="input-box">
					<label>学号</label>
					<input
						:disabled="!editable"
						v-model="student_id"
						type="number"
						class="input input-student-id"
					/>
				</div>
				<div class="input-box">
					<label>姓名</label>
					<input
						:disabled="!editable"
						v-model="name"
						class="input input-name"
					/>
				</div>
				<div class="input-box">
					<label>学院</label>
					<input
						:disabled="!editable"
						v-model="college"
						class="input input-college"
					/>
				</div>
				<div class="input-box">
					<label>专业</label>
					<input
						:disabled="!editable"
						v-model="major"
						class="input input-major"
					/>
				</div>
				<div class="input-box">
					<label>年级</label>
					<input
						:disabled="!editable"
						v-model="year"
						type="number"
						class="input input-year"
					/>
				</div>
				<div class="input-box">
					<label>班级</label>
					<input
						:disabled="!editable"
						v-model="class_id"
						type="number"
						class="input input-class-id"
					/>
				</div>
				<div class="input-box">
					<label>年龄</label>
					<input
						:disabled="!editable"
						v-model="old"
						type="number"
						class="input input-old"
					/>
				</div>
				<div class="button-panel">
					<button @click="destory_self" class="button button-cancel">
						取消
					</button>
					<button
						v-if="editable"
						@click="submit_self"
						class="button button-cancel"
					>
						保存
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.dialog {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 100;
}

.dialog-overlay {
	cursor: pointer;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: #000;
	opacity: 0.5;
}

.dialog-body {
	position: fixed;
	z-index: 200;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.dialog-card {
	margin: auto;
	position: fixed;
	max-height: 60vh;
	width: calc(100% - 5em);
	border-radius: 0.3em;
	padding: 1em;
	padding-bottom: 2em;
	z-index: 200;
	background: #fff;
	overflow: scroll;
	box-shadow:
		rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
		rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
		rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
}

.card-title {
	text-align: center;
}

.input-box {
	font-size: 1.2em;
	line-height: 1.5em;
	padding-top: 1em;
	display: flex;
}

.input-box > label {
	min-width: 3em;
}

.input {
	margin-left: 1em;
	width: 100%;
	border: 0;
	border-bottom: 1px #bdbdbd solid;
	transition: border-bottom 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
}

.input:focus,
.input:focus-visible {
	border: 0;
	outline: none;
	border-bottom: 1px #424242 solid;
}

.button-panel {
	padding: 0.2em;
	padding-top: 1em;
	text-align: right;
}

.button {
	font-size: 1.1em;
	cursor: pointer;
	background: #fff;
	border: 0;
	padding: 0.5em;
	transition: background 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
}

.button:hover {
	background: #e0e0e0;
}
</style>
