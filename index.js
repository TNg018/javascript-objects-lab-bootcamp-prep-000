var recipes = { Object: "key" };

function updateObjectWithKeyAndValue(obj, key, value) {

  return Object.assign({}, obj, { [key]: value })
}


function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value

  return obj
}
const recipe = { eggs: 3 }

destructivelyUpdateObjectWithKeyAndValue(recipe, 'flour', '3 cups')

function DeleteFromObjectbyKey(obj, key) {
var obj = {foo: 'bar'}
var newObj = Object.assign({}, obj)
delete newObj.foo
}
