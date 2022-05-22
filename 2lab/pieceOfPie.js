function pieceOfPie(input, pie1, pie2) {

    return input.slice(input.indexOf(pie1), input.indexOf(pie2) + 1);
    
}
pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie');