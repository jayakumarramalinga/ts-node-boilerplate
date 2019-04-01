import { question } from 'readline-sync'

// Laptop Builder
// Allow users to select computer parts to create their laptop
// Display total price with selected parts

//  Step 1 : List down possible parts to select
let screenResolution = ''
let HDD = '' // 128 GB, 256 GB, 1TB
let RAM = '' // 8GB, 16GB, 32 GB
let processor = '' // i5, i7
let i = 0

// Step 2 : Display possible options for each part
const screenResolutionOptions = {
    '1920 x 1080': 200,
    '2560 x 1440': 400,
    '3280 x 1620': 600,
    key: function(n) {
        return this[Object.keys(this)[n]];
    }
}

const HDDOptions = {
    '128GB' : 200, 
    '256GB' : 400, 
    '1TB'   : 600
}
const RAMOptions = {
    '8GB'  : 200, 
    '16GB' : 500, 
    '32GB' : 800
}
const processorOptions = {
    'i5' : 400, 
    'i7' : 700
}

console.log('Screen Options')
i = 0
for (let e in screenResolutionOptions) {
  console.log(`${i++}. ${e} = RM${screenResolutionOptions[e]}`)
}
let screenOptionIndex = question('Please select a screen option index\n')
screenResolution = screenResolutionOptions[screenOptionIndex]
console.log(screenResolutionOptions.key(screenOptionIndex))

/*
console.log()
console.log('HDD Options')
i = 0
for (let e in HDDOptions) {
    console.log(i++ +'. '+e)
}
let HDDOptionIndex = question('Please select a HDD option index\n')
HDD = HDDOptions[HDDOptionIndex]

console.log()
console.log('RAM Options')
i = 0
for (let e in RAMOptions) {
    console.log(i++ +'. '+e)
}
let RAMOptionIndex = question('Please select a RAM option index\n')
RAM = RAMOptions[RAMOptionIndex]

console.log()
console.log('processor Options')
i = 0
for (let e in processorOptions) {
    console.log(i++ +'. '+e)
}
let processorOptionIndex = question('Please select a processor option index\n')
processor = processorOptions[processorOptionIndex]


//  Step 3 : List price for each selected part

//  Step 4 : Select Option

//  Step 5 : Display all selected options
console.log('\nYour selected options are:')
console.log(screenResolution)
console.log(HDD)
console.log(RAM)
console.log(processor)
*/