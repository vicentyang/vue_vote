export const characterList = state => {
    // return state.characterList
    return state.characterList.map((character, index) => {
        character.randomHeroId = Math.ceil(Math.random() * 68)
        return character
    })
}

export const characterDetail = state => {
    return state.characterDetail
}

export const top5CharacterList = state => {
    var _top5 = state.topCharacterList.slice(0, 5)

    return  _top5.map((character, index) => {
        character.randomHeroId = Math.ceil(Math.random() * 68)
        return character
    })
}