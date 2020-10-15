// define and export a harvestPlants function
// must accept the plantsInField array as input
export const harvestPlants = (plantsArr) => {
    // defining the return array
    let harvestArr = []
    // iterate through the plantsInField array and get the value of the output property of each object
    for (const plantObj of plantsArr) {
        
        var x = plantObj.output
        var y = x / 2
        // if corn, add half the number of corn * corn.output
        if (plantObj.type === "corn") {
            for (let i = 0; i < y; i++) {
                harvestArr.push(plantObj)
            }
        // for all other plants add that plant times the output value   
        } else {
            for (let j = 0; j < x; j++) {
                harvestArr.push(plantObj)
            }
        }
    }
    // return an array of seed objects

    return harvestArr
}



