import { ref } from "vue"
import { ElInputNumber } from "../types/element-components"


export function useElInputNumber() {
  const elInputNumber = ref<ElInputNumber | null>(null)
  return {
    focus() {
      elInputNumber.value?.focus()
    },
    select() {
      elInputNumber.value?.select()
    },
    elInputNumber
  }
}