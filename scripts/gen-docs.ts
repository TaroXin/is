import JsDoc2MD from 'jsdoc-to-markdown'

JsDoc2MD.render({
  files: 'dist/is*.js',
}).then((res) => {
  console.log(res)
})
