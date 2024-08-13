function sortArray(array) {
    let done = false
    while (!done) {
        done = true
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                done = false
                let temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
            }
        }
    }

    console.log(array)
}

let array = [20, 12, 35, 11, 17, 9, 58, 23, 69, 21]

sortArray(array)
