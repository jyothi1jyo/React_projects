import { combineReducers } from 'redux';

const songsReducer = () => {
    return[
        { title :'Stitches', duration : '3:59'},
        { title :'Story of my life', duration : '4:07'},
        { title :'You belong with me', duration : '3:49'},
        { title :'Perfect', duration : '4:40'}

    ];
};

const selectedSongReducer = (selectedSong=null,action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});