const token = process.env.DISCORD_TOKEN
const prompt = "wisdom"
const lifePrompt = "life"
const hearPrompt = "hear"
const og = "og"

const discord = require("discord.js")
const client = new discord.Client()
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", (msg) => {
    const fromSelf = msg.author === client.user
    if (fromSelf) {
        return
    }

    const text = msg.content.toLowerCase()
    const isMentioned = msg.mentions.has(client.user)
    const isMentionedExt = isMentioned || text.includes(lifePrompt) || text.includes(hearPrompt)
    const wisdomPrompted = text.includes(prompt)
    // if (isMentioned && wisdomPrompted) {
    if (isMentionedExt && wisdomPrompted) {
        console.log("Wisdom requested")
        if (text.includes(og)) {
            msg.channel.send(generateSayingOG())
        } else {
            msg.channel.send(generateSaying())
        }
    }
    if (isMentioned && text.includes("help")) {
        msg.reply("I'm here to impart wisdom. Just ask to hear more when you need it.")
    }
})
client.login(token)

function generateSaying() {
    var comparisons = [
        "a plate of food",
        "staring at the ceiling",
        "watching urgently as the dog walks in from his long nap",
        "coding at 3 o'clock in the morning",
        "waking up to find that your bed is gone",
        "plugging in a USB for the third time",
        "eating a sandwich",
        "getting a song stuck in your head",
        "a 17 karat diamond",
        "a school textbook",
        "the Mandalorian--or really just anything in Star Wars",
        "housekeeping",
        "when your favorite song comes on the radio",
        "ordering a pizza",
        "snow rolling",
        "a T-Rex shampooing his hair",
        "painting a picture of a butterfly",
        "saying that a hot dog is a sandwich",
    ];
    
    var explanations = [
        "It is super expensive.",
        "Just when you think you know, you can't remember.",
        "It fits...sometimes.",
        "You count to one hundred more times than you would like.",
        "If you look at it just right, you can see the heart engraved in the middle.",
        "Enough said.",
        "You can summarize it in 10 words or less.",
        "Assuming that people are spherical and live in a vacuum, everything works out fine.",
        "Your mom would be so proud.",
        "... wat",
        "One minute, you're trying to solve the case, and the next minute, you're the culprit.",
        "There are a million different ways you could represent it.",
        "Sooner or later, you'll run out of paper and face another paper jam.",
        "A little more mayo never hurts.",
        "Like most stories, this one starts at a mini-mart. The rest is history.",
        "No wait...that's not quite right.",
    ];
    
    var iComparison = Math.floor(comparisons.length*Math.random());
    var iExplanation = Math.floor(explanations.length*Math.random());
    
    return `Life is like ${comparisons[iComparison]}...\n\n${explanations[iExplanation]}`;
}

function generateSayingOG() {
    var comparisons = [
        "a plate of food",
        "staring at the ceiling",
        "watching urgently as the dog walks in from his long nap",
        "coding at 3 o'clock in the morning",
        "waking up to find that your bed is gone",
        "eating a sandwich",
        "getting a song stuck in your head",
        "a 17 karat diamond",
        "school textbook",
    ];
    
    var explanations = [
        "It is super expensive.",
        "Just when you think you know, you can't remember.",
        "You say something on a really low level and scale it up to something astronomically large. Afterward, you realize that 'scale' doesn't always mean the same thing.",
        "It fits...sometimes.",
        "You count to one hundred more times than you would like.",
        "If you look at it just right, you can see the heart engraved in the middle.",
        "Enough said.",
        "You can summarize it in 10 words or less.",
        "Assuming that people are spherical and live in a vacuum, everything works out fine.",
    ];
    
    var iComparison = Math.floor(comparisons.length*Math.random());
    var iExplanation = Math.floor(explanations.length*Math.random());
    
    return `Life is like ${comparisons[iComparison]}...\n\n${explanations[iExplanation]}`;
}
