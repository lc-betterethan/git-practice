const {camelCase} = require("lodash")

const str = 'hello world'

console.log(camelCase(str))

function start({message}) {
    console.log('### start...')
    console.info('message: ', message)
}

start({
    message: "It's just a demo"
})