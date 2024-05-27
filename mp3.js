import ytdl from 'ytdl-core';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegPath from 'ffmpeg-static';

const downloadAndConvert = async (url, output,title) => {
  let error_songs = [];
  console.log('Starting download...');
  const videoStream = ytdl(url, { quality: 'highestaudio' })
    .on('response', (res) => {
      console.log(`Downloading ${title}`);
    });
  console.log('Converting to MP3...');
  ffmpeg(videoStream)
    .setFfmpegPath(ffmpegPath)
    .audioBitrate(320)
    .toFormat('mp3')
    .save(output)
    .on('end', () => {
      console.log('Download and conversion completed!');
    })
    .on('error', (error) => {
      error_songs.push(title);
      console.log("Error: "+error);
      console.log(error_songs);
    });


};

export default downloadAndConvert;

