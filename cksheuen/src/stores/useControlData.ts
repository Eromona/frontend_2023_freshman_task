import { ref } from 'vue';
import { defineStore } from 'pinia';

interface Data {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
    [key: string]: number | string | string[];
}

export const useControlData = defineStore('useControlData', () => {
    let data = ref<Data[]>([]);
    let newItem: Data = {
        id: 0,
        title: '--',
        description: '--',
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: '--',
        category: '--',
        thumbnail: '--',
        images: ['--'],
    };
    let dataKeyName: any[] = [];

    let detailState = ref<boolean>(false);
    let detaiIndex = ref<number>(0);

    let editState = ref<boolean>(false);

    function setNewVal(newData: Data[]): void {
        data.value = newData;
        if (!dataKeyName[0])
            for (let key in newData[0]) {
                dataKeyName.push(key);
            }
        newItem.id = data.value.at(-1).id;
    }
    function pushNewItem() {
        newItem.id++;
        data.value.push(newItem);
    }
    function delItem(index: number): void {
        data?.value?.splice(index, 1);
    }
    function idDelItem(id: number): void {
        data.value = data.value.filter((item, index, arr) => {
            return data.value[index].id != id ? data.value[index] : null;
        });
    }
    function editItem(index: number, newVal: string): void {
        data.value[index][dataKeyName[index]] = newVal;
    }

    function open(index: number): void {
        detailState.value = true;
        detaiIndex.value = index;
        console.log('open', index, data.value);
    }

    function close(): void {
        detailState.value = false;
    }

    function checkState(state: boolean): void {
        editState.value = state;
    }

    return {
        data,
        setNewVal,
        pushNewItem,
        delItem,
        idDelItem,
        detailState,
        open,
        close,
        detaiIndex,
        dataKeyName,
        editItem,
        editState,
        checkState,
    };
});
