export default (classes, added, ...base) => {
  const dynamicStyle = []
  if (added) {
    dynamicStyle.push(
      ...added.split(' ').filter(i => Object.keys(classes).includes(i)),
    )
  }
  return [...base, ...dynamicStyle].map(i => classes[i]).join(' ')
}
