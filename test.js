import {listSongs} from './songs.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
    const header = $('header h2');
    const cbThumb = $('.cd-thumb');
    const audio = $('audio');
    const cd = $('.cd');
    const playBtn = $('.btn-toggle-play')
    const player = $('.player')
    const playlist = $('.playlist');
    const progressBar = $('#progress');
    const currentTime = $('.current-time');
    const duration = $('.duration');
    const repeatBtn = $('.btn-repeat');
    let songCurrentTime = 0;
    const nextBtn = $('.btn-next');
    const prevBtn = $('.btn-prev');
    const shuffleBtn = $('.btn-random')

const app = {
    songs: listSongs,
    currentIndex: 0,

    render() {
        let htmls = this.songs.map( song => `
            <div class="song">
                <div class="thumb" style="background-image: url('')">
                </div>
                <div class="body">
                <h3 class="title">${song.name}</h3>
                <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
        `).join('')
        playlist.innerHTML = htmls;

        this.loadSong(this.currentIndex);
    },
    loadNextSong() {
        this.currentIndex += 1;
        if(this.currentIndex == this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadSong(this.currentIndex);
    },
    loadPrevSong() {
        this.currentIndex -= 1;
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadSong(this.currentIndex);
    },
    handleEvents() {
        const cdWidth = cd.offsetWidth;

        window.onscroll = () => {
            let scrollTop = window.scrollY || document.documentElement.scrollTop;
            
            // manipulate width
            let widthAfter = cdWidth - scrollTop;
            cd.style.width = (widthAfter > 0 ? widthAfter : 0) + 'px'; 

            // manipulate opacity
            cd.style.opacity = widthAfter / cdWidth - 0.1;
        }

        audio.ontimeupdate = () => {
            progressBar.value = audio.currentTime;
            songCurrentTime = new Date(audio.currentTime * 1000);
            
            if( songCurrentTime.getMinutes() == 0 ) {
                currentTime.textContent = "0:" +songCurrentTime.getSeconds();
            } else {
                currentTime.textContent = songCurrentTime.getMinutes() + ":" + songCurrentTime.getSeconds();

            }

        }

        playBtn.onclick = () => {
            if(audio.paused) {
                audio.play()
            } else {
                audio.pause();
            }
        }

        audio.onplay = () => {
            player.classList.add('playing');
        }

        audio.onpause = () => {
            player.classList.remove('playing');

        }

        progressBar.oninput = () => {
            audio.currentTime = progressBar.value;
        }

        repeatBtn.onclick = () => {
            if(audio.loop) {
                audio.loop = false;
                repeatBtn.classList.remove('active')
            }
            else {
                audio.loop = true;
                repeatBtn.classList.add('active')


            }
        }

        audio.onended = () => {
            this.loadNextSong();
        }

        nextBtn.onclick = () => {
            this.loadNextSong();
        }

        prevBtn.onclick = () => {
            this.loadPrevSong();
        }

        shuffleBtn.onclick = () => {
            this.songs.sort(() => Math.random() - 0.5);
            this.render();
        }
    },
    loadSong(songIndex) {
        header.textContent = this.songs[songIndex].name;
        audio.src = this.songs[songIndex].path;

        setTimeout( () => {
            progressBar.max = audio.duration;
            let totalTime = new Date(audio.duration * 1000);
            duration.textContent = totalTime.getMinutes() + ":" + totalTime.getSeconds();

        }, 1000)

    },
    

    start() {
        this.render();
        this.handleEvents();
    }
}

app.start();