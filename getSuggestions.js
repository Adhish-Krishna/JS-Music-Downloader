import {getSuggestions} from 'node-youtube-music';

const getSuggestion = (songId)=>{
    let suggestions = [];
    getSuggestions(songId).then((data)=>{
        data.map((d)=>{
            suggestions = [...suggestions , {Title:d.title,Link:`https://music.youtube.com/watch?v=${d.youtubeId}`}];
        })
        console.log(suggestions);
    })
}
let args = process.argv;
getSuggestion(args[2]);
