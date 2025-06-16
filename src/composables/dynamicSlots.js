import { unref } from 'vue'
import { useSheetDataStore } from '@/stores/sheetDataStore'

export function dynamicSlots({ arrayRef, slotName = 'name' }) {
  const store = useSheetDataStore()

  const handleNewSlot = (index) => {
    const array = unref(arrayRef)
    const slot = array[index]

    if (slot[slotName] === '' && array.length > 1 && index !== array.length - 1) {
      array.splice(index, 1)
    } else if (index === array.length - 1 && slot[slotName] !== '') {
      const newId = array.length + 1
      array.push({ id: newId, name: '', lvl: 0, next: 0 })
    }
  }

  const updateField = (index, field, value) => {
    const array = unref(arrayRef)
    array[index][field] = value
  }

  return {
    handleNewSlot,
    updateField,
  }
}
