window.onload = function() {
    pickRandomHat();
}

function pickRandomHat() {
    var hats = ['img/backwards_hat.png',
                'img/elf_hat.png',
                'img/graduation_hat.png',
                'img/mcdonalds_hat.png',
                'img/party_hat.png',
                'img/pirate_hat.png',
                'img/santa_hat.png',
                'img/tiny_top_hat.png',
                'img/turnup_hat.png',
                'img/witch_hat.png'];

    hat_text = {'img/backwards_hat.png' : ["Casual", "I'm too cool for school", "My eys are still succeptible to the sun"],
                'img/elf_hat.png' : ["Festive", "I work for Santa", "I'm technically a slave"],
                'img/graduation_hat.png' : ["Formal", "I graduated school", "Few recover this hat after throwing it in the air"],
                'img/mcdonalds_hat.png' : ["Casual", "I like McDonalds more than you", "This isn't an officially licensed hat"],
                'img/party_hat.png' : ["Casual", "I'm at a part, but it's for a young person", "These are technically unicorn simulators"],
                'img/pirate_hat.png' : ["Formal", "I've seen all the Pirates of the Carribean Movies", "Russel Crowe got famous wearing one of these"],
                'img/santa_hat.png' : ["Festive", "I AM Santa", "This hat makes it ok for Children to sit in your lap"],
                'img/tiny_top_hat.png' : ["Formal", "I probably own a monicle", "I might be the Monopoly Guy..."],
                'img/turnup_hat.png' : ["Casual", "I like to party hard", "The alternative spelling - turnip - is in no way affiliated with partying"],
                'img/witch_hat.png' : ["Festive", "I like lazy costumes", "When wearing, you may be succeptible to immolation"]};

    
    random_hat = hats[Math.floor(Math.random()*hats.length)]; 
    var hat = document.getElementById("hat_image");
    hat.src = random_hat;

    //var hat_info = document.getElementById("infotext");
    document.getElementById('class').innerHTML = "Class: ".concat(hat_text[random_hat][0]);
    document.getElementById('saysaboutme').innerHTML = "Says About Me: ".concat(hat_text[random_hat][1]);
    document.getElementById('interestingfact').innerHTML = "Interesting Fact: ".concat(hat_text[random_hat][2]);

}
