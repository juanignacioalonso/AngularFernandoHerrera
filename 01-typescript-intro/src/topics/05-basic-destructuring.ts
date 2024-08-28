interface AudioPlayer {
    audioVolume:number;
    songDuration:number;
    song :string;
    details:Details;
}

interface Details {
    author:string;
    year:number;
} 


const audioPlayer : AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Ed Sheeran",
        year: 2015
    }
}

const {song:anotherSong, songDuration:durtion, details} = audioPlayer;

const {author} = details

//console.log('Song: ', anotherSong)
//console.log('Duration: ', durtion)
//console.log('Detalle: ', author)




//const dbz: string[]=['Goku','Vegueta','Bulma'];

const [p1,p2,bulma]: string[]=['Goku','Vegueta','Bulma'];

console.log('Personaje 3:',bulma);





export{}