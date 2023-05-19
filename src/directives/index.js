
export const imgUrl = {
  inserted(el, bindings) {
    el.onerror = function() {
      el.src = bindings.value
    }
  }
}

