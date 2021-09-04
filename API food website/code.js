const meal_container = document.getElementById('body')

function showMeal(){
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then (res => res.json())
    .then((res) => {
        createMeal(res.meals[0]);
    }
    )
}

const createMeal = (meals) => {
    console.log(meals)
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (meals[`strIngredient${i}`]) {
            ingredients.push(
                `${meals[`strIngredient${i}`]} - ${meals[`strMeasure${i}`]}`
            );
        } else {
            continue;
        }
    }

    const showHTML = 
    document.getElementById("body").innerHTML = `
    <img src="${meals.strMealThumb}" alt="Meal Image" />
              <p><strong>Category:</strong> ${meals.strCategory}</p>
              <p><strong>Area:</strong> ${meals.strArea}</p>
              <p><strong>Tags:</strong> ${meals.strTags}</p>
              <h5>Ingredients:</h5>
              <ul>
                ${ingredients
                  .map((ingredient) => `<li>${ingredient}</li>`)
                  .join("")}
              </ul>`;
  
    // Cột phải
    document.getElementById("strMeal").innerHTML = `
      <h4 >${meals.strMeal}</h4>
      <p>
          ${meals.strInstructions}
      </p>`;
  
    // Video
    document.getElementById("video").innerHTML = `<iframe
   width="100%"
   height="100%"
   src="https://www.youtube.com/embed/${meals.strYoutube.slice(-11)}"
   title="YouTube video player"
   frameborder="0"
   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
   allowfullscreen
  ></iframe>`;
  
    var body = document.getElementById("body");
    body.scrollIntoView();
  }
  

