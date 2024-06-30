function speedDetector(speed) {
    const speedLimit = 70;
    const pointsPerDemerit = 5;
    const maxPointsBeforeSuspension = 12;

    if (speed <= speedLimit) {
        return "Ok";
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / pointsPerDemerit);
        
        if (demeritPoints >= maxPointsBeforeSuspension) {
            return "License suspended";
        } else {
            return "Points: " + demeritPoints;
        }
    }
}

let salaryDetails = calculateNetSalary(50000, 10000);
