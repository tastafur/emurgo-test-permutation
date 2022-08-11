const input1: string = "101*011*1";
const input2: string = "101*011*1*";
const input3: string = "101*011*1*1*0";
const input4: string = "101*011*1*1*01*0";
const input5: string = "101*011*1*1*01*00*1";

// Generates all possible binary numbers that will fill the permutation.
const generateBinaryMutations = (input: string) => {
    const regPermutations = new RegExp(/\*/g);
    const lengthMaxPermutations = input.match(regPermutations).length;
    const numbersPermuted = [];
    const indicesSwap = [];

    // I take out all the indices that are going to mutate from storing
    let resultRegex;
    while ( (resultRegex = regPermutations.exec(input))) {
        indicesSwap.push(resultRegex.index);
    }

    console.log("indicesSwap", indicesSwap);
    // I generate all the binary possibilities there may be based on the length of the number of digits to replace.
    // Maximum binary number
    const maxNumberBinary = parseInt("1".repeat(lengthMaxPermutations),2);

    // For every number between 0->maxNumberBinary
    for(let i = 0; i <= maxNumberBinary; i++){
        // Convert to binary, pad with 0, and add to final results
        const numberBinary = i.toString(2).padStart(lengthMaxPermutations,'0');
        // Replace the * with the binary of for each number
        let inputToPermuted = input.split("");
        indicesSwap.forEach((indiceSwap, index) => {
            inputToPermuted[indiceSwap] = numberBinary[index]
        })
        numbersPermuted.push(inputToPermuted.join(""));
    }

    return numbersPermuted;
}

console.log("test 1", generateBinaryMutations(input1));
console.log("test 2", generateBinaryMutations(input2));
console.log("test 3", generateBinaryMutations(input3));
console.log("test 4", generateBinaryMutations(input4));
console.log("test 5", generateBinaryMutations(input5));
