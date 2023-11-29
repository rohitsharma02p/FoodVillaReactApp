1. crossorigin attribute
2. BUNDLERS : vite, parcel, webpack
3. caret and tilde in package.json
4. Parcel
   -Created the server
   -Hot module Replacement
   -file watcher algorithm - C++
   -Bundling
   -Minify
   -Cleaning our code
   -Dev and Production build
   -Super fast build algorithm
   -Image Optimization
   -Cashing while development
   -Compression
   -Compatble with older versions of browser
   -HTTPS on dev
   -Port number
   -Consistent Hashing Algorithm
   -Zero Config
   -Tree Shaking - Removing unwanted code
5. Transitive Dependencies
6. Polyfill - babble

Shimmer UI

Bable

Forms library - formik
Client side vs Server side routing

/_
Header
-Logo(Title)
-Nav Items(Right Side)
-Cart
Body
-Search bar
-RestaurantList
-RestaurantCard (multiple cards)
-Image
-Name
-Rating
-Cusines
Footer
-links
-copyright
_/

// React.createElement => object => HTML(DOM)
// JSX => React.createElement => object => HTML(DOM) [jsx to react element using babble]

// functional component return JSX
// below is react element

//Composing Components => component inside component

// Config Driven UI

// Virtual DOM & reconsilation

// Conditional Rendering
// if restaurant is empty => shimmer UI
// if restaurant has data => actual data ui
// JSX expressions must have one parent element

{/_
we can write js expressions in this not statements
https://react.dev/learn/javascript-in-jsx-with-curly-braces
_/}

//useEffect will be called
// [] empty dependency array => once after render
// dep array [searchText] once after initial render + after every render(searchText changes)

// loads => render => API => update UI
// setFilteredRestaurants(allRestaurants);

//not render component (Early return)




"homepage": "https://rohitsharma02p.github.io/webreact"