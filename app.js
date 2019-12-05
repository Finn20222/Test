/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const navbar = document.getElementById('navbar__list');
const sections = document.querySelectorAll("section[data-nav]")

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
for (const section of sections){
const sectionId = section.getAttribute('id');
const menuItem = document.createElement('li');
menuItem.innerHTML = `<a class="menu__link"
href="#${sectionId}">${section.dataset.nav}</a>`
navbar.appendChild(menuItem);
scrollItems = menuItem.map(function(){
                           var item = $($(this).attr("href"));
                           if (item.length) { return item; }
                       });
}

// var lastId,
//       topMenu = $("#mainNav"),
//       topMenuHeight = topMenu.outerHeight()+1,
//  // All list items
//       menuItems = topMenu.find("a"),
//  // Anchors corresponding to menu items

// Add class 'active' to section when near top of viewport

$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";

   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }
});

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
console.log("Script Loaded");
