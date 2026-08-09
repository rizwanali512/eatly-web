export interface MenuItem {
  name: string;
  description: string;
  price: number;
  badge?: "Chef's Pick" | "Spicy" | "Popular";
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
  note?: string;
}

export const menuCategories: MenuCategory[] = [
  // ─────────────────────────────────────────
  {
    id: "appetizers",
    label: "Appetizers",
    items: [
      { name: "Chicken Nuggets (6 pcs)", description: "Crispy golden chicken nuggets served with dipping sauce", price: 785 },
      { name: "Finger Fish (6 pcs)", description: "Crispy battered fish fingers served with tartare sauce", price: 985 },
      { name: "Dynamite Chicken", description: "Crispy chicken tossed in signature dynamite sauce", price: 849, badge: "Popular" },
      { name: "Nachos", description: "Crispy tortilla chips loaded with toppings and dipping sauces", price: 849 },
      { name: "Special Fries", description: "Seasoned fries with special Eatly seasoning blend", price: 849 },
      { name: "Loaded Fries", description: "Golden fries topped with cheese, jalapeños and special sauce", price: 750, badge: "Popular" },
      { name: "Garlic Mayo Fries", description: "Golden fries tossed in creamy garlic mayo dressing", price: 650 },
      { name: "BBQ Wings (6 pcs)", description: "Crispy chicken wings glazed in smoky BBQ sauce", price: 750 },
      { name: "Honey Mustard Wings (6 pcs)", description: "Chicken wings glazed in sweet honey mustard sauce", price: 750 },
      { name: "Mozzarella Stick", description: "Golden fried mozzarella sticks served with marinara sauce", price: 750 },
    ],
  },

  // ─────────────────────────────────────────
  {
    id: "combo-platter",
    label: "Combo Platter",
    items: [
      {
        name: "Combo Platter",
        description: "(2) Finger Fish · (2) Mozzarella Cheese Stick · (2) BBQ Wings · (2) Chicken Strips · (3) Hot Wings · (3) Dips Special Sauce · Fries · Salad",
        price: 1349,
        badge: "Popular",
      },
    ],
  },

  // ─────────────────────────────────────────
  {
    id: "soups",
    label: "Soups",
    items: [
      { name: "Hot N Sour Soup", description: "Classic hot and sour broth with vegetables and chicken", price: 489 },
      { name: "Chicken Corn Soup", description: "Creamy chicken soup with sweet corn", price: 475 },
      { name: "Cream of Mushroom Soup", description: "Rich and velvety mushroom cream soup", price: 485 },
      { name: "Cream of Chicken Soup", description: "Smooth velvety chicken cream soup", price: 489 },
      { name: "19B Soup", description: "Chef's special house soup blend", price: 499 },
      { name: "Chicken Vegetable Soup", description: "Light chicken broth with fresh seasonal vegetables", price: 449 },
      { name: "Thai Clear Soup", description: "Light and aromatic Thai-style clear broth", price: 449 },
      { name: "Seafood Soup", description: "Hearty soup with fresh seafood and aromatics", price: 550 },
      { name: "Family Bowl (4 persons)", description: "Large family-size bowl of chef's special soup. Add PKR 200 for special upgrade", price: 1550, badge: "Popular" },
      { name: "Chef's Special Soup", description: "Ask server for today's special — changes daily", price: 550, badge: "Chef's Pick" },
    ],
  },

  // ─────────────────────────────────────────
  {
    id: "burgers",
    label: "Burgers",
    items: [
      { name: "Grilled Beef Burger", description: "Grilled beef patty with cheese, lettuce, tomato, onion rings and special sauce", price: 899 },
      { name: "Swiss Mushroom Beef or Chicken", description: "Grilled chicken or beef patty with swiss mushroom, cheesy sauce and caramelized onions", price: 899 },
      { name: "Dynamite Burger Beef", description: "Beef patty with dynamite sauce, spinach, mint, mushroom and green chilli", price: 899, badge: "Spicy" },
      { name: "Double Gladiator Beef", description: "Double beef patty, special sauce, lettuce, tomato, caramelized onion and cheese", price: 1299, badge: "Popular" },
      { name: "Grilled Chicken Burger", description: "Grilled chicken patty with lettuce, tomato, onion rings and special sauce", price: 849 },
      { name: "Fried Fillet Spicy Burger", description: "Crispy fried chicken fillet with chef's special spicy sauce, lettuce and tomato", price: 885, badge: "Spicy" },
      { name: "Zinger Burger", description: "Crispy fried chicken with ice burger lettuce and mayonnaise", price: 849, badge: "Popular" },
      { name: "Dynamite Burger Chicken", description: "Chicken patty with dynamite sauce, spinach, mint, mushroom and green chilli", price: 885, badge: "Spicy" },
      { name: "Double Gladiator Chicken", description: "Double chicken patty, special sauce, lettuce, tomato, caramelized onion and cheese", price: 1249 },
      { name: "Eatly Special Burger", description: "Signature grilled beef top with chef's special sauce", price: 999, badge: "Chef's Pick" },
    ],
  },

  // ─────────────────────────────────────────
  {
    id: "sandwiches",
    label: "Sandwiches & Panini",
    items: [
      { name: "Classic Club Sandwich", description: "Triple-decker club with chicken, lettuce, tomato and mayo on toasted bread", price: 899 },
      { name: "Grilled Chicken Sandwich", description: "Juicy grilled chicken fillet with fresh vegetables in a toasted sandwich", price: 850 },
      { name: "Pizzialo Chicken Panini", description: "Italian-style chicken panini with pizza sauce and melted cheese", price: 850 },
      { name: "Parmesan Chicken Panini", description: "Grilled chicken panini topped with parmesan cheese and special sauce", price: 850 },
    ],
  },

  // ─────────────────────────────────────────
  {
    id: "salads",
    label: "Salads",
    items: [
      { name: "Caesar Salad", description: "Classic Caesar with romaine lettuce, croutons and Caesar dressing", price: 799 },
      { name: "Fruit Salad", description: "Fresh seasonal fruits with honey drizzle", price: 785 },
      { name: "Greek Salad", description: "Fresh vegetables, olives and feta cheese with olive oil dressing", price: 749 },
      { name: "Fresh Green Salad", description: "Crisp garden greens with house vinaigrette", price: 399 },
    ],
  },

  // ─────────────────────────────────────────
  {
    id: "eatly-special",
    label: "Eatly Special",
    items: [
      { name: "Parmo Hot Shot", description: "Chicken fillet in golden breadcrumbs with béchamel sauce, cheese, pepperoni, capsicum, onion and crushed chilli", price: 1699, badge: "Chef's Pick" },
      { name: "Chicken Parmo", description: "Chicken fillet in golden breadcrumbs topped with béchamel sauce and melted cheese", price: 1649, badge: "Chef's Pick" },
      { name: "Parmo Peri Peri", description: "Chicken fillet in golden breadcrumbs with béchamel sauce, sliced chicken in peri peri sauce, capsicum, chilli and onion", price: 1699, badge: "Chef's Pick" },
    ],
  },

  // ─────────────────────────────────────────
  {
    id: "steaks",
    label: "Steaks",
    note: "All steaks available in Chicken (PKR 1,599) or Beef (PKR 1,999) · All sauces charged extra",
    items: [
      { name: "Coby Steak", description: "Signature Coby sauce — Beef", price: 1999, badge: "Chef's Pick" },
      { name: "Fire Line Steak", description: "Bold fire sauce — Chicken or Beef", price: 1599, badge: "Spicy" },
      { name: "Mexican Steak", description: "Mexican-spiced with salsa — Chicken or Beef", price: 1599 },
      { name: "Mushroom Steak", description: "Creamy mushroom sauce — Chicken or Beef", price: 1599, badge: "Popular" },
      { name: "Black Pepper Steak", description: "Bold black pepper cream sauce — Chicken or Beef", price: 1599, badge: "Popular" },
      { name: "Hawaiian Steak", description: "Sweet and tangy Hawaiian sauce — Chicken or Beef", price: 1599 },
      { name: "French Onion Steak", description: "Rich French onion sauce — Chicken or Beef", price: 1599 },
      { name: "BBQ Steak", description: "Smoky BBQ glaze — Chicken or Beef", price: 1599 },
      { name: "Jalapeno Steak", description: "Spicy jalapeño sauce — Chicken or Beef", price: 1599, badge: "Spicy" },
      { name: "Tarragon Steak", description: "Classic French tarragon cream sauce — Chicken or Beef", price: 1599 },
      { name: "Moroccan Steak", description: "North African spice blend — Chicken or Beef", price: 1599 },
      { name: "Italian Steak", description: "Italian herb and tomato sauce — Chicken or Beef", price: 1599 },
      { name: "Twin Steak", description: "Double steak plate — Chicken or Beef", price: 1599 },
      { name: "Herb Steak", description: "Fresh herb and garlic butter — Chicken or Beef", price: 1599 },
    ],
  },

  // ─────────────────────────────────────────
  {
    id: "platters",
    label: "Eatly Platters",
    items: [
      {
        name: "Platter 1",
        description: "Chicken Steak (1pc) · Beef Steak (Half) · Grill or Fried Fish (1pc) · Vegetable & Fried Rice · Cocktail Sauce",
        price: 2299,
        badge: "Popular",
      },
      {
        name: "Platter 2",
        description: "Fried Chicken Parmesan (1pc) · Fried Fish with Tarragon Sauce (1pc) · Alfredo Pasta · Vegetables & Fries · Cocktail Sauce",
        price: 2299,
        badge: "Popular",
      },
    ],
  },

  // ─────────────────────────────────────────
  {
    id: "italian",
    label: "Italian",
    items: [
      { name: "Alfredo Di Pasta", description: "Fettuccine in special Alfredo sauce with chicken", price: 1499 },
      { name: "Penne Arrabiata Pasta", description: "Penne in spicy arrabiata sauce with chilli flakes, garlic, fresh basil and grilled chicken", price: 1349, badge: "Spicy" },
      { name: "Peproni Mac N Cheese Pasta", description: "Macaroni baked in white sauce, topped with pepperoni and three flavours of cheese", price: 1485 },
      { name: "Chicken Supreme", description: "Fried chicken in creamy cheese sauce served with fries and vegetables", price: 1599 },
      { name: "Parmesan Chicken", description: "Fried chicken breast in red tomato sauce and cheese, served with arrabiata pasta", price: 1649, badge: "Chef's Pick" },
      { name: "Cheese Chicken Pasta", description: "Skillet-baked cream penne topped with grilled chicken and cheese", price: 1449 },
      { name: "Mushroom Pasta", description: "Fettuccine in mushroom sauce with cajun chicken breast and parmesan", price: 1499, badge: "Popular" },
    ],
  },

  // ─────────────────────────────────────────
  {
    id: "seafood",
    label: "Seafood",
    items: [
      { name: "Grilled Fish", description: "Grilled fish with lemon herb sauce, served with mashed potato or fries", price: 1899 },
      { name: "Fish & Chips", description: "Deep fried crispy fish with tartar sauce and fries", price: 1799 },
      { name: "Tarragon Fish", description: "Crispy fried fish topped with tarragon sauce", price: 1849 },
      { name: "Fried Prawns", description: "Crispy fried prawns served with cocktail sauce", price: 1999 },
      { name: "Seafood Platter (Full)", description: "Crispy fried fish and prawns served with cocktail sauce and tartar sauce", price: 2699, badge: "Chef's Pick" },
      { name: "Seafood Platter (Half)", description: "Crispy fried fish and prawns served with cocktail sauce and tartar sauce", price: 1899 },
    ],
  },

  // ─────────────────────────────────────────
  {
    id: "thai-chinese",
    label: "Thai & Chinese",
    items: [
      { name: "Chicken Mongolian / Beef", description: "Tender chicken or beef in savory Mongolian sauce with vegetables", price: 1449 },
      { name: "Chicken with Cashewnut", description: "Stir-fried chicken with cashew nuts in special sauce", price: 1399 },
      { name: "Chicken Chilli Dry", description: "Crispy chicken tossed in spicy chilli sauce", price: 1399, badge: "Spicy" },
      { name: "Beef Chilli Dry", description: "Crispy beef strips tossed in spicy chilli sauce", price: 1449, badge: "Spicy" },
      { name: "Thai Chicken Chowmein", description: "Stir-fried noodles with chicken in Thai-style sauce", price: 1049 },
      { name: "Beef Chowmein", description: "Stir-fried noodles with tender beef strips", price: 1149 },
      { name: "Chicken Manchurian", description: "Crispy chicken in tangy Manchurian sauce", price: 1099, badge: "Popular" },
    ],
  },

  // ─────────────────────────────────────────
  {
    id: "pizza",
    label: "Pizza",
    note: "Prices shown for Regular size · Large and E-Large available at higher prices",
    items: [
      { name: "Chicken Tikka Pizza", description: "Regular PKR 1,399 · Large PKR 1,899 · E-Large PKR 2,299", price: 1399, badge: "Popular" },
      { name: "BBQ Pizza", description: "Regular PKR 1,399 · Large PKR 1,899 · E-Large PKR 2,299", price: 1399 },
      { name: "Cheese Lover", description: "Regular PKR 1,299 · Large PKR 1,799 · E-Large PKR 2,199", price: 1299 },
      { name: "Four Season Pizza", description: "Regular PKR 1,399 · Large PKR 1,899 · E-Large PKR 2,299", price: 1399 },
      { name: "Fajita Pizza", description: "Regular PKR 1,399 · Large PKR 1,899 · E-Large PKR 2,299", price: 1399 },
      { name: "Crown Crust", description: "Regular PKR 1,449 · Large PKR 1,999 · E-Large PKR 2,299", price: 1449, badge: "Popular" },
      { name: "Stuft Pizza", description: "Regular PKR 1,499 · Large PKR 1,999 · E-Large PKR 2,399", price: 1499 },
    ],
  },

  // ─────────────────────────────────────────
  {
    id: "bbq",
    label: "BBQ",
    items: [
      { name: "Chicken Seekh Kebab (6 pcs)", description: "Minced chicken mixed with aromatic spices, grilled on charcoal skewers", price: 1199 },
      { name: "Beef Seekh Kebab (6 pcs)", description: "Minced beef mixed with aromatic spices, grilled on charcoal skewers", price: 1299 },
      { name: "Malai Boti (12 pcs)", description: "Tender chicken marinated in cream and mild spices, char-grilled", price: 1299, badge: "Popular" },
      { name: "Chicken Tikka Boti (12 pcs)", description: "Marinated chicken tikka pieces char-grilled on charcoal", price: 1249, badge: "Popular" },
      { name: "Fish Tikka (6 pcs)", description: "Fresh fish marinated in tikka spices and grilled over charcoal", price: 1649 },
      { name: "Afghani Wings (12 pcs)", description: "Tender Afghani-style marinated chicken wings, char-grilled", price: 1149 },
    ],
  },

  // ─────────────────────────────────────────
  {
    id: "bbq-platters",
    label: "BBQ Platters",
    note: "Includes Egg Fried Rice / Pulao & Mint Sauce",
    items: [
      {
        name: "BBQ Platter — Full",
        description: "Chicken Seekh Kebab (6) · Beef Seekh Kebab (6) · Chicken Tikka Boti (8) · Afghani Wings (8) · Malai Boti (8) · Mutton Tikka (10) · Fish Tikka (6) · Egg Fried Rice/Pulao · Mint Sauce",
        price: 7999,
        badge: "Popular",
      },
      {
        name: "BBQ Platter — Half",
        description: "Chicken Seekh Kebab (4) · Beef Seekh Kebab (4) · Chicken Tikka Boti (4) · Afghani Wings (4) · Malai Boti (4) · Mutton Tikka (5) · Fish Tikka (3) · Egg Fried Rice/Pulao · Mint Sauce",
        price: 5999,
        badge: "Popular",
      },
    ],
  },

  // ─────────────────────────────────────────
  {
    id: "handi",
    label: "Handi",
    note: "Available in Full and Half portions",
    items: [
      { name: "Chicken Boneless Handi — Full", description: "Rich and creamy boneless chicken handi slow-cooked with aromatic spices", price: 2449 },
      { name: "Chicken Boneless Handi — Half", description: "Rich and creamy boneless chicken handi slow-cooked with aromatic spices", price: 1849 },
      { name: "Chicken Karahi — Full", description: "Chicken in wok — Makhni / Namkeen / Black Pepper style", price: 2399, badge: "Popular" },
      { name: "Chicken Karahi — Half", description: "Chicken in wok — Makhni / Namkeen / Black Pepper style", price: 1499 },
      { name: "Mutton Karahi — Full", description: "Tender mutton in wok — Makhni / Namkeen / Black Pepper style", price: 3499, badge: "Chef's Pick" },
      { name: "Mutton Karahi — Half", description: "Tender mutton in wok — Makhni / Namkeen / Black Pepper style", price: 2299 },
      { name: "Chicken White Karahi — Full", description: "Creamy white-sauce chicken karahi", price: 2399 },
      { name: "Chicken White Karahi — Half", description: "Creamy white-sauce chicken karahi", price: 1499 },
    ],
  },

  // ─────────────────────────────────────────
  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Sizzler Brownie", description: "Warm chocolate brownie served on a sizzling plate with ice cream", price: 825, badge: "Popular" },
      { name: "Chocolate Brownie", description: "Rich and fudgy chocolate brownie", price: 750 },
      { name: "Molten Lava", description: "Warm molten chocolate lava cake with a liquid chocolate center", price: 899, badge: "Chef's Pick" },
      { name: "Ice Cream", description: "Creamy soft-serve ice cream", price: 350 },
    ],
  },

  // ─────────────────────────────────────────
  {
    id: "shakes",
    label: "Shakes & Smoothies",
    items: [
      { name: "Vanilla Shake", description: "Classic creamy vanilla milkshake", price: 549 },
      { name: "Peanut Butter Shake", description: "Rich peanut butter blended with milk and ice cream", price: 549 },
      { name: "Nutella Brownie Shake", description: "Indulgent Nutella brownie milkshake", price: 549, badge: "Popular" },
      { name: "Oreo Shake", description: "Thick blended Oreo milkshake with vanilla ice cream", price: 549, badge: "Popular" },
      { name: "Cookies & Cream", description: "Cookies and cream blended milkshake", price: 549 },
      { name: "Strawberry Sensation Smoothie", description: "Fresh strawberry smoothie blend", price: 549 },
    ],
  },

  // ─────────────────────────────────────────
  {
    id: "mocktails",
    label: "Mocktails",
    items: [
      { name: "Pina Colada", description: "Classic pineapple and coconut mocktail", price: 549 },
      { name: "Blue Colada", description: "Tropical blue colada mocktail", price: 549 },
      { name: "Tropical Colada", description: "Refreshing tropical fruit colada", price: 549 },
    ],
  },

  // ─────────────────────────────────────────
  {
    id: "margaritas",
    label: "Margaritas",
    items: [
      { name: "Mint Margarita", description: "Fresh mint, lime juice and chilled sparkling water", price: 449, badge: "Popular" },
      { name: "Strawberry Margarita", description: "Fresh strawberry blended margarita", price: 449 },
      { name: "Blue Berry Margarita", description: "Blueberry margarita with fresh mint", price: 449 },
      { name: "Peach Margarita", description: "Refreshing peach margarita", price: 449 },
    ],
  },

  // ─────────────────────────────────────────
  {
    id: "lemonade-tea",
    label: "Lemonade & Ice Tea",
    items: [
      { name: "Mint Lemonade", description: "Fresh squeezed lemonade with mint leaves", price: 425, badge: "Popular" },
      { name: "Strawberry Lemonade", description: "Lemonade with fresh strawberry blend", price: 425 },
      { name: "Blue Berry Lemonade", description: "Lemonade with fresh blueberry blend", price: 425 },
      { name: "Ice Peach Tea", description: "Chilled peach-flavoured iced tea", price: 425 },
      { name: "Ice Lime Tea", description: "Refreshing iced lime tea", price: 425 },
    ],
  },

  // ─────────────────────────────────────────
  {
    id: "mojitos",
    label: "Mojitos",
    items: [
      { name: "Strawberry Mojito", description: "Fresh strawberries, mint, lime and soda water", price: 449, badge: "Popular" },
      { name: "Blue Berry Mojito", description: "Muddled blueberries, mint, lime and soda water", price: 449 },
      { name: "Mint Mojito", description: "Classic mint, lime juice and chilled soda", price: 449 },
    ],
  },

  // ─────────────────────────────────────────
  {
    id: "hot-drinks",
    label: "Hot Drinks",
    items: [
      { name: "Doodh Patti", description: "Traditional Pakistani milk tea brewed with tea leaves", price: 250, badge: "Popular" },
      { name: "Cardamom Tea", description: "Fragrant cardamom-infused hot tea", price: 280 },
      { name: "Green Tea", description: "Light and refreshing hot green tea", price: 199 },
      { name: "Special Green Tea", description: "Premium special green tea blend", price: 220 },
    ],
  },

  // ─────────────────────────────────────────
  {
    id: "soft-drinks",
    label: "Soft Drinks",
    items: [
      { name: "Mineral Water (Small)", description: "Chilled 500ml mineral water bottle", price: 120 },
      { name: "Soft Drink", description: "Coca-Cola, Sprite, Fanta or 7UP — chilled", price: 189 },
      { name: "M-W-L", description: "Mango, Watermelon or Lemon drink", price: 199 },
      { name: "Fresh Lime 7UP", description: "Fresh lime juice mixed with chilled 7UP", price: 220 },
    ],
  },

  // ─────────────────────────────────────────
  {
    id: "bread",
    label: "Bread & Sides",
    items: [
      { name: "Roti", description: "Fresh baked roti", price: 60 },
      { name: "Plain Naan", description: "Soft tandoor-baked plain naan", price: 80 },
      { name: "Raita", description: "Chilled yoghurt with mint and spices", price: 250 },
    ],
  },
];
