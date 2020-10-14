import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

export const plantSeeds = (planArr) => {
    for (const rowArr of planArr) {
        for (const cropString of rowArr) {
            debugger
            switch (cropString) {
                case "Asparagus":
                    const asparagusSeed = createAsparagus()
                    addPlant(asparagusSeed);
                    break;
                case "Corn":
                    const cornSeed = createCorn()
                    addPlant(cornSeed);
                    break;
                case "Potato":
                    const potatoSeed = createPotato()
                    addPlant(potatoSeed);
                    break;
                case "Soybean":
                    const soybeanSeed = createSoybean()
                    addPlant(soybeanSeed);
                    break;
                case "Sunflower":
                    const sunflowerSeed = createSunflower()
                    addPlant(sunflowerSeed);
                    break;
                case "Wheat":
                    const wheatSeed = createWheat()
                    addPlant(wheatSeed);
                    break;
                default:
                    console.log('These seeds are Monsanto')
            }
        }
    }
}

