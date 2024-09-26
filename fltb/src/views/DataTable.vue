<script setup>
import { ref, provide } from 'vue';
import dataTable from '../components/dataTable.vue'
import editModal from '../components/editModal.vue';

const data = ref([]);
const editModelData = ref({});
const showModal = ref(false);
const modalMode = ref("");
const errorMessage = ref("");

/**
 * init the model
 * @param {String} mode - "edit" or "add"
 */
function initModal(mode) {
  errorMessage.value = "";
  if (mode === "edit" || mode === "add") {
    modalMode.value = mode;
  }
}
provide("datas", { data, editModelData, showModal, modalMode, errorMessage, initModel: initModal });
</script>

<template>
  <data-table />
  <edit-modal />
</template>