export function isDayTime() {
  const hours = new Date().getHours()
  console.log('hours - ', hours)
  return hours > 6 && hours < 18
}
