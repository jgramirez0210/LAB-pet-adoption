


const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://media.istockphoto.com/id/1199279669/photo/big-eyed-naughty-obese-cat-behind-the-desk-with-red-hat-grey-color-british-sort-hair-cat.webp?b=1&s=170667a&w=0&k=20&c=ohoTPRNiNT38ItF9sncBQqRXFG0Ra7TS8tnv0ZgWDec=",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "data:image/jpeg;base64,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"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://images.readwrite.com/wp-content/uploads/2018/03/t-rex-dino-quiz-e1490854556549.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://www.nation.co.ke/image/view/-/4078922/highRes/1742693/-/maxw/600/-/1453yvh/-/DINO.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/2/12/enhanced/webdr15/anigif_enhanced-29802-1446485228-10.gif?crop=250:165;0,0&downsize=715"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "http://funnyanimalphoto.com/wp-content/uploads/2013/08/cat_caught_mouse_thegatewaypundit.jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "http://funbk.s3.amazonaws.com/wp-content/uploads/2016/06/funny-cat-video-which-will-make-you-laugh-louder.jpg"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "http://lsae2.iypcdn.com/static//modules/uploads/photos/language1/dino-live-22.jpg?119"
    }
  ];
  
  let domString = "";

  for (let pet of pets) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <img src="${pet.imageUrl}" class="card-img-top" alt="...">
      <h5 class="card-title">${pet.name}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${pet.color}</h6>
      <p class="card-text">${pet.specialSkill}</p>
      <h6 class="card-subtitle mb-2 text-body-secondary">${pet.type}</h6>
    </div>
  </div>`;
  }
  
  app.innerHTML = domString;
  