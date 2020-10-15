
// define and export a Catalog function 
export const Catalog = (foodArr) => {

    const contentElement = document.querySelector(".container")

    // iterate the array of harvested food
    for (const food of foodArr) {
        // for each food object, append the inner html of the main element
        contentElement.innerHTML += `
        <section class="plant">${food.type}</section>
        `
    }

}