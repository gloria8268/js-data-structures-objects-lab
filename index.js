// Write your solution in this file!
const driver = {
  name: 'Sam',
}


function updateDriverWithKeyAndValue(driver, key, value) {
  let newdriver = Object.assign({}, driver)
  return Object.assign(newdriver, { 'address': '11 Broadway' })
}

updateDriverWithKeyAndValue(driver, 'address', '11 Broadway')

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {'address': '12 Broadway'})
}

destructivelyUpdateDriverWithKeyAndValue(driver, 'address', '12 Broadway')

function deleteFromDriverByKey(driver, key) {
  const newdriver2 = Object.assign({}, driver)
  delete newdriver2[key]
  return newdriver2
}

deleteFromDriverByKey(driver, 'name')

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver 
  }

destructivelyDeleteFromDriverByKey(driver, 'name')
