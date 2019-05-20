export function isEmpty(obj) {
  return (Object.keys(obj).length) ? false : !!Object.keys(obj).length;
}
