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
      imageUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///9BaeE+Z+E7ZeA4Y+A2YuDu8fyGnuv8/f/y9f33+f7r7/xBauHV3fjh5/r4+v7n7PtIb+JigubJ0/ba4flcfuXN1/eQpeyvvvG/y/TEz/VYfOVNcuPk6fpriOdmheZTduNyjuh7lemhs++aru61xPOLoeutvvKfse52kegtXd9/meumuPCHn+uMpe2Vqu0yO6YSAAAPhElEQVR4nO1da3eqOhAtCSggoihqFUTw0frq8f//u2tUIBOoAhnEuu4+3+xZwjbJvGfy8fHHYHY7Tb9Czej6X62m36FW9LbUmjb9ErViPqLqzmj6LerEhiqEdJt+ixphRlRRtFPTr1EjXEoUhXh60+9RH/6pyhn7ftPvURsMn1wYvq80nWmMoKKtmn6R2nCgF4bqpOkXqQvz8LJJFfrT9JvUhU/rylA9NP0mNUFfXjepon41/So1Yexdl/B9Jc3xtkmV/azpV6kHxkG9EiT0Tf2n8ei2hDR6U6vtU4mX8E1Nmk77tknV3btuUv+2hv67ypn2TRnS9nuGoloxQUWxnMXW7jX9Qthwg4QgkzWaM3HfS56ORzxBxlEdbd4pHjUUCTKOzul9zuN4QTIEzxSVw7sEM9wgjyDT/NF7rGJ/l0/wbSgaB+0Xgkw3Rn9/o+rrOwTPy/j3z+JU+22P3sTN5I9v1LF/l+AZ1vpP60U7yCpCcRWdY9NvKYHWj/JoCRnFTdPvWRn60XrIj1G0xk2/aVVMnccryEBDt+lXrYauV4zgmeLgT1LsRw+lTEox+oMUza/iBM9ncfn3KK5o0T16YUiiu+JG77ycw1xUyqQbdfR9h8TnaDd/3ssXwbiwlEmX0VmOf+PYWWqqZz+VwQN0F2UOYUyRKoPTbN4yeuYZPZ4tczFp9EJhVruEGIUc1b1mhR7DaBAcZnFEjjE8m3cvcxbn7WoEbzSvoJSo/vD2jXbEilQWryJv521S+hDmQ4st1v6OMutubTZKLEbnUEpP3AFx4hSOccl5kMFLlIsZSyyCPKPJZd+T1QssIt4KnlXkMvH/V5cvJV7zJ/EsRdEI8mU3m6sBoa2bzneMByoavzPSgobhtRKH+M2qfXPqyagJEbzz7w6u39xsFUdnVdYWfcDQS41xI7p+NfEbNGzcNuIRZKALLpbajktxGotb9aYBMsGzKOWstO0t5EPChhRGZx0i8zubMPyZS7wx2kxkbhwVCBuWZejzFowd/4J00cAidiYEe4cyKhH/DD3JQT4/vGrOvPu5iYpQIZNY1Cj08NxFNLtf+Bv0QmQE8xnH2JYg4fCXd6kDurv2qrlKFx/w3n8QlvCjm2TpyOl5i2gfF9UWkFIviAbWnd2tBkJKyrCSbfo0J6p1DJxKC0i03czt9+3uavQbR+JktuIgsQjJc8IZxnFgVZKgRBsNb9tM70wXWt6XEHrMOBH/EqOeDJ5gf3fWPq0aq5jwpqU+DCzRXCdU2WbTptM0XU4/a15Ew/6nVFYQzkp8+VnkcBzPAsgabXIYzNNflAzqzP6b9vRA1coKws9uvw99s3Mu4TUWYVPCaJvryRtcYRX9roue3h9uAwl+RMkPl7U2S88bBNHy53Sc/RK+17kYJR3VU99gDLfLsPLxY1Dbv5Ul9Ltd17X7rTuqbsPVrdDTh2m0+rbb7Y7Hw9n539jtSKrJ1ni19BQ5+5P4Mueny+teZxktBiMv5DCK2uupW7GyozWbBGE15cBDtFPKoT/ink9S8B8olhf825SkaXSPu/ChkVUEdCm1j4z24zAXe01VU8NoPbMN84FO0XXTsGfbyKea1NlL4chZW71j4TgXOb+zM2h/z9x5y8wR3j12hrvT49fgwg6DHAP9kqx+mlml3oVSVfEXh9P3dNx1bXs+n9v2WTSdBdPmeGpHnqOoyG6tI9uF4JZOuxKFMhY+00S73S6KgoEXOhZL4yGcOhF0J2uIXDJQFUCUa7qO0otVgU/tBiodBzQmmAFnfMi3yvSOTXO4CxpIuzz6ppyoeTLoQbqO1Fw3TeIuqHyHehc18YMOupYl2Fu9NEE+GVgR/dzGlJcBzEJUwrA2RYYCBIYT1PwyOuQZGujZLWxsJRmO77amvACkZem/196kCPowp4fxtUB/5Eph+jWkKHFBD3JVFNNX36TSjXjrV9+kZ99CriZt+eqbVCEjqd4fc/T6DOWS0/bL63uuHLYShv7jRzQMokgFvDe4NXO1gH7KMFy9dADjCrmau0nTr18A6lYmNd1+/SVUVKkymNdXh8z0lgi26RW7cJ4KVWYGdFwj/NKQmp7Uedz23jzo4e0Zyqxh/+0Zzqs0ND4b/zO8i/7bM/wbkub99eFJwqbp/QmbRqqzrmKRwlMh13Z2+AsMpTzgv+AfykUx1oWG+TQK4ktFor5fP4ohGU0sPUnk+ZDsA+lWjCYSKlG0XfJRkVTFUKtaRDhcb46TyGGFetiEMpDMPemVDFOWSuiZRmd48uonKZshPVR5P5oMC9Hdk6fUV5aoIFQqHKvkDwmf8DJnP6NqjVrF4Eu2fnYrMYxg84Z73IV15ZL55vpKMKqofLITPbbOdOIhla0LoNKtSlVqvvLEmzleBUoNGoTuZNvNthXqaUhu8bxpT5cWOkcifROZW+UATfI9Nt3onpw96mYllnSPea9CIMO6U4hlbALUJntffnZO+XoT4tz32Oz1wsfqRCee/Oic/qDsIpLwUfV8bzgJQpQGBYpww1NvW5phkamh/elauinvDA2j6bNb1vomUbHgV2e8mQQ+GxFXnaeG0X3dKjUwlOFf4e827O7mFIUWVWmlthoSojRfT8s5iaTcna662eq70+NPNPIthaqapqm0cO8XXWIQ/OiUczCIV8GO0vVe77yg49nmuD39ay+DhxPJL9CQJq5sSi0iygV25k+Ro0EUpPGqv9+zkMsQY4p2q9CYS7LAmiz/XSIgRUYYT8xlmJFE6glrysN8UJwhztHIYxjuxB+a4t1htS3MkAxQRrvlMLRWXbEWFMEojWE7RRkiSbcsQxIac+FiGRLgzXgwikpTrOkgWYZnES0yVCd4Y4+KMkS7oC/L8Lw55kI6k+YNY6mIogylqnd4ZBnu+x/9JfiQSLepcyjI8LHfVBQZhoQw40qFT0OcXFV0DWWnGyTIMhywDwFDukAc69QpxJCM0H7UDEO1ff6doZcjP2qAQ7+ItiDKGu3kZxiyWmcD9kJKlZmIcItkSukATz1lGLKrfo0TZIg5I29WxKZBtKFyGM4zDMkKcYDzWmSY44/THd7zMgyJYrDJADxDYt27uKIkDPEePuIH4skkCubdQxmGocGCYnwAHiEYnGIYinQi90vI2ahtzKHfGYZsQqy+Agzl2oEAjC9xRypr8bYQYqFO/xQZXkZB6WDcEaZJMxPjiezLbVjVJ5/lAhAZqiwVAhki3nCcjUSxUyEwlOvryEBkqLHBm/o3eCTazNic6S30R7wFlFi4V0ZnGDI3Qv/kP8KbiutmExd7N8MQ+YozkeGesTkz5GfHyea3Y5inDEHinT93QSGKmLqXRWYNLxYv2E1oDIdZk/RS79gF0SlUG/Ejk0ogymWLQIZIdr6RzZCSkNmfYxAWIlvcOcri+K1rzAk0fGIx/M5G9bQVs5YEfZgzIFUGgqNErhdrTWtgmDPa5CZUhvxfiII8gVd0Ba/atg6Gm2yOW7tqPmAGoNqIDMIuJddLmkEWDIlhth0hjo7MwNMQbcQLzAm0mJYXQTbj7WOcAeM51Zex1Jw+leHP5aFDfIY5FbRxWTU8E9hXJwgM1WsnLDz7KAyzVdA0Vu1QcqOfwxNkeB31DOQ3zhp+igyJFfeGQ+1rIYafGcwTeKx2VUZAB+MwPIpGdxrzhTaihawtRIbXrwd2FA7DrciQRnE87RP+AVnjiwyvhwDYwjgM4XMUdmN5/KcNKNyiyDeZCwxvCR83qJ9hcvsjPIfolre+5Z9KlCtD4HXjyFKRIVdJAsee0CXurQL6Cjz25l+Dgb9IaygE1GiUCBRgXyhEfhIsBLw+/XazSIfvpcNZw63IMK3Ihb4F+h2JkKF/dXaNH85MxrFLRW3BDbCHPr7iIN9F/5nnzvd4exyHoVhIw1UDwSHYZ1mAqxA/89x5IH9wohiC1UaU9LQJd5yryApRcOdvZ4D/xXEYipa3w+kEOGGJ/uAqROC60Lgml6+ww4kmzqH3REJuoWBRJglwFSJ0sONGqiEv3lBi3oaQnPC4v8EKJRLiqgsgqhNdZHPiDcknXQgBIe5PrQiKGlxhCo3suCahteMZonhsu9/XUIcZKZSa8hR2AJT7bZf2frgPcTKkk9/XUFCWahtVXfSBCerFqo9vLsfJcm8gQ17SCCMHyQhVmBog4eXHR4BXIlJDvhLYMJrIa4sPA8T1eV2JAP0LhGNjscm3RuCUmJnAPBTqqqHO13DDbeC+Ai0OkrS4XxXJ2of9hyowBWFLlCp/SQEPYDCq8YbUueI9pLo2WEoGr47qgLQUWWA8LwGMHCbBkzWvLlCyst+gw1IYDw7zUhaqqLHBTVqJPTHl1SRK+At2WBLYS3EE9DVUnW+CHHPy3XNu36gowhQmn2gA0oQ2jEbh3sAO5m5eM3oM3Ah1EqHYwkBgkhAms6HhhtOEFAME80hyBSxXn4hUPDAFO9GHHgswCIiHehD5/agQGouaIfc+BKUawwUPsqD1OQe+h497ny6oAdnH2rbFvY+Gcr1tB1btQaUHqgVF+rIAdXppvxinEekSwzI11/CswYqEMeiiw9X5NjgfTvwxdzKIhyJqZk6ep3ZDi++ioxFuQQY4AvtYqszTH5VQFFFjB0D1Cod7yh2LQi3OJQCKLZOh1iZXTITTgwS2aabXHoShZSepCOgToC/ij2epGkHp5hRDTuIMvylvEuDqfBMMxPNjfcE5x9AlrwywTTNzS3hXlX7hBk1nnMmYNlDr38kiEooiakAuL3thxjhdRIpcvwen/H7FH7upS7fHsYX5jZgTh02LFxGbZi7o8TVnqeGmp8FoFedcdLiIW04MrxUm7yE34S+LLm9np1H89NxgtUDwAXyajXAN98kDpeZQZtEDDm9qMm2chDaOCua9UbWdPdzr+FZ7TeqeghyM+UXk5NhXLIOwWoG5sGmSQ+BgHm6aC8cn5aCfUuXHR5703ZUiWjEW52CQMEd89Q9KPQz57AgQcq3d9eTcm2dUCmlAKq6LgLDblwci9yQwpFFFYvGnvLMdXaahSE/CusFNN4uWmwvtrzxKidyNKLng7naH7Xi98WlkUbyiyPQOvV8u+ja722DURq7IYNgk9jfdQYPCsKffM7RNYyc+C/0t/mO2OtinkEGP4h83x6BAtBL1JHB6qyp/HpIfF7U9PYtWHD0gDnLpzEOk9RLIFZACErmt4Rqfj2HGhUsUuatDgL65GeBI9nwJdL6uyg9f3UKY3z5thuHH/HDRVnUz/DA3ocpU/rN36QejyH5cuqp1l36wscC7vbbf4VbOFEPrtFc1rG61e+h1V6tni9IbxusVKsH/ADAIDOE7yydfAAAAAElFTkSuQmCC"
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
  const app = document.querySelector("#app")
  app.innerHTML = domString;
  
