export function add(x , y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('WrongType')
  }
  return x + y;
}
