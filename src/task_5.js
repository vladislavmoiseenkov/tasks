export function isEmpty(obj) {
  return (typeof obj !== 'object')
    ? false
    : (Object.keys(obj).length === 0 ? false : true);
}
