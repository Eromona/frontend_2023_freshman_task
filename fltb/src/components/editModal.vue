<script setup>
import { NSpace, NButton, NAlert, NModal, NRadio, NRadioGroup, NForm, NFormItem, NInput, NInputNumber } from 'naive-ui';
import { inject } from 'vue';

const { data, editModelData, showModal, errorMessage, modalMode } = inject("datas");

function handleValidateClick() {
  for (const [key, value] of Object.entries(editModelData.value)) {
    if (!value && key != "key" && key != "id") {
      errorMessage.value = `Please fill the ${key}`;
      return false;
    }
  }
  return true;
}

function submitCallback() {
  if (!handleValidateClick()) {
    return;
  }
  if (modalMode.value == "edit") {
    data.value[editModelData.value.key] = { ...editModelData.value };
    fetch(`https://dummyjson.com/users/${editModelData.value.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editModelData.value)
    })
      .then(res => res.json())
      .then(console.log)
  } else if (modalMode.value == "add") {
    editModelData.value.key = data.value.length;
    data.value.push({ ...editModelData.value });
    fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editModelData.value)
    })
      .then(res => res.json())
      .then(console.log)
  }
  showModal.value = false;
}

function cancelCallback() {
  showModal.value = false;
}

</script>

<template>
    <n-modal v-model:show="showModal" preset="dialog" title="Edit">
        <n-form class="mt-3" ref="formRef" :model="editModelData" :rules="rules" label-placement="left" label-width="auto"
            require-mark-placement="right-hanging" size="medium">
            <n-alert v-if="errorMessage" title="Error" type="error" class="mt-3 mb-3">
                {{ errorMessage }}
            </n-alert>
            <n-form-item label="Username" path="inputValue">
                <n-input v-model:value="editModelData.username" placeholder="usern@me" :required="true" />
            </n-form-item>
            <n-form-item label="Password" path="inputValue">
                <n-input v-model:value="editModelData.password" placeholder="p@ssord" :required="true" />
            </n-form-item>
            <n-form-item label="Email" path="inputValue">
                <n-input v-model:value="editModelData.email" placeholder="em@il" :required="true" />
            </n-form-item>
            <n-form-item label="First Name" path="inputValue">
                <n-input v-model:value="editModelData.firstName" placeholder="first n@me" :required="true" />
            </n-form-item>
            <n-form-item label="Last Name" path="inputValue">
                <n-input v-model:value="editModelData.lastName" placeholder="last n@ame" :required="true" />
            </n-form-item>
            <n-form-item label="Age" path="inputValue">
                <n-input-number v-model:value="editModelData.age" :required="true" />
            </n-form-item>
            <n-form-item label="Gender" path="radioGroupValue">
                <n-radio-group v-model:value="editModelData.gender">
                    <n-radio value="male">Male</n-radio>
                    <n-radio value="female">Female</n-radio>
                </n-radio-group>
            </n-form-item>
            <n-form-item label="Height" path="inputValue">
                <n-input-number v-model:value="editModelData.height" :required="true" />
            </n-form-item>
            <n-form-item label="Weight" path="inputValue">
                <n-input-number v-model:value="editModelData.weight" :required="true" />
            </n-form-item>
        </n-form>
        <template #action>
            <n-space>
                <n-button @click="cancelCallback">Cancel</n-button>
                <n-button type="primary" @click="submitCallback">Submit</n-button>
            </n-space>
        </template>
    </n-modal>
</template>