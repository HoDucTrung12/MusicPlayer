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
    const btnRandom = $('.btn-random');
    const btnRepeat = $('.btn-repeat');

    const app = {
    songs: [...listSongs],
    currentIndex: 0,
    isRandom: false,

    render() {
        const htmls = this.songs.map( (song, index) => 
            `
            <div class="song ${index==this.currentIndex?'active':' '}" data-index="${index}">
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

        // Scroll top: flexible transform
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

        // Animation of progress bar
        audio.ontimeupdate = () => {
            progress.value = audio.currentTime;
        }

        // Duration of song / reset animation of CD thumb
        audio.oncanplay = () => {
            progress.max = audio.duration;
            
            rotateAnimate.currentTime = 0;
        }

        audio.onplay = () => {
            player.classList.add('playing')
            rotateAnimate.play()
            audio.autoplay = true;
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

        // The CD rotate animation
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

        // Load prev song
        btnPrev.onclick = () => {
            this.loadPrevSong();
        }

        //  Random   
        btnRandom.onclick = () => {
            this.isRandom = !this.isRandom;
            let currentSong = this.songs[this.currentIndex];

            if(this.isRandom) {
                this.songs.sort(() => Math.random() - 0.5);
                btnRandom.classList.add("active");
            } 
            else {
                this.songs = [...listSongs];
                btnRandom.classList.remove("active");
            }
            this.currentIndex = this.songs.indexOf(currentSong);
            this.render();
        }

        // when song's ended
        audio.onended = () => {
            this.loadNextSong();
            audio.play();
        }

        btnRepeat.onclick = () => {
            let loop = audio.loop;

            btnRepeat.classList.toggle('active', !loop);
            audio.loop = !loop;
        }

        // Active song
        playlist.onclick = e => {
            let song = e.target.closest('.song');
            
            if(!song || song.dataset.index == this.currentIndex)
                return;

            
            this.currentIndex = song.dataset.index;
            this.loadCurrentSong();
            
            playlist.firstElementChild.scrollIntoView({
                behavior: "smooth",
                block: "end"
            })
            audio.play();
        }
    },

    defineProperties() {
        Object.defineProperty(this, "currentSong", {
            get() {
                return this.songs[this.currentIndex]
            }
        })
    },

    loadCurrentSong() {
        // active
        $('.song.active').classList.remove('active');
        playlist.children[this.currentIndex].classList.add('active');


        header.textContent = this.songs[this.currentIndex].name;
        audio.src = this.songs[this.currentIndex].path;
    },

    loadPrevSong() {
        this.currentIndex--;
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
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