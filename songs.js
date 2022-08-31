const listSongs = [
    {
        name: "Thủ đô Cypher",
        singer: "RPT Orijinn, LOW G, RZMas, RPT MCK",
        path: "./assets/music/song1.mp3",
        image: " "
    }, 
    {
        name: "Suy",
        singer: "RPT MCK",
        path: "./assets/music/song2.mp3",
        image: " "
    },
    {
        name: "Blue Tequila",
        singer: "Apple",
        path: "./assets/music/song3.flac",
        image: " "
    },
    {
        name: "Chỉ một đêm nữa thôi",
        singer: "MCK & Tlinh",
        path: "./assets/music/song4.mp3",
        image: " "
    },
    {
        name: "Chìm sâu",
        singer: "MCK & Trung Trần",
        path: "./assets/music/song5.flac",
        image: ""
    },
    {
        name: "Chuyện rằng",
        singer: "Thịnh Suy",
        path: "./assets/music/song6.flac",
        image: ""
    },
    {
        name: "Đã lỡ yêu em nhiều",
        singer: "Justatee",
        path: "./assets/music/song7.flac",
        image: ""
    },
    {
        name: "Slow dancing in the dark",
        singer: "Joji",
        path: "./assets/music/song8.flac",
        image: ""
    },
    {
        name: "Simple Love",
        singer: "W\\n",
        path: "./assets/music/song9.mp3",
        image: ""
    },
    {
        name: "Midsummer Madness",
        singer: "88rising",
        path: "./assets/music/song10.flac",
        image: ""
    },
    {
        name: "OK Nah Nah",
        singer: "",
        path: "./assets/music/song11.mp3",
        image: ""
    },
    {
        name: "LAVIAI",
        singer: "Wxrdie, HIEUTHUHAI",
        path: "./assets/music/song12.mp3",
        image: ""
    },
    {
        name: "Ginseng Strip 2002",
        singer: "Dan Nguyen",
        path: "./assets/music/song13.mp3",
        image: ""
    },
    {
        name: "Đốt",
        singer: "Ngọt",
        path: "./assets/music/song14.flac",
        image: ""
    },
    {
        name: "Flexin trên Circle K",
        singer: "Low G",
        path: "./assets/music/song15.mp3",
        image: ""
    },
    {
        name: " ",
        singer: " ",
        path: "./assets/music/song16.mp3",
        image: ""
    },
    {
        name: "Tay to",
        singer: "MCK",
        path: "./assets/music/song17.mp3",
        image: ""
    },
    {
        name: "Thắc mắc",
        singer: "Thịnh Suy",
        path: "./assets/music/song18.mp3",
        image: ""
    },
    {
        name: "Thanh Xuân",
        singer: "DaLab",
        path: "./assets/music/song19.flac",
        image: ""
    },
    {
        name: "Ghé qua",
        singer: "Tofu, PC",
        path: "./assets/music/song20.mp3",
        image: ""
    },
    {
        name: "Thờ er",
        singer: "MCK",
        path: "./assets/music/song21.mp3",
        image: ""
    },
    {
        name: "Tình đắng như ly cà phê",
        singer: "Nger",
        path: "./assets/music/song22.mp3",
        image: ""
    },
    {
        name: "Tiny love",
        singer: "Thịnh Suy",
        path: "./assets/music/song23.flac",
        image: ""
    },
    {
        name: "Vì anh đâu có biết",
        singer: "Mahidu, Vũ",
        path: "./assets/music/song24.mp3",
        image: ""
    },
    {
        name: "Xích thêm chút",
        singer: "MCK",
        path: "./assets/music/song25.mp3",
        image: ""
    },
    {
        name: "Your smile",
        singer: "Obito, hnhngan",
        path: "./assets/music/song26.flac",
        image: ""
    },
]

export {listSongs};


/*
render() {
        const htmls = this.songs.map( song => `
            <div class="song">
                <div class="thumb" style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                <h3 class="title">${song.name}</h3>
                <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
        `)

        $('.playlist').innerHTML = htmls.join('')
    },
    handleEvents() {
        const cdWidth = cd.offsetWidth;

        window.onscroll = () => {            
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;
            
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px': 0;
            cd.style.opacity = newCdWidth / cdWidth - 0.1;
        }   
        
        playBtn.onclick = () => {
            if( audio.paused) {
                audio.play();
                player.classList.add('playing');

                return;
            }

            audio.pause();
            player.classList.remove('playing')
            
        }

        audio.ontimeupdate = () => {
            console.log(audio.currentTime)
        }
    },
    defineProperties() {
        Object.defineProperty(this, "currentSong", {
            get() {
                return this.songs[this.currentIndex];
            }
        })

    },
    loadCurrentSong() { 
        header.textContent = this.currentSong.name;
        cbThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },

 

    start() {
        this.defineProperties();
        this.handleEvents();
        this.loadCurrentSong();

        this.render();
    }

    */