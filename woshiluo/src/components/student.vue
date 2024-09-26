<script setup>
// import { ref } from 'vue';

const props = defineProps({
	checked: Boolean,
	id: Number,
	student_id: Number,
	name: String,
	college: String,
	major: String,
	year: Number,
	class_id: Number,
	old: Number
});

const emit = defineEmits(['edit', 'view', 'toggle']);

const toggle_student = () => {
	emit('toggle', props.id);
};
</script>
<template>
	<tr class="table-row" @click="toggle_student">
		<td class="table-cell table-checkbox">
			<input type="checkbox" :checked="checked" />
		</td>
		<td class="table-cell">{{ id + 1 }}</td>
		<td class="table-cell">{{ student_id }}</td>
		<td class="table-cell">{{ name }}</td>
		<td class="table-cell">{{ college }}</td>
		<td class="table-cell">{{ major }}</td>
		<td class="table-cell">{{ year }}</td>
		<td class="table-cell">{{ class_id }}</td>
		<td class="table-cell">{{ old }}</td>
		<td class="table-cell">
			<span @click.stop="emit('view')" class="button view-button"
				>查看</span
			>
			<span @click.stop="emit('edit')" class="button edit-button"
				>编辑</span
			>
		</td>
	</tr>
</template>

<style scoped>
.button {
	color: #42a5f5;
	cursor: pointer;
	transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
}

.button:hover {
	color: #1565c0;
}

.edit-button {
	padding-left: 1em;
}

.table-cell {
	text-align: center;
	vertical-align: middle;
	height: 1em;
	padding: 0.5em;
	transition: filter 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
}

.table-checkbox {
	max-width: 1em;
}
</style>
