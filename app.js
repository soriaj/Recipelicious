'use strict'

// API Key and API Endpoint
const apiKey = 'f0e79516a7031030448c2c01dd68c95c';
const searchURL = 'https://www.food2fork.com/api/search';
const recipeURL ='https://www.food2fork.com/api/get';

// Page and User Query Defaults
let page = 1;
let queryString = '';
// let ids = [];

// Initial Page Display data
const data = {
    "count": 10,
    "recipes": [
        {
            "publisher": "Closet Cooking",
            "f2f_url": "http://food2fork.com/view/35382",
            "title": "Jalapeno Popper Grilled Cheese Sandwich",
            "source_url": "http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html",
            "recipe_id": "35382",
            "image_url": "http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg",
            "social_rank": 100.0,
            "publisher_url": "http://closetcooking.com"
        },
        {
            "publisher": "The Pioneer Woman",
            "f2f_url": "http://food2fork.com/view/47024",
            "title": "Perfect Iced Coffee",
            "source_url": "http://thepioneerwoman.com/cooking/2011/06/perfect-iced-coffee/",
            "recipe_id": "47024",
            "image_url": "http://static.food2fork.com/icedcoffee5766.jpg",
            "social_rank": 100.0,
            "publisher_url": "http://thepioneerwoman.com"
        },
        {
            "publisher": "The Pioneer Woman",
            "f2f_url": "http://food2fork.com/view/47319",
            "title": "Crash Hot Potatoes",
            "source_url": "http://thepioneerwoman.com/cooking/2008/06/crash-hot-potatoes/",
            "recipe_id": "47319",
            "image_url": "http://static.food2fork.com/CrashHotPotatoes5736.jpg",
            "social_rank": 100.0,
            "publisher_url": "http://thepioneerwoman.com"
        },
        {
            "publisher": "Two Peas and Their Pod",
            "f2f_url": "http://food2fork.com/view/54384",
            "title": "Stovetop Avocado Mac and Cheese",
            "source_url": "http://www.twopeasandtheirpod.com/stovetop-avocado-mac-and-cheese/",
            "recipe_id": "54384",
            "image_url": "http://static.food2fork.com/avocadomacandcheesedc99.jpg",
            "social_rank": 100.0,
            "publisher_url": "http://www.twopeasandtheirpod.com"
        },
        {
            "publisher": "Closet Cooking",
            "f2f_url": "http://food2fork.com/view/35171",
            "title": "Buffalo Chicken Grilled Cheese Sandwich",
            "source_url": "http://www.closetcooking.com/2011/08/buffalo-chicken-grilled-cheese-sandwich.html",
            "recipe_id": "35171",
            "image_url": "http://static.food2fork.com/Buffalo2BChicken2BGrilled2BCheese2BSandwich2B5002B4983f2702fe4.jpg",
            "social_rank": 100.0,
            "publisher_url": "http://closetcooking.com"
        },
        {
            "publisher": "The Pioneer Woman",
            "f2f_url": "http://food2fork.com/view/d9a5e8",
            "title": "Cinnamon Rolls",
            "source_url": "http://thepioneerwoman.com/cooking/2007/06/cinammon_rolls_/",
            "recipe_id": "d9a5e8",
            "image_url": "http://static.food2fork.com/333323997_04bd8d6c53da11.jpg",
            "social_rank": 100.0,
            "publisher_url": "http://thepioneerwoman.com"
        },
        {
            "publisher": "101 Cookbooks",
            "f2f_url": "http://food2fork.com/view/47746",
            "title": "Best Pizza Dough Ever",
            "source_url": "http://www.101cookbooks.com/archives/001199.html",
            "recipe_id": "47746",
            "image_url": "http://static.food2fork.com/best_pizza_dough_recipe1b20.jpg",
            "social_rank": 100.0,
            "publisher_url": "http://www.101cookbooks.com"
        },
        {
            "publisher": "101 Cookbooks",
            "f2f_url": "http://food2fork.com/view/47899",
            "title": "Magic Sauce",
            "source_url": "http://www.101cookbooks.com/archives/magic-sauce-recipe.html",
            "recipe_id": "47899",
            "image_url": "http://static.food2fork.com/magic_sauce_recipeece9.jpg",
            "social_rank": 100.0,
            "publisher_url": "http://www.101cookbooks.com"
        },
        {
            "publisher": "The Pioneer Woman",
            "f2f_url": "http://food2fork.com/view/47042",
            "title": "Spicy Dr. Pepper Shredded Pork",
            "source_url": "http://thepioneerwoman.com/cooking/2011/03/spicy-dr-pepper-shredded-pork/",
            "recipe_id": "47042",
            "image_url": "http://static.food2fork.com/5551711173_dc42f7fc4b_zbd8a.jpg",
            "social_rank": 100.0,
            "publisher_url": "http://thepioneerwoman.com"
        },
        {
            "publisher": "Whats Gaby Cooking",
            "f2f_url": "http://food2fork.com/view/713134",
            "title": "Parmesan Roasted Potatoes",
            "source_url": "http://whatsgabycooking.com/parmesan-roasted-potatoes/",
            "recipe_id": "713134",
            "image_url": "http://static.food2fork.com/ParmesanRoastedPotatoes11985a.jpg",
            "social_rank": 100.0,
            "publisher_url": "http://whatsgabycooking.com"
        }
    ]
}

const detailData = {
    "recipe": {
        "publisher": "Closet Cooking",
        "f2f_url": "http://food2fork.com/view/35120",
        "ingredients": [
            "4 small chicken breasts, pounded thin",
            "salt and pepper to taste",
            "4 jalapenos, diced",
            "4 ounces cream cheese, room temperature",
            "1 cup cheddar cheese, shredded",
            "8 slices bacon\n"
        ],
        "source_url": "http://www.closetcooking.com/2012/11/bacon-wrapped-jalapeno-popper-stuffed.html",
        "recipe_id": "35120",
        "image_url": "http://static.food2fork.com/Bacon2BWrapped2BJalapeno2BPopper2BStuffed2BChicken2B5002B5909939b0e65.jpg",
        "social_rank": 100.0,
        "publisher_url": "http://closetcooking.com",
        "title": "Bacon Wrapped Jalapeno Popper Stuffed Chicken"
    }
}

function getSearchValue(){
    // Present local data on page load
    displayRecipes(data);
    $('form').submit(e => {
       e.preventDefault();
       page = 1;
       // Remove any previous items displayed
       $('.container__top').empty();
       // Get users search input
       const userSearch = $('.search__recipes').val();
       // Pass user input into an object
       let query = { q: userSearch }
       // Format user input into HTML encoded component
       queryString = formatQueryParams(query);
       // Display next button on search
       $('.js__nextBtn').removeClass('hidden');
       callSearchAPI();
       // Clear search field
       $('.search__recipes').val('');
    });
 }
 
 function formatQueryParams(params){
    const queryItems = Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
    return queryItems.join('&');
 }

// Fetch data from API endpoint using updated URL
function callSearchAPI(){
    // displayRecipes(data);
    console.log(data);
//     url = `${searchURL}?key=${apiKey}&count=10&sort=r&${queryString}&page=${page}`;
//    fetch(url)
//    .then(res => {
//       if(res.ok){
//          return res.json();
//       }
//       throw new Error(res.statusText);
//    })
//    .then(recipe => displayRecipes(recipe))
//    .catch(err => {
//       $('.js_error_message').text(`Something went wrong: ${err}`);
//    });
}

// function ingredientList(){
//     const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds', 'pound'];
//     const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'lb', 'lb'];
    
//     const ingredients = detailData.recipe.ingredients;
//     // 1. Uniform Unit
//     ingredients.map(cur => {
//        let ingredient = cur.toLowerCase();
//        unitsLong.forEach((unit, i) => {
//           ingredient = ingredient.replace(unit, unitsShort[i]);
//        });
    
//     // 2. Remove parentheses
//     ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');   
 
//     // 3. Parse ingredients into count, unit and ingredient
//     const arrIng = ingredient.split(' ');
//     console.log(arrIng);
//     const unitIndex = arrIng.findIndex(el => unitsShort.includes(el));
    
//     let objIng;
//     if(unitIndex > -1){
//        // There is a unit
//        const arrCount = arrIng.slice(0, unitIndex);
//     } else if (parseInt(arrIng[0], 10)){
//        // There is no unit, but 1st element is a number
//        objIng = {
//           count: parseInt(arrIng[0], 10),
//           unit: '',
//           ingredient: arrIng.slice(1).join(' ')
//        }
//     } else if (unitIndex === -1){
//        // There is no unit and no number in 1st position
//        objIng = {
//           count: 1,
//           unit: '',
//           ingredient
//        }
//     }
//     console.log(objIng);
//     });
// }
 
// Next page event listener
function updateNextPageOnClick(){
   $('.js__nextBtn').on('click', e => {
      e.preventDefault();
      page += 1;
      if(page > 1) {
         $('.js__previousBtn').removeClass('hidden');
      }
      callSearchAPI();
   });
}

// Previous page event listener
function updatePreviousPageOnClick(){
   $('.js__previousBtn').on('click', e => {
      e.preventDefault();
      page -= 1;
      if(page <= 1) {
         page = 1;
         $('.js__previousBtn').addClass('hidden');
      }
      callSearchAPI();                                          
   }); 
}

// Display results to the page
function displayRecipes(data){
   let recipes = data.recipes;
    //    let idsForRecipes = '';
   recipes.forEach(id => {
       let newUrl = `${recipeURL}?key=${apiKey}&rId=${id.recipe_id}`;
       console.log(newUrl);
   });
//     //    fetch(newUrl)
//        .then(res => {
//             if(res.ok){
//                 return res.json();
//             }
//             throw new Error(res.statusText);
//         })
//         .then(ingredients => console.log(ingredients.ingredients))
//         .catch(err => {
//             $('.js_error_message').text(`Something went wrong: ${err}`);
//         });
//     })

   // Remove previous items from screen
    $('.container__top').empty();

    // Iterate through recipe array data
    recipes.forEach(cur => {
        let title = cur.title;
        if(title.length > 28){
            title = `${title.substring(0, 30)}...`;
        }
        $('.container__top').append(
            `<div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src="${cur.image_url}" alt="${title}" class="js__flip__img">
                        <div class="centered js__title">${title}</div>
                    </div>
                    <div class="flip-card-back">
                        <h1>Ingredients</h1> 
                        <p>ingredient 1</p> 
                        <p>ingredient 2</p>
                        <p>ingredient 2</p>
                        <p>ingredient 2</p>
                        <p>ingredient 2</p>
                        <div class="recipe__button">
                            <a href="${cur.source_url}" target="_blank" class="js__view__btn">View Recipe</a>
                        </div>  
                    </div>
                </div>
          </div>`)
    });
    $('.container__top').removeClass('hidden');
}

function enableTopPage(){
    $('.js__top').on('click', () => {
        $(window).scrollTop(0);
    });
}

function init(){
   getSearchValue();
   updateNextPageOnClick();
   updatePreviousPageOnClick();
   enableTopPage();
//    ingredient();
}

$(init);