// A verification object to check whether the user types a word correctly and how many typos they made
export let verification = {
    actualWordElement: null,
    typedWord: null,

    // TODO: If actualWordElement is null, fix that
    getTypos: function () {
        this.actualWord = this.actualWordElement.innerHTML;
        let numOfTypos = 0;

        let len = null;

        const actualWordLength = this.actualWord.length;
        const typedWordLength = this.typedWord.length;

        // If the actual word is longer, then count the untyped characters as typos
        if (actualWordLength > typedWordLength) {
            numOfTypos += actualWordLength - typedWordLength;
            len = typedWordLength;
        }
        // If the typed word is longer, then count the extra characters as typos
        else if (typedWordLength > actualWordLength) {
            numOfTypos += typedWordLength - actualWordLength;
            len = actualWordLength;
        } 
        // Since both the typed and actual word are the same length, it doesn't matter which one len is set to
        else {
            len = typedWordLength
        }

        for (let i = 0; i < len; i++) {
            const typedChar = this.typedWord[i];
            const actualChar = this.actualWord[i];

            if (typedChar !== actualChar) {
                numOfTypos++;
            }
        }
        return numOfTypos;
    },

    verifyWordTyped: function (numOfTypos) {
        if (numOfTypos === 0) {
            this.actualWordElement.className = "typed-correct";
        } else {
            this.actualWordElement.className = "typed-incorrect";
        }
    },
};
