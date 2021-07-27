const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

const showResults = (katas, results) => {
    const body = document.querySelector("body")
    const div = document.createElement('div')
    const p = document.createElement('p')
    const kataTitle = document.createElement('h2')
    p.textContent = JSON.stringify(results)
    kataTitle.innerHTML = katas
    div.appendChild(kataTitle)
    div.appendChild(p)
    body.appendChild(div)
}

const kata1 = () => {
    showResults("Kata 1", gotCitiesCSV)
   return gotCitiesCSV
}

kata1()

const kata2 = () => {
    showResults("Kata 2", bestThing.split(" "))
   return bestThing.split(" ")
}

kata2()

const kata3 = () => {
    showResults("Kata 3", gotCitiesCSV.replace(/(,)+/g, "; "))
    return gotCitiesCSV.replace(/(,)+/g, "; ")
}

kata3()

const kata4 = () => {
    showResults("Kata 4", lotrCitiesArray.join(", "))
    return lotrCitiesArray.join(", ")
}

kata4()

const kata5 = () => {
    showResults("Kata 5", lotrCitiesArray.slice(0, 5))
    return lotrCitiesArray.slice(0, 5)
}

kata5()

const kata6 = () => {
    showResults("Kata 6", lotrCitiesArray.slice(3, 8))
    return lotrCitiesArray.slice(3, 8)
}

kata6()

const kata7 = () => {
    showResults("Kata 7", lotrCitiesArray.slice(2, 5))
    return lotrCitiesArray.slice(2, 5)
}

kata7()

const kata8 = () => {
    lotrCitiesArray.splice(2, 1)
    showResults("Kata 8", lotrCitiesArray)
    return lotrCitiesArray
}

kata8()

const kata9 = () => {
    lotrCitiesArray.splice(5, 2)
    showResults("Kata 9", lotrCitiesArray)
    return lotrCitiesArray
}

kata9()

const kata10 = () => {
    lotrCitiesArray.splice(2, 0, "Rohan")
    showResults("Kata 10", lotrCitiesArray)
    return lotrCitiesArray
}

kata10()

const kata11 = () => {
    lotrCitiesArray.splice(5, 1, "Deadest Marshes")
    showResults("Kata 11", lotrCitiesArray)
    return lotrCitiesArray
}

kata11()

const kata12 = () => {
    let output = bestThing.split("").slice(0, 14)
    showResults("Kata 12", output.join(""))
    return output.join("")
}

kata12()

const kata13 = () => {
    let output = bestThing.split("").slice(69, 81)
    showResults("Kata 13", output.join(""))
    return output.join("")
}

kata13()

const kata14 = () => {
    let output = bestThing.split("").slice(23, 38)
    showResults("Kata 14", output.join(""))
    return output.join("")
}

kata14()

const kata15 = () => {
    showResults("Kata 15", bestThing.substring(69, 81))
    return bestThing.substring(69, 81)
}

kata15()

const kata16 = () => {
    showResults("Kata 16", bestThing.substring(23, 38))
    return bestThing.substring(23, 38)
}

kata16()

const kata17 = () => {
    lotrCitiesArray.pop()
    showResults("Kata 17", lotrCitiesArray)
    return lotrCitiesArray
}

kata17()

const kata18 = () => {
    lotrCitiesArray.push("Deadest Marshes")
    showResults("Kata 18", lotrCitiesArray)
    return lotrCitiesArray
}

kata18()

const kata19 = () => {
    lotrCitiesArray.shift()
    showResults("Kata 19", lotrCitiesArray)
    return lotrCitiesArray
}

kata19()

const kata20 = () => {
    lotrCitiesArray.unshift("Mordor")
    showResults("Kata 20", lotrCitiesArray)
    return lotrCitiesArray
}

kata20()


//Katas bonus

const kataBonus1 = () => {
    showResults("Kata Bonus 1", bestThing.split(" ").indexOf("only"))
    return bestThing.split(" ").indexOf("only")
}

kataBonus1()

const kataBonus2 = () => {
    showResults("Kata Bonus 2", bestThing.split(" ").indexOf("bit"))
    return bestThing.split(" ").indexOf("bit")
}

kataBonus2()

const kataBonus3 = () => {
    let gotCities = gotCitiesCSV.split(",")
    let output = []
    for (let i = 0; i < gotCities.length; i++) {
        if (gotCities[i].includes("aa") || gotCities[i].includes("ii") || gotCities[i].includes("ee") || gotCities[i].includes("oo") || gotCities[i].includes("uu")) {
            output.push(gotCities[i])
        }
    }
    showResults("Kata Bonus 3", output)
    return output
}

kataBonus3()

const kataBonus4 = () => {
    let output = []
    for (let i = 0; i < lotrCitiesArray.length; i++) {
        if (lotrCitiesArray[i].includes("or")) {
            output.push(lotrCitiesArray[i])
      }
    }
    showResults("Kata Bonus 4", output)
    return output
}

kataBonus4()

const kataBonus5 = () => {
    let dados = bestThing.split(" ")
    let output = []
    for (let i = 0; i < dados.length; i++) {
        if (dados[i].startsWith("b")) {
            output.push(dados[i])
        }
    }
    showResults("Kata Bonus 5", output)
    return output
}

kataBonus5()

const kataBonus6 = () => {
    if (lotrCitiesArray.includes("Mirkwood")) {
        showResults("Kata Bonus 6", "Sim")
        return "Sim"
    }
    showResults("Kata Bonus 6", "Não")
    return "Não"
}

kataBonus6()

const kataBonus7 = () => {
    if (lotrCitiesArray.includes("Hollywood")) {
        showResults("Kata Bonus 7", "Sim")
        return "Sim"
    }
    showResults("Kata Bonus 7", "Não")
    return "Não"
}

kataBonus7()

const kataBonus8 = () => {
    showResults("Kata Bonus 8", lotrCitiesArray.indexOf("Mirkwood"))
    return lotrCitiesArray.indexOf("Mirkwood")
}

kataBonus8()

const kataBonus9 = () => {
   return lotrCitiesArray.find((item) => {
       if (item.includes(" ")) {
        showResults("Kata Bonus 9", item)   
        return item
       }
   })
}

kataBonus9()

const kataBonus10 = () => {
    showResults("Kata Bonus 10", lotrCitiesArray.reverse())
    return lotrCitiesArray.reverse()
}

kataBonus10()

const kataBonus11 = () => {
    showResults("Kata Bonus 11", lotrCitiesArray.sort())
    return lotrCitiesArray.sort()
}

kataBonus11()

const kataBonus12 = () => {
    showResults("Kata Bonus 12", lotrCitiesArray.sort((a, b) => a.length - b.length))
    return lotrCitiesArray.sort((a, b) => a.length - b.length)
}

kataBonus12()