import { ref } from "vue"
import { ElSelect } from "element-ui/types/select"

export function useElSelect() {
  const elSelect = ref<ElSelect | null>(null)
  return {
    focus() {
      elSelect.value?.focus()
    },
    blur() {
      elSelect.value?.blur()
    },
    elSelect
  }
}