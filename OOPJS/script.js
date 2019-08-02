function SuperHero(job,){
    this.color = color;
    this.size = size;
    console.log(color + ' ' + size);

    this.change = function()
    {
        this.color='red';
        this.size='medium';
        console.log(this.color + ' ' + this.size);
    }
}
var Muath = new Roses("white","large");
Muath.change()
console.log(superHero.fullName());
///////////////////////////////////////////////////////////////////////
function song(songName,bandName){
    this.songName = songName;
    this.bandName = bandName;
}

var song1= new song('A day in the Life','The Beatles');

song.prototype.countName = function(){
    return (`${this.songName}`.split(" ").length)
}

song.prototype.createElement = function(){
    $('body').append("SongName "  + `${this.songName}` + " bandName " + `${this.bandName}` )
}
console.log(song1.countName());
// document.write(song1.countName());
song1.createElement();

//////////////////////////////////////////////////////////////////////////////////////////

function Cat(name,tiredness,hunger,lonliness,happiness){
    this.name = name;
    this.tiredness = tiredness;
    this.hunger = hunger;
    this.lonliness = lonliness;
    this.happiness = happiness;
    var arr = ["", "not "];
    this.feed = function(){
        return this.name+ " she is "+arr[Math.floor(Math.random()* 2)] + ""+this.tiredness;
    }
    this.sleep = function(){
        return this.name+" she is "+arr[Math.floor(Math.random()* 2)] + ""+this.hunger;
    }
    this.pet = function(){
        return this.name+" she is "+arr[Math.floor(Math.random()* 2)] + ""+this.lonliness;
    }
    this.happy = function(){
        return this.name+" she is "+arr[Math.floor(Math.random()* 2)] + ""+this.happiness;
    }
}

var cat1 = new Cat("Rexana","tired","hungry","lonly","happy");

console.log(cat1.feed());
console.log(cat1.sleep());
console.log(cat1.pet());
console.log(cat1.happy());
console.log(cat1.happy());