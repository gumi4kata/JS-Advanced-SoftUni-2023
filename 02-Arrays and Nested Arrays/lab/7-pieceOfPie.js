function solve(pies, first, last){

    const firstIndex = pies.indexOf(first);
    const lastIndex = pies.indexOf(last);

    return pies.slice(firstIndex, lastIndex + 1);

}
solve(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie');

function solve(arr, a, b) {
    return arr.slice(arr.indexOf(a), arr.indexOf(b) + 1);
}