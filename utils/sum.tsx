const sum = (...numbers: Array<number>) => {
    return numbers.reduce((total, number) => total + number, 0);
}

export default sum
