let firstAnswer = window.prompt('Do you head left, right or straight?') //1
if (firstAnswer === 'left') { //left
    let secondAnswer = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you follow it, or continue on your path?`)
    if (secondAnswer === 'follow') { //left + follow
        let thirdAnswer = window.prompt(`You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.`)
        if (thirdAnswer === 'stay') { //left + follow + stay
            let fourthAnswer = window.alert(`You live happily amongst the cats for the rest of your days.`)
        } else if (thirdAnswer === 'spread') { //left + follow + spread
            let fourthAnswer = window.alert(`After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless`)
        }
    } else if (secondAnswer === 'continue') { //left + continue
        let thirdAnswer = window.prompt(`You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?`)
        if (thirdAnswer === 'ladder') { //left + continue + ladder
            let fourthAnswer = window.alert(`After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.`)
        } else if (thirdAnswer === 'staircase') { // left + continue + staircase
            let fourthAnswer = window.alert(`After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.`)
        }
    }
} else if (firstAnswer === 'right') { //right
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
On the other side of him, you see a shiny chest of treasure. Another path would 
lead you away from the dragon altogether. Which path do you take?`)
    if (secondAnswer === 'past') { //right + past the dragon
        let thirdAnswer = window.prompt(`The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:`)
        if (thirdAnswer === 'stay') { //right + past the dragon + stay
            let fourthAnswer = window.alert(`You and the dragon have an uplifting conversation about local politics and become lifelong friends.`)
        } else if (thirdAnswer === 'run') { //right + past the dragon + run
            let fourthAnswer = window.alert(`Quickly, you run back to the cave's entrance. Sheepish, you return home.`)
        }
    } else if (secondAnswer === 'away') { //right + away from the dragon
        let thirdAnswer = window.prompt(`After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?`)
        if (thirdAnswer === 'draw') { //right + away from the dragon + draw
            let fourthAnswer = window.alert(`You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.`)
        } else if (thirdAnswer === 'pick') { //righy away from the dragon + pick it
            let fourthAnswer = window.alert(`You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.`)
        }
    }
} else if (firstAnswer === 'straight') { //straight
    let secondAnswer = window.prompt(`You come across a lake with a small island in the middle of it. Do you choose to swim to it or use the boat?`)
    if (secondAnswer === 'swim') { //straight + swim
        let thirdAnswer = window.prompt(`As you swim across you see a school of fish swimming towards, going away from the island. Do you continue swimming towards the island or follow the fish?`)
        if (thirdAnswer === 'island') { // straight + swim + keep going towards the island
            let fourthAnswer = window.alert(`Because you ignored the obvious sign that the school of fish were fleeing from danger, you end up getting swallowed the loch ness monster :(`)
        } else if (thirdAnswer === 'go with the fish') { //straight + swim + follow the fish away from the island
            let fourthAnswer = window.alert(`You followed the school of fish away from the island. They congratulate you on following the obvious signs of danger and give you a seashell signed by Nemo!`)
        }
    } else if (secondAnswer === 'boat') { //straight + use the boat
        let thirdAnswer = window.prompt(`You get on your boat and paddle towards the island, when you look inside you see a fishing rod. You gaze at the fishing rod and wonder if you should stop and start fishing or venture on to the island.`)
        if (thirdAnswer === 'go fishing') { //straight + use the boat + use the fishing rod to go fishing
            let fourthAnswer = window.alert(`You sit in your boat with your rod casted for hours, the sun is setting and you haven't even gotten a nibble. You decide it's late and that you should head home.`)
        } else if (thirdAnswer === 'venture') { //straight + use the boat + venture towards the island
            let fourthAnswer = window.alert(`You get to the island after paddling for about ten minutes. Once you step off the boat, you nearly step on a hedgehog stranded on the island with no way back. You decide to take it home and give a nice and loving home. You name it "Sonic".`)
        }
    }
}
