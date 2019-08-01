'use strict'

// API Key and API Endpoint
const apiKey = '0b23e639e2a708b56e4e8cb0f575dfbf';
const searchURL = 'https://www.food2fork.com/api/search';
const recipeURL ='https://www.food2fork.com/api/get';

// Page and User Query Defaults
let page = 1;
let queryString = '';
// let ids = [];

// Initial Page Display data
const initialData = {
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

const ingredientData = {
    "recipe": {
       "publisher": "Closet Cooking",
       "f2f_url": "http://food2fork.com/view/35382",
       "ingredients": [
         "2 jalapeno peppers, cut in half lengthwise and seeded",
         "2 slices sour dough bread",
         "1 tablespoon butter, room temperature",
         "2 tablespoons cream cheese, room temperature",
         "1/2 cup jack and cheddar cheese, shredded",
         "1 tablespoon tortilla chips, crumbled\n"
       ],
       "source_url": "http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html",
       "recipe_id": "35382",
       "image_url": "http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg",
       "social_rank": 100.0,
       "publisher_url": "http://closetcooking.com",
       "title": "Jalapeno Popper Grilled Cheese Sandwich"
    },
    "recipe": {
       "publisher": "The Pioneer Woman",
       "f2f_url": "http://food2fork.com/view/47024",
       "ingredients": [
          "1 pound Ground Coffee (good, Rich Roast)",
          "8 quarts Cold Water",
          "Half-and-half (healthy Splash Per Serving)",
          "Sweetened Condensed Milk (2-3 Tablespoons Per Serving)",
          "Note: Can Use Skim Milk, 2% Milk, Whole Milk, Sugar, Artificial Sweeteners, Syrups...adapt To Your Liking!"
       ],
       "source_url": "http://thepioneerwoman.com/cooking/2011/06/perfect-iced-coffee/",
       "recipe_id": "47024",
       "image_url": "http://static.food2fork.com/icedcoffee5766.jpg",
       "social_rank": 100.0,
       "publisher_url": "http://thepioneerwoman.com",
       "title": "Perfect Iced Coffee"
    },
    "recipe": {
       "publisher": "The Pioneer Woman",
       "f2f_url": "http://food2fork.com/view/47319",
       "ingredients": [
          "12 whole New Potatoes (or Other Small Round Potatoes)",
          "3 Tablespoons Olive Oil",
          "Kosher Salt To Taste",
          "Black Pepper To Taste",
          "Rosemary (or Other Herbs Of Choice) To Taste"
       ],
       "source_url": "http://thepioneerwoman.com/cooking/2008/06/crash-hot-potatoes/",
       "recipe_id": "47319",
       "image_url": "http://static.food2fork.com/CrashHotPotatoes5736.jpg",
       "social_rank": 100.0,
       "publisher_url": "http://thepioneerwoman.com",
       "title": "Crash Hot Potatoes"
    },
    "recipe": {
       "publisher": "Two Peas and Their Pod",
       "f2f_url": "http://food2fork.com/view/54384",
       "ingredients": [
          "10 ounces dry elbow macaroni",
          "2 cloves garlic, minced",
          "2 avocados, peeled and pitted",
          "2 tablespoons fresh lime juice",
          "1/3 cup chopped fresh cilantro",
          "Salt and pepper, to taste",
          "2 tablespoons butter",
          "2 tablespoons all-purpose flour",
          "1 cup milk",
          "2 cups shredded Pepper Jack cheese",
          "Salt and pepper, to taste",
          "Fresh avocado chunks, for garnish, if desired"
       ],
       "source_url": "http://www.twopeasandtheirpod.com/stovetop-avocado-mac-and-cheese/",
       "recipe_id": "54384",
       "image_url": "http://static.food2fork.com/avocadomacandcheesedc99.jpg",
       "social_rank": 100.0,
       "publisher_url": "http://www.twopeasandtheirpod.com",
       "title": "Stovetop Avocado Mac and Cheese"
    },
    "recipe": {
       "publisher": "Closet Cooking",
       "f2f_url": "http://food2fork.com/view/35171",
       "ingredients": [
          "1/4 cup cooked shredded chicken, warm",
          "1 tablespoon hot sauce",
          "1/2 tablespoon mayo (optional)",
          "1 tablespoon carrot, grated",
          "1 tablespoon celery, sliced",
          "1 tablespoon green or red onion, sliced or diced",
          "1 tablespoon blue cheese, room temperature, crumbled",
          "1/2 cup cheddar cheese, room temperature, grated",
          "2 slices bread",
          "1 tablespoon butter, room temperature\n"
       ],
       "source_url": "http://www.closetcooking.com/2011/08/buffalo-chicken-grilled-cheese-sandwich.html",
       "recipe_id": "35171",
       "image_url": "http://static.food2fork.com/Buffalo2BChicken2BGrilled2BCheese2BSandwich2B5002B4983f2702fe4.jpg",
       "social_rank": 100.0,
       "publisher_url": "http://closetcooking.com",
       "title": "Buffalo Chicken Grilled Cheese Sandwich"
    },
    "recipe": {
       "publisher": "The Pioneer Woman",
       "f2f_url": "http://food2fork.com/view/d9a5e8",
       "ingredients": [
          "1 quart Whole Milk",
          "1 cup Vegetable Oil",
          "1 cup Sugar",
          "2 packages Active Dry Yeast, 0.25 Ounce Packets",
          "8 cups (Plus 1 Cup Extra, Separated) All-purpose Flour",
          "1 teaspoon (heaping) Baking Powder",
          "1 teaspoon (scant) Baking Soda",
          "1 Tablespoon (heaping) Salt",
          "Plenty Of Melted Butter",
          "2 cups Sugar",
          "Generous Sprinkling Of Cinnamon",
          "_____",
          "MAPLE FROSTING:",
          "1 bag Powdered Sugar",
          "2 teaspoons Maple Flavoring",
          "1/2 cup Milk",
          "1/4 cup Melted Butter",
          "1/4 cup Brewed Coffee",
          "1/8 teaspoon Salt"
       ],
       "source_url": "http://thepioneerwoman.com/cooking/2007/06/cinammon_rolls_/",
       "recipe_id": "d9a5e8",
       "image_url": "http://static.food2fork.com/333323997_04bd8d6c53da11.jpg",
       "social_rank": 100.0,
       "publisher_url": "http://thepioneerwoman.com",
       "title": "Cinnamon Rolls"
    },
    "recipe": {
       "publisher": "101 Cookbooks",
       "f2f_url": "http://food2fork.com/view/47746",
       "ingredients": [
          "4 1/2 cups (20.25 ounces) unbleached high-gluten, bread, or all-purpose flour, chilled",
          "1 3/4 (.44 ounce) teaspoons salt",
          "1 teaspoon (.11 ounce) instant yeast",
          "1/4 cup (2 ounces) olive oil (optional)",
          "1 3/4 cups (14 ounces) water, ice cold (40F)",
          "1 pound ice",
          "Semolina flour OR cornmeal for dusting"
       ],
       "source_url": "http://www.101cookbooks.com/archives/001199.html",
       "recipe_id": "47746",
       "image_url": "http://static.food2fork.com/best_pizza_dough_recipe1b20.jpg",
       "social_rank": 100.0,
       "publisher_url": "http://www.101cookbooks.com",
       "title": "Best Pizza Dough Ever"
    },
    "recipe": {
       "publisher": "The Pioneer Woman",
       "f2f_url": "http://food2fork.com/view/47042",
       "ingredients": [
           "1 whole Large Onion",
           "1 whole Pork Shoulder (\"pork Butt\") - 5 To 7 Pounds",
           "Salt And Freshly Ground Black Pepper",
           "1 can (11 Ounce) Chipotle Peppers In Adobo Sauce",
           "2 cans Dr. Pepper",
           "2 Tablespoons Brown Sugar"
       ],
       "source_url": "http://thepioneerwoman.com/cooking/2011/03/spicy-dr-pepper-shredded-pork/",
       "recipe_id": "47042",
       "image_url": "http://static.food2fork.com/5551711173_dc42f7fc4b_zbd8a.jpg",
       "social_rank": 100.0,
       "publisher_url": "http://thepioneerwoman.com",
       "title": "Spicy Dr. Pepper Shredded Pork"
    },
    "recipe": {
       "publisher": "Whats Gaby Cooking",
       "f2f_url": "http://food2fork.com/view/713134",
       "ingredients": [
          "4 cups cubed Yukon Gold potatoes",
          "3 tbsp olive oil",
          "1/2 tsp garlic salt",
          "1/2 tsp salt",
          "2 tsp paprika",
          "1 tsp pepper",
          "4 tablespoons freshly grated Parmesan cheese",
          "InstructionsPreheat your oven to 425 degrees."
       ],
       "source_url": "http://whatsgabycooking.com/parmesan-roasted-potatoes/",
       "recipe_id": "713134",
       "image_url": "http://static.food2fork.com/ParmesanRoastedPotatoes11985a.jpg",
       "social_rank": 100.0,
       "publisher_url": "http://whatsgabycooking.com",
       "title": "Parmesan Roasted Potatoes"
    }
}

function getSearchValue(){
    // Present local data on page load
    displayRecipes(initialData);
    flip();
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
function callSearchAPI(url){
    // url = `${searchURL}?key=${apiKey}&count=10&sort=r&${queryString}&page=${page}`;
    // fetch(url)
    // .then(res => {
    //     if(res.ok){
    //        return res.json();
    //      }
    //     throw new Error(res.statusText);
    // })
    // .then(recipe => displayRecipes(recipe))
    // .catch(err => {
    //     $('.js_error_message').text(`Something went wrong: ${err}`);
    // });
    displayRecipes(initialData);
    // console.log(data);
}


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
    // On click get recipe_id
    // add id to url string for fetch call
    
    // flip(recipes);

    // recipes.forEach(id => {
    //     let newUrl = `${recipeURL}?key=${apiKey}&rId=${id.recipe_id}`;
    // });
    //     console.log(newUrl);
        // //fetch(newUrl)
        // .then(res => {
        //     if(res.ok){
        //         return res.json();
        //     }
        //     throw new Error(res.statusText);
        // })
        // .then(ingredients => console.log(ingredients))
        //  // 1. Call ingredientList to format recipe text
        // .catch(err => {
        //     $('.js_error_message').text(`Something went wrong: ${err}`);
        // });
    // })
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
                        <img src="${cur.image_url}" alt="${title}" id="${cur.recipe_id}" class="js__flip__img">
                        <div class="centered js__title">${title}</div>
                    </div>
                    <div class="flip-card-back">
                        
                    </div>
                </div>
          </div>`)
    });
    $('.container__top').removeClass('hidden');
}
//     recipes.forEach(cur => {
//         let title = cur.title;
//         if(title.length > 28){
//             title = `${title.substring(0, 30)}...`;
//         }
//         $('.container__top').append(
//             `<div class="flip-card">
//                 <div class="flip-card-inner">
//                     <div class="flip-card-front">
//                         <img src="${cur.image_url}" alt="${title}" id="${cur.recipe_id}" class="js__flip__img">
//                         <div class="centered js__title">${title}</div>
//                     </div>
//                     <div class="flip-card-back">
//                         <h1>Ingredients</h1> 
//                         <p>ingredient 1</p> 
//                         <p>ingredient 2</p>
//                         <p>ingredient 2</p>
//                         <p>ingredient 2</p>
//                         <p>ingredient 2</p>
//                         <div class="recipe__button">
//                             <a href="${cur.source_url}" target="_blank" class="js__view__btn">View Recipe</a>
//                         </div>  
//                     </div>
//                 </div>
//           </div>`)
//     });
//     $('.container__top').removeClass('hidden');
// }

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

function enableTopPage(){
    $('.js__top').on('click', () => {
        $(window).scrollTop(0);
    });
}

function flip() {
    $('.container__top').on('click', '.flip-card', function(event){
        $(this).toggleClass('flipped');
        
        let id = $(this).find('img').attr('id');
        let ingredientUrl = `${recipeURL}?key=${apiKey}&rId=${id}`; 
        console.log(ingredientUrl);
        
        // fetch(ingredientUrl)
        .then(res => {
            if(res.ok){
                return res.json();
            }
            throw new Error(res.statusText);
        })
        .then(ingredient => ingredient)
        .catch(err => {
            $('.js_error_message').text(`Something went wrong: ${err}`);
        })
        // fetch newUrl data
        // take result and append card with data
        // on click click again, hide display
        $(this).find('.flip-card-back').append(
            `<h1>Ingredients</h1> 
                <p>ingredient 1</p> 
                <p>ingredient 2</p>
                <p>ingredient 2</p>
                <p>ingredient 2</p>
                <p>ingredient 2</p>
                <div class="recipe__button">
                    <a href="${ingredient.recipe.source_url}" target="_blank" class="js__view__btn">View Recipe</a>
                </div>  `
        )
        
    });
}
 

function init(){
   getSearchValue();
   updateNextPageOnClick();
   updatePreviousPageOnClick();
   enableTopPage();
//    flip();
//    ingredient();
}

$(init);