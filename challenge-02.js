//Problem Statement
//Write a function to simulate the add song and undo last action functionality of a playlist manager. The function
//should process a series of actions and return the final state of the playlist.
//The actions can be:

//1. "addSong( ' Song Name')": Add a song to the playlist.

//2. "undo()": Remove the most recently added song.
//You need to process a list of these actions and return the final playlist.
//Input Format

//« Alist of strings, where each string represents an action.

//+ 1 <= number of actions <= 100.
//Output Format

//« Alist of strings, where each string represents a song in the playlist.

//Example
//Input: [“addSong(‘Song 1')", "addSong('Song 2')", "undo()", “addsong('Song 3')"]
//Output: ["Song 1", "Song 3"]
//Explanation
//« Action 1: Add "Song 1". Playlist: ['Song 1'].
//« Action 2: Add "Song 2". Playlist: ['Song 1', "Song 2""].
//« Action 3: Undo the last action (remove "Song 2"). Playlist: ['Song 1'].
//« Action 4: Add "Song 3". Playlist: ["Song 1", "Song 3").
//Constraints
//1. <= number of actions <= 100.
//2. Actions will always be valid (e.g., undo() will only appear if there is at least one song to undo).


function playlistManager(actions) {
    const playlist = [];

    for (let action of actions) {
        if (action.startsWith("addSong")) {
            const startIndex = action.indexOf("'");
            const lastIndex = action.indexOf("'", startIndex + 1);
            const song = action.slice(startIndex + 1, lastIndex);
            playlist.push(song);
        } else if (action === "undo()") {
            if (playlist.length > 0) {
                playlist.pop();
            }
        }
    }
    return playlist;
}

console.log(playlistManager(["addSong('Song 1')", "addSong('Song 2')", "undo()", "addSong('Song 3')"]));;



