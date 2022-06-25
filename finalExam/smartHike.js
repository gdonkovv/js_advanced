class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak)) {
            return `${peak} has already been added to your goals`;
        }

        this.goals[peak] = altitude;
        return `You have successfully added a new goal - ${peak}`;
    }

    hike(peak, time, difficultyLevel) {
        if (this.goals.hasOwnProperty(peak) === false) {
            throw new Error(`${peak} is not in your current goals`);
        }
        if (this.resources <= 0) {
            throw new Error("You don't have enough resources to start the hike");
        }



        let diff = this.resources - (time * 10);
        if (diff < 0) {
            return "You don't have enough resources to complete the hike";
        } else {
            this.resources -= time*10;
            this.listOfHikes.push({
                peak,
                time,
                difficultyLevel
            });
            return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
        }
    }

    rest(time) {
        this.resources += time * 10;
        if (this.resources >= 100) {
            this.resources = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }
        return `You have rested for ${time} hours and gained ${time * 10}% resources`;
    }

    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        }

        if (criteria !== "all") {
            let filteredOnCriteria = this.listOfHikes.filter(x => x.difficultyLevel === criteria);
            if (filteredOnCriteria.length === 0) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            } else {
                let bestHike = filteredOnCriteria.sort((a, b) => a.time - b.time)[0];
                return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
            }
        }

        let result = "All hiking records:\n";
        let hikes = this.listOfHikes.map(x => `${this.username} hiked ${x.peak} for ${x.time} hours`);
        result += hikes.join("\n");
        return result;

    }
}

const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));


