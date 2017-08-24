import heroList from '../../static/data/heroList.json'

export const characterList = state => {
    // return state.characterList
    return state.characterList.map((character, index) => {
        character.characterId = character.ename
        Object.assign(character, heroList.data[Math.ceil(Math.random() * heroList.data.length - 1)])
        return character
    })
}

export const characterDetail = state => {
    return state.characterDetail
}

export const top5CharacterList = state => {
    var _top5 = state.topCharacterList.slice(0, 5)
    // return _top5;
    return  _top5.map((character, index) => {
        character.characterId = character.ename

        Object.assign(character, heroList.data[Math.ceil(Math.random() * heroList.data.length - 1)])
        return character
    })
}