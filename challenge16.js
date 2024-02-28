document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('myAudio');

    // Function to play the song
    function playSong() {
        audio.play();
    }

    // Function to pause the song
    function pauseSong() {
        audio.pause();
    }

    // Add event listeners to play and pause the song
    audio.addEventListener('play', function() {
        console.log('Song is playing');
    });

    audio.addEventListener('pause', function() {
        console.log('Song is paused');
    });
});
