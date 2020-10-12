import { createPlan } from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"

console.log("Welcome to the main module")

const yearlyPlan = createPlan()
console.log(yearlyPlan)

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)

// const cornSeed = createCorn()
// console.log(cornSeed)

