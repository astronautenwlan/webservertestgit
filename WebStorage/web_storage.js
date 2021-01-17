let gameID = "123123"

localStorage.setItem(gameID, "That is my Name")
console.log(localStorage.getItem(gameID))



let testWalter = {
    "name":"Walter",
    "game":"bowling",
    "weapons":["uzi", "pistol", "anger"]
}
let testWalterString = JSON.stringify(testWalter)

localStorage.setItem(gameID, testWalterString)
console.log(localStorage.getItem(gameID))  // this is just the string version of the object testWalter
let objectWalterAgain = JSON.parse(localStorage.getItem(gameID))
console.log(objectWalterAgain)  // now an object again, like before
console.log(objectWalterAgain.weapons[2])