function solve(typeOfFruit, weightOfFruit, priceOfFruit) {

    let weightInKg = weightOfFruit / 1000;
    let finalPrice = weightInKg * priceOfFruit;

    console.log(`I need $${finalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${typeOfFruit}.`);


}
solve('orange', 2500, 1.80);