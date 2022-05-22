const mongoose = require('mongoose');
module.exports.check = async function (alerts, product) {
    debugger
    let result = {
        checkForAlergens: [],
        checkForNutritionalFacts: []
    }
    console.log('alerts.allergens', alerts.allergens)
    debugger
    console.log(product)
    result.checkForAlergens = checkForAlergens(alerts.allergens, product.allergens)

    result.checkForNutritionalFacts = checkForNutritionalFacts(alerts.nutritionalFacts, product.nf)
    return result

}


checkForAlergens = async function (allergens, productAllergens) {
    let allergensResult = {
        allergen_contains: [],
        allergen_may_contain: []
    }
    allergens.forEach((allergen) => {
        productAllergens.allergen_contains.forEach(element => {
            if (element.toUpperCase() === allergen.description.toUpperCase()) {
                allergensResult.allergen_contains.push(element)
            }

        })
        productAllergens.allergen_may_contain.forEach(element => {

            if (element.toUpperCase() === allergen.description.toUpperCase()) {
                allergensResult.allergen_may_contain.push(element)
            }
        })

    });
    return allergensResult

}


checkForNutritionalFacts = async function (nutritionalFacts, product) {

    let nutritionalFactsResult = [];
    for (let index = 0; index < nutritionalFacts.length; index++) {
        if ((nutritionalFacts[index].description.toUpperCase() > product[index].nf_description.toUpperCase())
            && (nutritionalFacts[index].amount > product[index].amount)) {
                nutritionalFactsResult.push(nutritionalFacts[index]);
        }
    }
    return nutritionalFactsResult;
}

