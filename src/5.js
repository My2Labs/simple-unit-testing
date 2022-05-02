function compareNumbers(m, n) {
    let message = ("")
    if (m < n) {
        message = m + " is smaller than " + n;
    } else {
        message = m + " is bigger than or equal to " + n;
    }

    return message;
}

module.exports = compareNumbers