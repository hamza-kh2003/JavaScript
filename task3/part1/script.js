function tellFortune(jobTitle, geographicLocation, partnerName, numOfChildren) {
  return `you will be a ${jobTitle} in ${geographicLocation},and married to ${partnerName} with ${numOfChildren} kids.`;
}

console.log(tellFortune("software engineer", "Jordan", "Alice", 3));
