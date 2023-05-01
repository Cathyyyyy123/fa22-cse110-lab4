for (let prop in statistics) {
  if (prop.startsWith('r') || (typeof statistics[prop] === 'number' && statistics[prop] % 2 !== 0)) {
    console.log(statistics[prop]);
  }
}