class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(name, salary, position, department) {
        if ([name, salary, position, department].includes("") || [name, salary, position, department].includes(undefined) || [name, salary, position, department].includes(null)) {
            throw new Error("Invalid input!");
        }

        if (salary < 0) {
            throw new Error("Invalid input!");
        }

        if (this.departments.hasOwnProperty(department)) {
            this.departments[department].push({
                name, salary, position
            });
        } else {
            this.departments[department] = [{
                name,
                salary,
                position
            }];
        }
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let bestDep;
        let bestAvgSal = 0;

        for (let department of Object.entries(this.departments)) {
            let depName = department[0];
            let employeesArr = department[1];
            let salarySum = 0;
            for (let employee of employeesArr) {
                salarySum += employee.salary;
            }
            let avg = (salarySum / employeesArr.length).toFixed(2);

            if (avg > bestAvgSal) {
                bestAvgSal = avg;
                bestDep = depName;
            }
        }

        let result = `Best Department is: ${bestDep}\nAverage salary: ${bestAvgSal}\n`;

        let bestEmployees = this.departments[bestDep].sort((a, b) => {
            if (a.salary !== b.salary) {
                return b.salary - a.salary;
            } else {
                return a.name.localeCompare(b.name);
            }
        });

        for (let employee of bestEmployees) {
            result += `${employee.name} ${employee.salary} ${employee.position}\n`;
        }

        return result.trim();

    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
