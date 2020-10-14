// an array to store all of the plants growing in the field
let plantsInField = []

export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj)) {
        seedObj.forEach(element => 
            plantsInField.push(seedObj[0])
        )   
    } else {
    plantsInField.push(seedObj)
    }
    console.log(plantsInField)
    return plantsInField
}

export const usePlants = () => {
    return plantsInField.slice()
}

