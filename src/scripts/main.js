import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { createSoybean } from "./seeds/soybean.js"
import { addPlant, usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"

console.log("Welcome to the main module")

const yearlyPlan = createPlan()
console.log(yearlyPlan)

// // checking my seed funcs------------------------------
// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

// const cornSeed = createCorn()
// console.log(cornSeed)

// const potatoSeed = createPotato()
// console.log(potatoSeed)

// const sunflowerSeed = createSunflower()
// console.log(sunflowerSeed)

// const wheatSeed = createWheat()
// console.log(wheatSeed)

// const soybeanSeed = createSoybean()
// console.log(soybeanSeed)

// // checking my tilling
// addPlant(soybeanSeed)
// addPlant(cornSeed)

// const slicedPlants = usePlants()
// console.log(slicedPlants)


// const plantingTest = plantSeeds(yearlyPlan)
// console.log(plantingTest)

plantSeeds(yearlyPlan)


const harvestedFoodArr = harvestPlants()

Catalog(harvestedFoodArr)