import {listSongs} from './songs.js';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
    const playlist = $('.playlist');
    const cd = $('.cd');
    const header = $('header h2');
    const audio = $('audio');
    const player = $('.player');
    const playBtn = $('.btn-toggle-play');
    const progress = $('#progress');
    const cdThumb = $('.cd-thumb');
    const btnNext = $('.btn-next');
    const btnPrev = $('.btn-prev');

const app = {
    songs: listSongs,
    currentIndex: 0,
    render() {
        const htmls = this.songs.map( song => 
            `
            <div class="song">
                <div class="thumb" style="background-image: url('https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg')">
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
    },

    handleEvents() {
        let cdWidth = cd.offsetWidth;

        // Scroll the flexibile screen
        window.onscroll = () => {
            let scrollTop = window.scrollY || document.documentElement.scrollTop;
            let currentWidth = cdWidth - scrollTop;

            cd.style.width = (currentWidth >= 0 ? currentWidth : 0) + "px";
            cd.style.opacity = currentWidth / cdWidth - 0.1;
        }

        // Play / Pause the song
        playBtn.onclick = () => {
            if(audio.paused)  
                audio.play();    
            else  
                audio.pause();
        }

        // Animate of progress bar
        audio.ontimeupdate = () => {
            progress.value = audio.currentTime;
        }

        // Set progress bar value
        audio.oncanplay = () => {
            progress.max = audio.duration;
            
            rotateAnimate.currentTime = 0;
            rotateAnimate.pause();
        }

        audio.onplay = () => {
            player.classList.add('playing')
            rotateAnimate.play()
            audio.autoplay = true
        }

        audio.onpause = () => {
            player.classList.remove('playing');
            rotateAnimate.pause()
            audio.autoplay = false
        }

        // Seeking song
        progress.oninput = () => {
            audio.currentTime = progress.value;
        }

        // The CD rotates
        let rotateAnimate = cdThumb.animate([
            { transform: "rotate(360deg)"}
        ],
        {
            duration: 20000,
            iterations: Infinity
        })
        rotateAnimate.pause();

        // Load next song
        btnNext.onclick = () => {
            this.loadNextSong();
        }

        console.log(rotateAnimate)
    },

    defineProperties() {
        Object.defineProperty(this, "currentSong", {
            get() {
                return this.songs[this.currentIndex]
            }
        })
    },

    loadCurrentSong() {
        header.textContent = this.songs[this.currentIndex].name;
        // audio.src = this.songs[this.currentIndex].path;
        let rand = Math.round(Math.random()* 20) ;
        audio.src = this.songs[rand].path;
    },

    loadNextSong() {
        this.currentIndex++;
        if( this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }

        this.loadCurrentSong();
    },

    start() {
        this.render();
        this.defineProperties();
        this.handleEvents();
        this.loadCurrentSong();
    }
}

app.start(); 