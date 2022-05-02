function getCircleArea(radius) {
    return 3.14 * radius ** 2
}

function getCircleAreas(radiusArr) {
    var areasArr = [];

    for (var i = 0; i < radiusArr.length; i++) {
        var circleArea = getCircleArea(radiusArr[i]);
        areasArr.push(circleArea);
    }

    return areasArr;
}

module.exports = getCircleAreas