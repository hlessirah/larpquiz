const express = require('express')
const app = express()
const PORT = 4040

app.set('view engine', 'ejs')

app.use(express.static('static'))

app.use(express.json())
app.use(express.urlencoded({ extended: false}))


app.get("/", (req, res) => {
    res.render('index')
});

app.get("/races", (req, res) => {
    res.render('races')
});

app.get("/classes", (req, res) => {
    res.render('classes')
});

app.get("/quiz", (req, res) => {
    res.render('quiz')
});

app.post("/form", (req, res) => {
    let race = {
        biata: 0,
        dryad: 0,
        elf: 0,
        highOrc: 0,
        human: 0,
        selunari: 0,
        sylvanborn: 0,
        darkElf: 0,
        dwarf: 0,
        highOgre: 0,
        hobling: 0,
        oathsworn: 0,
        stoneElf: 0,
        wylderkin: 0,
        npc: 0,
    }
    let playerClass = {
        fighter: 0,
        rogue: 0,
        scholar: 0,
        artisan: 0,
    }
    if(req.body.one == "a") {
        race.highOrc +=2
        race.highOgre +=2
        race.stoneElf +=2
        race.wylderkin +=2
        race.elf +=1
        race.dryad +=1
        race.selunari +=1
        race.dwarf +=1
        race.oathsworn +=1
        race.hobling +=1
        race.sylvanborn +=1
    }
    if(req.body.one == "b") {
        race.elf +=1
        race.dryad +=1
        race.selunari +=1
        race.dwarf +=1
        race.oathsworn +=1
        race.hobling +=1
        race.sylvanborn +=1
        race.highOrc -=2
        race.highOgre -=2
        race.stoneElf -=2
        race.darkElf -=2
        race.wylderkin -=2
    }
    if(req.body.one == "c") {
        race.human +=2
        race.npc +=1
        race.biata -=1
        race.dryad -=1
        race.elf -=1
        race.highOrc -=1
        race.selunari -=1
        race.sylvanborn -=1
        race.darkElf -=1
        race.dwarf -=1
        race.highOgre -=1
        race.hobling -=1
        race.oathsworn -=1
        race.stoneElf -=1
        race.wylderkin -=1
    }
    // QUESTION 2
    if(req.body.two == "a") {
        playerClass.fighter +=1
        playerClass.rogue +=1
        playerClass.scholar +=1
        playerClass.artisan -=1
    }
    if(req.body.two == "b") {
        playerClass.artisan +=1
        playerClass.scholar +=1
        playerClass.fighter -=1
        playerClass.rogue -=1
        race.npc +=1
    }
    // QUESTION 3
    if(req.body.three == "a") {
        race.darkElf +=1
        race.hobling +=1
        race.dwarf +=1
    }
    if(req.body.three == "b") {
        race.oathsworn +=1
        race.elf +=1
        race.stoneElf +=1
        race.highOgre +=1
    }
    if(req.body.three == "c") {
        race.selunari +=1
        race.biata +=1
        race.dwarf +=1
    }
    if(req.body.three == "d") {
        race.sylvanborn +=1
        race.wylderkin +=1
        race.highOrc +=1
        race.dryad +=1
        race.npc +=1
    }
    // QUESTION 4
    if(req.body.four == "a") {
        playerClass.fighter +=1
        race.highOrc +=1
        race.highOgre +=1
        race.oathsworn +=1
        race.dwarf +=1
        race.wylderkin +=1
    } 
    if(req.body.four == "b") {
        playerClass.rogue +=1
        race.hobling +=1
        race.sylvanborn +=1
        race.selunari +=1
        race.dryad +=1
    } 
    if(req.body.four == "c") {
        playerClass.scholar +=1
        playerClass.artisan +=1
        race.stoneElf +=1
        race.human +=1
        race.elf +=1
        race.darkElf +=1
        race.biata +=1
    } 
    if(req.body.four == "d") {
        race.npc +=1
    } 
    // QUESTION 5 - authority
    if(req.body.five == "a") {
        race.sylvanborn +=1
        race.selunari +=1
        race.stoneElf +=1
        race.elf +=1
        race.darkElf +=1
        race.wylderkin +=1
    }
    if(req.body.five == "b") {
        race.dryad +=1
        race.highOrc +=1
        race.highOgre +=1
        race.oathsworn +=1
        race.npc +=1
    }
    if(req.body.five == "c") {
        race.biata +=1
        race.hobling +=1
    }
    // QUESTION 6 - problems
    if(req.body.six == "a") {
        race.biata +=1
        race.darkElf +=1
        race.hobling +=1
        race.stoneElf +=1
    }
    if(req.body.six == "b") {
        race.highOrc +=1
        race.highOgre +=1
        race.dwarf +=1
        race.oathsworn +=1
        race.npc +=1
    }
    if(req.body.six == "c") {
        race.dryad +=1
        race.elf +=1
        race.human +=1
        race.selunari +=1
        race.sylvanborn +=1
        race.wylderkin +=1
    }
    // QUESTION 7 - combat style
    if(req.body.seven == "a") {
        playerClass.fighter +=1
        race.highOrc +=1
        race.dwarf +=1
        race.highOgre +=1
        race.oathsworn +=1
        race.wylderkin +=1
    }
    if(req.body.seven == "b") {
        playerClass.rogue +=1
        race.elf +=1
        race.darkElf +=1
        race.stoneElf +=1
    }
    if(req.body.seven == "c") {
        playerClass.scholar +=1
        race.stoneElf +=1
        race.biata -=1
        race.highOrc -=1
        race.highOgre -=1
        race.wylderkin -=1
    }
    if(req.body.seven == "d") {
        playerClass.artisan +=1
        race.dryad +=1
        race.hobling +=1
    }

    // QUESTION 8 - hobby
    if(req.body.eight == "a") {
        playerClass.fighter +=1
        race.highOrc +=1
        race.oathsworn +=1
        race.wylderkin +=1
    }
    if(req.body.eight == "b") {
        playerClass.rogue +=1
        race.dryad +=1
        race.elf +=1
        race.selunari +=1
    }
    if(req.body.eight == "c") {
        playerClass.artisan +=1
        race.highOgre +=1
        race.darkElf +=1
        race.dwarf +=1
        race.hobling +=1
    }
    if(req.body.eight == "d") {
        playerClass.scholar +=1
        race.biata +=1
        race.stoneElf +=1
    }
    if(req.body.eight == "e") {
        race.sylvanborn +=1
        race.npc +=1
    }
    // QUESTION 9 - LOTR
    if(req.body.nine == "a") {
        race.elf +=1
        playerClass.rogue +=1
    }
    if(req.body.nine == "b") {
        race.human +=1
        playerClass.fighter +=1
    }
    if(req.body.nine == "c") {
        race.hobling +=1
        playerClass.rogue +=1
    }
    if(req.body.nine == "d") {
        race.dwarf +=1
        playerClass.fighter +=1
    }
    if(req.body.nine == "e") {
        race.human +=1
        playerClass.rogue +=1
    }
    if(req.body.nine == "f") {
        race.human +=1
        playerClass.scholar +=1
    }
    if(req.body.nine == "g") {
        race.elf +=1
        playerClass.scholar +=1
    }
    if(req.body.nine == "h") {
        race.npc +=1
    }
    if(req.body.nine == "i") {
        race.dryad +=1
        playerClass.scholar +=1
    }
    if(req.body.nine == "j") {
        race.hobling +=1
        playerClass.artisan +=1
    }
    if(req.body.nine == "k") {
        race.npc +=1
    }
    if(req.body.nine == "l") {
        race.dryad +=1
        playerClass.rogue +=1
    }

    // QUESTION 10 - color
    if(req.body.ten == "a") {
        playerClass.fighter +=1
        race.highOrc +=1
        race.dwarf +=1
        race.highOgre +=1
        race.oathsworn +=1
    }
    if(req.body.ten == "b") {
        playerClass.scholar +=1
        race.elf +=1
        race.human +=1
        race.stoneElf +=1
    }
    if(req.body.ten == "c") {
        playerClass.artisan +=1
        race.dryad +=1
        race.wylderkin +=1
    }
    if(req.body.ten == "d") {
        playerClass.rogue +=1
        race.biata +=1
        race.darkElf +=1
        race.hobling +=1
    }
    if(req.body.ten == "e") {
        race.sylvanborn +=1
        race.selunari +=1
    }
    if(req.body.ten == "f") {
        race.npc +=1
    }

    //do the math to find the categories with the higest total, also if certain classes are tied, make it hybrid class, or if multiple races are tied, make NPC
        //find class values
        let arrKeyClass = Object.keys(playerClass);
        let arrValueClass = Object.keys( playerClass ).map(function ( key ) { return playerClass[key]; });
        let maxClass = Math.max.apply( null, arrValueClass );

        function getClass(arrKey, arrValue, max) {
        let finalArr = []
        for(let i=0; i<arrValue.length; i++) {
        if(arrValue[i] == max) {
            finalArr.push(arrKey[i])
        }
        }
        if(finalArr[0] == "fighter" && finalArr[1] == "scholar") {
        return "spellsword"
        } else if(finalArr[0] == "fighter" && finalArr[1] == "rogue") {
            return "scout"
        } else if(finalArr[0] == "rogue" && finalArr[1] == "scholar") {
            return "adept"
        } else {
        return finalArr[0]
        }
        }

        let finalClass = getClass(arrKeyClass, arrValueClass, maxClass)

        //find race values
        let arrKeyRace = Object.keys(race);
        let arrValueRace = Object.keys( race ).map(function ( key ) { return race[key]; });
        let maxRace = Math.max.apply( null, arrValueRace );

        function getRace(arrKey, arrValue, max) {
        let finalArr = []
        for(let i=0; i<arrValue.length; i++) {
            if(arrValue[i] == max) {
            finalArr.push(arrKey[i])
            }
        }
        if(finalArr.length > 2) {
            return "npc"
        } else if(finalArr.length == 2) {
            return finalArr[Math.floor(Math.random() * 2)]
            } else {
            return finalArr[0]
        }
        }

        let finalRace = getRace(arrKeyRace, arrValueRace, maxRace)

        if(finalRace == "npc") {
            finalClass = "npc"
        }

    //res.render
    res.render('result',  { finalRace, finalClass })
});





app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT)
  })