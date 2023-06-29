function score(miles, location) {
    let maxDistance;
    if (location === 'Arizona') {
        maxDistance = 375;
        if (miles > maxDistance) return 0;
    }
    else {
        maxDistance = 7926;
    }
    const maxScore = 5000;

    const calculatedScore = maxScore * Math.pow(1 - (miles / maxDistance), 2);

    return Math.round(Math.max(0, Math.min(calculatedScore, maxScore)));
}

export { score };