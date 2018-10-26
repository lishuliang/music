import {playMode} from 'common/js/config'
import {loadSearch,loadPlay,loadFavorite} from 'common/js/cache' 

const state = {
    singer: {},
    playing: false,  //播放状态
    fullScreen: false,
    playlist: [],
    sequenceList: [],
    mode: playMode.sequence,
    currentIndex: -1,
    disc: {},
    topList: {},
    searchHistory: loadSearch(),
    playHistory: loadPlay(),
    favoriteList: loadFavorite()
}

export default state