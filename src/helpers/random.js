const getRandomPhrase = (phrase) => {
    const random = Math.floor(Math.random() * phrase.length)
    return phrase[random];
}

export default getRandomPhrase;