export const setEnding = (num, dec) => {
  const currentNum = num
  if (num > 100) num = num % 100
  if (num <= 20 && num >= 10) return `${currentNum} ${dec[2]}`
  if (num > 20) num = num % 10
  const end = num === 1 ? dec[0] : num > 1 && num < 5 ? dec[1] : dec[2]
  return `${currentNum} ${end}`
}
