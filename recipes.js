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
        }
      ]
    }
  ]
};
