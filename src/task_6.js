export function factorial(numb) {
  return (numb > 0) ? numb * factorial(numb - 1) : 1;
}
