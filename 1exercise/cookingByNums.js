function cookingByNums(num, ...commands) {

    num = Number(num);
    for (let command of commands) {
        switch (command) {
            case "chop":
                num = num / 2;
                break;
            case "dice":
                num = Math.sqrt(num);
                break;
            case "spice":
                num++;
                break;
            case "bake":
                num *= 3;
                break;
            case "fillet":
                num = num * 0.8;
                break;
        }
        console.log(num);
    }
}
cookingByNums('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNums('9', 'dice', 'spice', 'chop', 'bake', 'fillet');