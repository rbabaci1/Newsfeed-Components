/* This is the data we will be using, study it but don't change anything, yet. */
let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

// Write a function that will create a menu component as seen below:
// <div class="menu">
//   <ul>
//     {each menu item as a list item}
//   </ul>
// </div>
// The function takes an array as its only argument.

function createMenu(menuItems) {
  // create needed elements
  let menu = document.createElement('div');
  let ulList = document.createElement('ul');

  // add a class to the menu
  menu.classList.add('menu');

  // Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  menuItems.forEach(item => {
    let listItem = document.createElement('li');
    listItem.append(item);
    // Add those items to the <ul>
    ulList.append(listItem);
  });

  // append the ul to the menu
  menu.append(ulList);

  // Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
  const menuButton = document.querySelector('.menu-button');
  const articles = document.querySelector('.articles');

  // add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
  menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
    articles.classList.toggle('move-articles');
  });

  // return the menu component.
  return menu;
}

// add the menu component to the DOM.
document.body.prepend(createMenu(menuItems));