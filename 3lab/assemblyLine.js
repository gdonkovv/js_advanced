function createAssemblyLine() {
    let hasClima = function (obj) {
        obj.temp = 21;
        obj.tempSettings = 21;
        obj.adjustTemp = function () {
            if (obj.temp < obj.tempSettings) {
                obj.temp++;
            } else if (obj.temp > obj.tempSettings) {
                obj.temp--;
            }
        }
    }

    let hasAudio = function (obj) {
        obj.currentTrack = {
            name: this.name,
            artist: this.artist
        }
        obj.nowPlaying = function () {
            if (this.currentTrack !== null) {
                console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
            }
        }
    }
    let hasParktronic = function (obj) {
        obj.checkDistance = function (distance) {
            let result = "";
            if (distance < 0.1) {
                result = "Beep! Beep! Beep!";
            } else if (distance < 0.25) {
                result = "Beep! Beep!";
            } else if (distance < 0.5){
                result = "Beep!";
            }
            console.log(result);
        }
    }

    let result = { hasClima, hasAudio,hasParktronic };

    return result;
}



const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);