'use strict'

// API Endpoint
const searchURL = 'https://forkify-api.herokuapp.com/api/search'
const recipeURL = 'https://forkify-api.herokuapp.com/api/get'
const phrasesURL = 'https://forkify-api.herokuapp.com/phrases.html'

// Page and User Query Defaults
let page = 1;
let queryString = '';

// Initial Page Display data
const initialData = {
    "count": 10,
    "recipes": [
        {
            "publisher": "Simply Recipes",
            "title": "How to Make Fruit Leather",
            "source_url": "http://www.simplyrecipes.com/recipes/how_to_make_fruit_leather/",
            "recipe_id": "36482",
            "image_url": "http://forkify-api.herokuapp.com/images/fruitleather300x2001f9f84c4.jpg",
            "social_rank": 99.99999999999989,
            "publisher_url": "http://simplyrecipes.com"
        },
        {
            "publisher": "The Pioneer Woman",
            "title": "Spicy Pasta Salad with Smoked Gouda, Tomatoes, and Basil",
            "source_url": "http://thepioneerwoman.com/cooking/2011/06/spicy-pasta-salad-with-smoked-gouda-tomatoes-and-basil/",
            "recipe_id": "47023",
            "image_url": "http://forkify-api.herokuapp.com/images/5842229930_73a968f08e_zab23.jpg",
            "social_rank": 99.99999999999517,
            "publisher_url": "http://thepioneerwoman.com"
        },
        {
            "publisher": "The Pioneer Woman",
            "title": "Chicken Florentine Pasta",
            "source_url": "http://thepioneerwoman.com/cooking/2012/04/chicken-florentine-pasta/",
            "recipe_id": "46933",
            "image_url": "http://forkify-api.herokuapp.com/images/florentineebc6.jpg",
            "social_rank": 99.9999999999312,
            "publisher_url": "http://thepioneerwoman.com"
        },
        {
            "publisher": "The Pioneer Woman",
            "title": "Bruschetta Chicken",
            "source_url": "http://thepioneerwoman.com/cooking/2012/04/bruschetta-chicken/",
            "recipe_id": "46932",
            "image_url": "http://forkify-api.herokuapp.com/images/bruschafa5.jpg",
            "social_rank": 99.99999999597819,
            "publisher_url": "http://thepioneerwoman.com"
        },
        {
            "publisher": "The Pioneer Woman",
            "title": "Chicken Salad",
            "source_url": "http://thepioneerwoman.com/cooking/2008/05/chicken-salad-the-way-i-like-it/",
            "recipe_id": "47320",
            "image_url": "http://forkify-api.herokuapp.com/images/ChickenSalad0ffa.jpg",
            "social_rank": 99.99999994523066,
            "publisher_url": "http://thepioneerwoman.com"
        },
        {
            "publisher": "Two Peas and Their Pod",
            "title": "Greek Tortellini Salad",
            "source_url": "http://www.twopeasandtheirpod.com/greek-tortellini-salad/",
            "recipe_id": "baaa28",
            "image_url": "http://forkify-api.herokuapp.com/images/GreekTortelliniSalad6fbed.jpg",
            "social_rank": 99.9999998548194,
            "publisher_url": "http://www.twopeasandtheirpod.com"
        },
        {
            "publisher": "All Recipes",
            "title": "Green Grape Salad",
            "source_url": "http://allrecipes.com/Recipe/Green-Grape-Salad/Detail.aspx",
            "recipe_id": "15368",
            "image_url": "http://forkify-api.herokuapp.com/images/9150866d70.jpg",
            "social_rank": 99.9999986085177,
            "publisher_url": "http://allrecipes.com"
        },
        {
            "publisher": "The Pioneer Woman",
            "title": "Pasta Salad with Tomatoes, Zucchini, and Feta",
            "source_url": "http://thepioneerwoman.com/cooking/2011/03/pasta-salad-with-tomatoes-zucchini-and-feta/",
            "recipe_id": "47041",
            "image_url": "http://forkify-api.herokuapp.com/images/5566512470_9e98939ab3_z2766.jpg",
            "social_rank": 99.99999855322939,
            "publisher_url": "http://thepioneerwoman.com"
        },
        {
            "publisher": "All Recipes",
            "title": "White Peach Sangria",
            "source_url": "http://allrecipes.com/Recipe/White-Peach-Sangria/Detail.aspx",
            "recipe_id": "34447",
            "image_url": "http://forkify-api.herokuapp.com/images/827522d5b0.jpg",
            "social_rank": 99.99999753633911,
            "publisher_url": "http://allrecipes.com"
        }
    ]
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
    url = `${searchURL}?${queryString}`;

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
                <h1>
                Looks like you may be really hungry and searched for something that doesn't exist. 
                Please check the <a target='blank' href=${phrasesURL}>Phrases List</a> for supported searches.
                </h1>
            </div>`
        )
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
        let ingredientUrl = `${recipeURL}?rId=${id}`;
        
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
                    <h1>Sorry about that. There is an error accessing the recipe ingredient details. If you're really hungry you may need to order take out.</h1>
                </div>`
            )
        });  
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
       // Parse ingredients into count, unit and ingredient
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
   enableTopPage();
}

$(init);