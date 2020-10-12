// an array to store all of the plants growing in the field
let plantsInField = []

export const addPlant = (seedObj) => {
    plantsInField.push(seedObj)
    return plantsInField
}

export const usePlants = () => {
    return plantsInField.slice()
}

console.log(plantsInField)