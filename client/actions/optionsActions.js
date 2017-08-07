export const handleChange = (value,idx) => {
  return {
    type: 'HANDLE_CHANGE',
    payload: {value: value, idx: idx}
  }
}
