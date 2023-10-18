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
      imageUrl: "https://i1.pickpik.com/photos/536/869/197/young-cat-cat-cats-pet-preview.jpg"
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
      imageUrl: "https://cdn.pixabay.com/photo/2015/02/14/10/16/cat-636172_640.jpg"
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
      imageUrl: "https://img.freepik.com/free-photo/perfect-companion-way-english-cocker-spaniel-young-dog-is-posing-cute-playful-braun-doggy-pet-is-sitting-full-attention-isolated-red-background-concept-motion-action-movement_155003-36386.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696896000&semt=ais"
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
      imageUrl: "https://cdn.pixabay.com/photo/2012/04/30/11/08/brown-44833_960_720.png"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/013/849/314/small/cute-gray-cat-looks-into-the-distance-with-curiosity-on-a-yellow-background-interest-high-attention-and-caution-curious-pet-in-search-of-adventures-events-hunting-instincts-copy-space-banner-photo.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://png.pngtree.com/png-vector/20220823/ourmid/pngtree-wild-brown-dinosaur-megalosaurus-predator-childish-poster-dinosaur-vector-png-image_48264658.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/013/758/996/small/small-blue-dog-illustration-on-white-background-free-vector.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://st.depositphotos.com/1052079/3767/v/450/depositphotos_37676343-stock-illustration-cats-claws-scratch-a-background.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "data:image/jpeg;base64,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"
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
  const app = document.querySelector("#app")
  app.innerHTML = domString;
  
