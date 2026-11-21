/*
  Client Community Holiday Recipe Book: all volumes live in this one file.

  TO ADD A RECIPE: copy one recipe block { ... }, paste it into the right volume's
  "recipes" list, and change the words. Keep the commas between blocks.
    category: Appetizer, Main, Side, Dessert, Drink, or Breakfast
    family:   "[Last Name] Family", for example "Foreman Family"
    note:     optional; use "" if the family sent no story

  TO START NEXT YEAR'S VOLUME: copy the whole 2026 volume block, paste it at the
  TOP of the volumes list, change id, year, number, title, event, and replace
  its recipes. The newest volume (first in the list) opens from the QR code.
*/
window.RECIPE_BOOK = {
  hosts: "Jessica Williams & Stacy Preston",
  signoff: "Jessica & Stacy",
  brokerage: "eXp Realty",
  submitEmail: "jw.indyrealestate@gmail.com",

  volumes: [
    {
      id: "2026",
      year: 2026,
      number: "One",
      event: "Holiday Kickoff 2026",
      title: "Holiday Recipe Book",
      color: "#8E1B2C",
      letter: [
        "Thank you for being part of our client community. When we asked for the dish everyone asks you to bring, we hoped to end up with a little book of real recipes from real kitchens, and that is exactly what you sent.",
        "Save this book to your phone, check off ingredients as you shop, and come back whenever you need a crowd pleaser this season. If your favorite is not here yet, there is still room."
      ],
      recipes: [
        {
          id: "cranberry-jalapeno-dip",
          title: "Holiday Jalapeño Cranberry Dip",
          category: "Appetizer",
          family: "Schoettmer Family",
          note: "",
          ingredients: [
            "12 oz fresh cranberries",
            "1 fresh jalapeño, seeded",
            "1 cup sugar",
            "Lime juice, to taste",
            "16 oz cream cheese, at room temperature",
            "1/4 cup sour cream",
            "Pinch of salt",
            "4 sprigs cilantro, plus extra to garnish",
            "Crackers of your choice, for serving"
          ],
          steps: [
            "In a food processor, pulse the cranberries and jalapeño until finely chopped. Strain off any extra cranberry juice.",
            "In a bowl, stir together the cranberry mixture, sugar, lime juice, salt, and cilantro.",
            "In a separate bowl, blend the cream cheese and sour cream until smooth. Spread it onto a festive tray or into a shallow bowl.",
            "Spoon the cranberry jalapeño mixture over the top, garnish with extra cilantro if you like, and serve with crackers."
          ],
          tip: ""
        },
        {
          id: "cream-cheese-chicken-chili",
          title: "Cream Cheese Chicken Chili",
          category: "Main",
          family: "Foreman Family",
          note: "\"Not really a holiday one,\" the Foremans told us, and it did not even have a name until this book. It is a slow cooker recipe, which makes it a gift on a busy holiday weekend.",
          ingredients: [
            "2 large chicken breasts",
            "1 can black beans, drained",
            "1 can corn",
            "1 can Rotel tomatoes",
            "8 oz cream cheese",
            "1 packet ranch dip mix",
            "1/2 packet taco seasoning",
            "1 tbsp chili powder",
            "1 tsp cumin",
            "1 tsp onion powder"
          ],
          steps: [
            "In a slow cooker, mix the beans, corn, tomatoes, chili powder, onion powder, cumin, and ranch mix until well combined.",
            "Press the chicken down into the mixture and sprinkle the taco seasoning over the chicken.",
            "Add the cream cheese beside the chicken, not on top of it. Cutting the block in half makes this easier.",
            "Cook on low for 6 to 7 hours, until the chicken falls apart easily with a fork.",
            "Move the chicken to a bowl, shred it, and return it to the slow cooker. Stir until the cream cheese is fully melted and combined."
          ],
          tip: "Make it a dip: shred the chicken extra fine and serve it warm with chips."
        },
        {
          id: "cheesy-hash-brown-casserole",
          title: "Cheesy Hash Brown Casserole",
          category: "Side",
          family: "Williams Family",
          note: "",
          ingredients: [
            "1 bag (30 oz) frozen shredded hash browns, thawed",
            "1 can (10.5 oz) cream of chicken soup",
            "1 cup sour cream",
            "2 cups shredded cheddar cheese, divided",
            "1/2 cup butter, melted",
            "1/2 cup finely chopped onion",
            "1/2 tsp garlic powder",
            "1/2 tsp salt",
            "1/4 tsp black pepper",
            "1 1/2 cups crushed cornflakes or buttery crackers",
            "3 tbsp butter, melted, for the topping"
          ],
          steps: [
            "Heat the oven to 350°F and lightly grease a 9x13 baking dish.",
            "In a large bowl, stir together the soup, sour cream, 1/2 cup melted butter, 1 1/2 cups of the cheddar, onion, garlic powder, salt, and pepper until smooth.",
            "Fold in the hash browns until they are evenly coated, then spread the mixture into the dish.",
            "Sprinkle the remaining 1/2 cup of cheddar over the top.",
            "Toss the crushed cornflakes with the 3 tbsp melted butter and scatter them over the casserole.",
            "Bake uncovered for 45 to 50 minutes, until bubbly and golden brown."
          ],
          tip: ""
        },
        {
          id: "cheesy-pull-apart-christmas-bread",
          title: "Cheesy Pull-Apart Christmas Tree Bread",
          category: "Appetizer",
          family: "Tewell Family",
          note: "",
          ingredients: [
            "13 oz can refrigerated pizza dough",
            "6 to 7 mozzarella cheese sticks",
            "1 large egg plus 1 tbsp water, for egg wash",
            "3 tbsp butter, melted",
            "1/2 cup grated parmesan cheese, divided",
            "1 tbsp fresh parsley, finely chopped",
            "1/2 tbsp fresh rosemary, finely chopped",
            "1/2 tbsp fresh basil, finely chopped",
            "1 clove garlic, grated",
            "1 jar marinara and/or pesto, for dipping",
            "Parchment paper"
          ],
          steps: [
            "Heat the oven to 400°F and line a baking sheet with parchment paper.",
            "Cut the dough into about 30 equal squares, and cut the mozzarella sticks into 30 bite-size (1 inch) pieces.",
            "Wrap each square of dough around a piece of mozzarella and roll it between your hands into a smooth, sealed ball.",
            "Arrange the balls seam side down on the baking sheet in the shape of a Christmas tree, with the balls touching. Whisk the egg and water and brush it lightly over each ball.",
            "Bake 16 to 18 minutes, until golden brown.",
            "While it bakes, melt the butter and stir in half the parmesan, the garlic, and the herbs. Brush it over the hot rolls, sprinkle on the rest of the parmesan, and serve right away with marinara or pesto."
          ],
          tip: ""
        },
        {
          id: "chicken-cordon-bleu",
          title: "Chicken Cordon Bleu",
          category: "Main",
          family: "Fox Family",
          note: "",
          ingredients: [
            "Boneless chicken breasts",
            "Thin-sliced Swiss cheese",
            "Sliced ham",
            "Butter",
            "Ritz cracker crumbs"
          ],
          steps: [
            "Heat the oven to 350°F.",
            "Cut each chicken breast in half lengthwise and pound the halves thin.",
            "Lay a thin slice of Swiss cheese and a slice of ham on each piece of chicken and roll it up.",
            "Melt the butter and stir in the Ritz cracker crumbs.",
            "Place the chicken rolls in a baking dish and cover them with the buttery cracker crumbs.",
            "Bake uncovered for 45 minutes to 1 hour."
          ],
          tip: ""
        },
        {
          id: "hearty-chili",
          title: "Hearty Chili",
          category: "Main",
          family: "Thiry Family",
          note: "",
          ingredients: [
            "2 lbs ground beef chuck (or 1 lb ground beef plus 1 lb Italian sausage)",
            "3 cans (15 oz) chili beans, drained",
            "1 can (15 oz) chili beans in spicy sauce",
            "2 cans (28 oz) diced tomatoes with juice",
            "1 can (6 oz) tomato paste",
            "1 large yellow onion, chopped",
            "3 stalks celery, chopped",
            "1 green bell pepper, seeded and chopped",
            "1 red bell pepper, seeded and chopped",
            "2 green chile peppers, seeded and chopped",
            "4 beef bouillon cubes",
            "1/2 cup beer",
            "1/4 cup chili powder",
            "1 tbsp Worcestershire sauce",
            "1 tbsp minced garlic",
            "1 tbsp dried oregano",
            "2 tsp ground cumin",
            "2 tsp hot pepper sauce",
            "1 tsp dried basil",
            "1 tsp salt",
            "1 tsp ground black pepper",
            "1 tsp cayenne pepper",
            "1 tsp paprika",
            "1 tsp white sugar",
            "Corn chips and shredded cheddar, for serving"
          ],
          steps: [
            "In a large stockpot over medium-high heat, brown the ground beef (or beef and sausage), breaking it up as it cooks. Drain the grease.",
            "Stir in both kinds of chili beans, the tomatoes with their juice, tomato paste, onion, celery, bell peppers, and chile peppers.",
            "Add the bouillon, beer, chili powder, Worcestershire, garlic, oregano, cumin, hot sauce, basil, salt, black pepper, cayenne, paprika, and sugar. Stir well and bring to a simmer.",
            "Turn the heat to low, cover, and simmer at least 2 hours, stirring now and then. The longer it simmers, the better.",
            "Taste and adjust with more salt, pepper, chili powder, or hot sauce. Serve topped with corn chips and cheddar."
          ],
          tip: "This chili is even better the next day."
        },
        {
          id: "sweet-potato-casserole",
          title: "Sweet Potato Casserole",
          category: "Side",
          family: "Rutski Family",
          note: "",
          ingredients: [
            "4 1/2 cups cooked, mashed sweet potatoes",
            "1 cup white sugar",
            "1/2 cup butter, melted",
            "1/3 cup milk",
            "2 eggs, beaten",
            "1/2 tsp vanilla extract",
            "1 cup light brown sugar",
            "1/2 cup all-purpose flour",
            "1/3 cup butter, for the topping",
            "1 cup chopped pecans"
          ],
          steps: [
            "Heat the oven to 350°F and grease a 9x13 baking dish.",
            "In a large bowl, mix the sweet potatoes, white sugar, melted butter, milk, eggs, and vanilla. Spread into the dish.",
            "In a small bowl, combine the brown sugar and flour, then cut in the 1/3 cup butter until crumbly. Stir in the pecans.",
            "Sprinkle the pecan streusel over the sweet potatoes.",
            "Bake about 25 minutes, until golden brown."
          ],
          tip: ""
        },
        {
          id: "sloppy-pineapple-cake",
          title: "Sloppy Pineapple Cake",
          category: "Dessert",
          family: "Preston Family",
          note: "",
          ingredients: [
            "2 eggs, beaten",
            "2 cups sugar",
            "1 tbsp oil",
            "2 cups flour",
            "1 #2 can pineapple, with juice",
            "1 tsp baking soda",
            "1 pinch salt",
            "Icing: 1 stick margarine",
            "Icing: 2/3 cup Milnot (evaporated milk)",
            "Icing: 1 cup sugar",
            "Icing: 1 tsp vanilla"
          ],
          steps: [
            "Heat the oven to 350°F and grease and flour your pan.",
            "Mix all the cake ingredients together and pour into the pan.",
            "Bake 35 to 40 minutes.",
            "While the cake bakes, combine the margarine, Milnot, sugar, and vanilla in a saucepan and boil for 5 minutes.",
            "Poke holes all over the hot cake and pour the hot icing over it."
          ],
          tip: ""
        }
      ]
    }
  ]
};
