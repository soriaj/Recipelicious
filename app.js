'use strict'

// API Key and API Endpoint
const apiKey = 'd270f61c8c9fe2ef89633f4b609966de';
const searchURL = 'https://www.food2fork.com/api/search';
const recipeURL ='https://www.food2fork.com/api/get';

// Page and User Query Defaults
let page = 1;
let queryString = '';

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

// Test ingredient data
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
    url = `${searchURL}?key=${apiKey}&count=10&sort=r&${queryString}&page=${page}`;

    // Search Recipes
    fetch(url)
    .then(res => {
        if(res.ok){
           return res.json();
         }
        throw new Error(res.statusText);
    })
    .then(recipe => displayRecipes(recipe))
    .catch(err => {
        $('.container__top').empty();
        $('.page__control').empty();
        $('.container__top').append(
            `<div class="js_error_message">
                <h1>Sorry about that. There is an error accessing the recipes. If you're really hungry you may need to order take out.</h1>
            </div>`
        )
    });
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
                    <div class="flip-card-back"></div>
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

function flip() {
    $('.container__top').on('click', '.flip-card', function(event){
        $(this).toggleClass('flipped').siblings().removeClass('flipped');
        
        let id = $(this).find('img').attr('id');
        let ingredientUrl = `${recipeURL}?key=${apiKey}&rId=${id}`;
        
        // Retrieve ingredient details
        fetch(ingredientUrl)
        .then(res => {
            if(res.ok){
                return res.json();
            }
            throw new Error(res.statusText);
        })
        .then(ingredient => displayIngredients(ingredient))
        .catch(err => {
            $('.container__top').empty();
            $('.page__control').empty();
            $('.container__top').append(
                `<div class="js_error_message">
                    <h1>Sorry about that. There is an error accessing the recipes. If you're really hungry you may need to order take out.</h1>
                </div>`
            )
        });

        // Test Data Below
        // displayIngredients(ingredientData);      
    });
}

// Display ingredient details to back of card
function displayIngredients(data){
    let ingredients = data.recipe.ingredients;
    const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds', 'pound'];
    const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'lb', 'lb'];
    let ingredientArr = [];

    // Uniform Units
    ingredients.map(cur => {
       let ingredient = cur.toLowerCase();
       unitsLong.forEach((unit, i) => {
          ingredient = ingredient.replace(unit, unitsShort[i]);
       });

       // Remove parentheses if shown
       ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

       // 3. Parse ingredients into count, unit and ingredient
        const arrIng = ingredient.split(' ');
        const unitIndex = arrIng.findIndex(el => unitsShort.includes(el));

        let objIng;
        if(unitIndex > -1){
           // Ex 4 1/2 cups, arrCount is [4, 1/2]
           const arrCount = arrIng.slice(0, unitIndex); 

           let count;
           if(arrCount.length === 1){
               count = eval(arrIng[0].replace('-', '+'));
           } else {
               count = eval(arrIng.slice(0, unitIndex).join('+'));
           }

           objIng = {
               count: count,
               unit: arrIng[unitIndex],
               ingredient: arrIng.slice(unitIndex + 1).join(' ')
           }

        } else if (parseInt(arrIng[0], 10)){
           // There is no unit, but first element is a number
            objIng = {
                count: parseInt(arrIng[0], 10),
                unit: '',
                ingredient: arrIng.slice(1).join(' ')
            }
        } else if (unitIndex === -1){
           // There is no unit and no number in first position
            objIng = {
                count: 1,
                unit: '',
                ingredient: ingredient
            }
        }
        ingredientArr.push(objIng);
    });
    $('.flip-card-back').empty();
    $('.flip-card-back').append(
        `<h1>Ingredients</h1> 
            <p>${ingredientArr[0].count} ${ingredientArr[0].unit} ${ingredientArr[0].ingredient}</p>
            <p>${ingredientArr[1].count} ${ingredientArr[1].unit} ${ingredientArr[1].ingredient}</p>
            <p>${ingredientArr[2].count} ${ingredientArr[2].unit} ${ingredientArr[2].ingredient}</p>  
            <p>${ingredientArr[3].count} ${ingredientArr[3].unit} ${ingredientArr[3].ingredient}</p>            
            <div class="recipe__button">
                <a href="${data.recipe.source_url}" target="_blank" class="js__view__btn">View Full Recipe</a>
            </div>`
    )
    // Reset ingredientArr
    ingredientArr = [];
}

function init(){
   getSearchValue();
   updateNextPageOnClick();
   updatePreviousPageOnClick();
   enableTopPage();
}

$(init);