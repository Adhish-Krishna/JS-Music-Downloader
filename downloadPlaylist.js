import {listMusicsFromPlaylist} from 'node-youtube-music';
import downloadAndConvert from './mp3.js';

const GetMusicfromPlaylist = async (playlistId,folderName)=>{
    await listMusicsFromPlaylist(playlistId).then((data)=>{
        data.map((data)=>{
            downloadAndConvert(`https://youtube.com/watch?v=${data.youtubeId}`,`./music/${folderName}/${data.title}.mp3`,`${data.title}`);
        })
    });
} 

let args = process.argv;

GetMusicfromPlaylist(args[2],args[3]);

