module.exports = function reverse(n) {
  if (n < 0) {
    n = Math.abs(n)
  }
  let n_array = Array.from(String(n), Number);
  for (i = 0; i < (n_array.length / 2); i++) {
    let buf = n_array[i]
    let last_el = n_array.length - i - 1
    n_array[i] = n_array[last_el]
    n_array[last_el] = buf
  }
  return Number(n_array.join(''))
}
