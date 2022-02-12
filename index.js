const { getSpotifyPlaylist } = require('extract-sptf-playlist');
const url = 'YOUR PLAYLIST URL';

getSpotifyPlaylist(url, {
filePath: 'data.json',
displayProcess: true,
});