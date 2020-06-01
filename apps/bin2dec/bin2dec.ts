const bin2dec = (input: String) => {
  const binary = input.split('').map(Number).reverse()
  return binary.reduce((acc, cur, idx) => {
    return acc + cur * Math.pow(2, idx)
  })
}

export default bin2dec
