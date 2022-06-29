function century(year) {
    const decade = year / 100
    if (decade > Math.round(decade)){
        return Math.round(decade) + 1
    } 
    return decade
}

console.log(century(1820));