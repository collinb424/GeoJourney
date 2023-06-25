function score(miles) {
    return Math.round(5000*Math.exp(-1*miles/500));
}

export { score };