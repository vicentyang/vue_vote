<template>
    <div class='container'>
        <div class='list-group'>
            <div class='list-group-item animated fadeIn'>
                <div v-for="(character, index) in characterList" class='media'>
                    <span class='position pull-left'>{{index + 1}}</span>
                    <!-- <div class='pull-left thumb-lg'>
                         <img class='media-object' :src="'http://image.eveonline.com/Character/' + character.characterId + '_128.jpg'" />
                    </div> -->
                    <div class='media-body'>
                        <h4 class='media-heading'>
                            <!-- <Link to={ '/characters/' + character.characterId}>{character.name}</Link> -->
                        </h4>
                        <small>Race:
                              <strong>{{character.race}}</strong>
                        </small>
                        <br />
                        <small>Bloodline:
                             <strong>{{character.bloodline}}</strong>
                        </small>
                        <br />
                        <small>Wins:
                             <strong>{{character.wins}}</strong> Losses:
                            <strong>{{character.losses}}</strong>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>