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
      imageUrl: "https://cdn.mos.cms.futurecdn.net/2gqUK55fXFRnyuHyzuCYMn.jpg",
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
      imageUrl: "https://i2.pickpik.com/photos/618/305/180/dinosaur-gad-mammal-dino-preview.jpg"
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
      imageUrl: "https://static.vecteezy.com/system/resources/thumbnails/013/687/657/small/orange-dinosaur-illustration-on-white-background-free-vector.jpg"
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
      imageUrl: "https://png.pngtree.com/png-vector/20191206/ourlarge/pngtree-a-red-dinosaur-vector-or-color-illustration-png-image_2030880.jpg"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://img.freepik.com/premium-photo/cat-with-yellow-eyes-sits-table_900396-5261.jpg"
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
      imageUrl: "https://plus.unsplash.com/premium_photo-1664303034905-2e850c5430a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJvd24lMjBkb2d8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://image.shutterstock.com/image-photo/womans-hand-stroking-ginger-cat-260nw-2143135507.jpg"
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
      imageUrl: "https://img.freepik.com/free-vector/tyrannosaurus-dinosaur-cartoon-character-sticker_1308-76137.jpg"
    }
  ];
   
const filterCards = (array) => {
  let domString = "";
  array.forEach((pet) => {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
    <img src="${pet.imageUrl}" class="card-img-top" alt="...">
      <h5 class="card-title">${pet.name}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary">${pet.color}</h6>
      <p class="card-text">${pet.specialSkill}</p>
      <footer>
      <h6 class="card-subtitle mb-2 text-body-secondary">${pet.type}</h6>
      </footer>
      <button id="delete--${pet.id}">Delete</button>
    </div>
  </div>`;
  })

  
  app.innerHTML = domString;
}
const app = document.querySelector("#app");


app.addEventListener("click", deleteCard)
const filterByType = (type) => {
  return pets.filter(pet => pet.type === type)
}


const btnFilterCat = document.querySelector("#btn-cat");

btnFilterCat.addEventListener('click',() => {
  const filteredPets = filterByType('cat');
  filterCards(filteredPets)
})


const btnFilterDino = document.querySelector("#btn-dino");

btnFilterDino.addEventListener('click',() => {
  const filteredPets = filterByType('dino');
  filterCards(filteredPets)
})


const btnFilterDog = document.querySelector("#btn-dog");

btnFilterDog.addEventListener('click',() => {
  const filteredPets = filterByType('dog');
  filterCards(filteredPets)
})


const btnFilterAll = document.querySelector("#btn-all");

btnFilterAll.addEventListener('click',() => {
  filterCards(pets);
})

const form = document.querySelector('form')


const deleteCard = (event) => {
  if(event.target.id.includes("delete")){
    const [, id] = event.target.id.split("--");
    const index = pets.findIndex(obj => obj.id === Number(id));
    pets.splice(index, 1);
    filterCards(pets);
  }
}


const createCard = (event) =>{
  event.preventDefault()
    const newCard ={
      id: pets.length + 1,
      name: document.querySelector("#animalName").value,
      color: document.querySelector("#animalColor").value,
      specialSkill: document.querySelector("#specialSkill").value,
      formImgUrl: document.querySelector("#formImgUrl").value,
      catRadio: document.querySelector("#catRadio").check,
      dogRadio: document.querySelector("#dogRadio").check,
      dinoRadio: document.querySelector("#dinoRadio").check,
    }
    console.log(pets.name)
}

form.addEventListener('submit',createCard)
  createEvent.preventDefault();
  console.log("Form Submitted");
