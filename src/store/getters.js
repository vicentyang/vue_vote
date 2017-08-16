export const characterList = state => {
    return state.characterList
}

export const characterDetail = state => {
    return state.characterDetail
}

export const top5CharacterList = state => {
    return state.topCharacterList.slice(0, 5)
}