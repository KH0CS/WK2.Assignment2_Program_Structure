// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #


for (let pound = "#"; pound.length <= 4; pound += "#") {
  console.log(pound);
}


for (let pounds = "#"; pounds.length <= 3; pounds += "#") {
     console.log(pounds);
}
//I've tried "for (let i = 1; i <=7; i++) { console.log(i = "#"); }" but that only gave me an output of "#""
// PROGRESS I kept getting a "4" next to the "#" so I looked up why that happens and it said it's a count of how many times that was logged so what I asked for gave me 4. It may not make sense but it made me figure out how to separate 
  