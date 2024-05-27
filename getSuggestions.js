import {getSuggestions} from 'node-youtube-music';

const getSuggestion = (songId)=>{
    let suggestions = [];
    getSuggestions(songId).then((data)=>{
        data.map((d)=>{
            //return console.log("Title: "+ d.title+"\n"+"Link: "+`https://music.youtube.com/watch?v=${d.youtubeId}`);
            suggestions = [...suggestions , {Title:d.title,Link:`https://music.youtube.com/watch?v=${d.youtubeId}`}];
        })
        console.log(suggestions);
    })
}
let args = process.argv;
getSuggestion(args[2]);
