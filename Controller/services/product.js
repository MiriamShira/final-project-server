const mongoose = require('mongoose');
module.exports.check =  function (alerts, product) {
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
  
    console.log("result of check is",result)
    return result

}


checkForAlergens =  function (allergens, productAllergens) { 
     debugger
    let allergensResult = {
        allergen_contains: [],
        allergen_may_contain: []
    }
    allergens.forEach((allergen) => {
        productAllergens.allergen_contains.forEach(element => {
            if (element.toUpperCase() === allergen.description.toUpperCase()) {
               
                console.log(element,allergen.description);
                allergensResult.allergen_contains.push(element)
            }

        })
        productAllergens.allergen_may_contain.forEach(element => {
               
            if (element.toUpperCase() === allergen.description.toUpperCase()) {
               
                console.log(element,allergen.description);
                allergensResult.allergen_may_contain.push(element)
            }
        })

    });
  
    console.log('allergensResult:',allergensResult);
    return allergensResult

}


checkForNutritionalFacts =  function (nutritionalFacts, product) {
debugger
    let nutritionalFactsResult = [];
    for (let index = 0; index < nutritionalFacts.length; index++) {
        console.log(nutritionalFacts[index].description.toUpperCase(),product[index].nf_description.toUpperCase());
        console.log(nutritionalFacts[index].amount,product[index].amount);
        if ((nutritionalFacts[index].description.toUpperCase() === product[index].nf_description.toUpperCase())
            && (nutritionalFacts[index].amount > product[index].amount)) {
                nutritionalFactsResult.push(nutritionalFacts[index]);
        }
    }
    return nutritionalFactsResult;
}

