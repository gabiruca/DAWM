const { generateModel } = require('fake-data-generator')
// Requires a model
const model = require('./generator.json')
// Generate the model
const amountArg = 1000
const modelArg = model
const inputType = 'object'
const outputType = 'object'
const generatedModel = generateModel({ amountArg, modelArg, inputType, outputType })
