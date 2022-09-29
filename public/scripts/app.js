// Client facing scripts here

// ensure page elements exist prior to execution of client.js code
$(document).ready(function() {

  const $form = $('favourites-form');

  $form.submit((event) => {
    console.log(event.target);
    // prevent default behaviour of brower, i.e. prevent page from refreshing when form submitted
    event.preventDefault();

    $.post('/items', "hi", (response) => {

    });
  });

  // const createItemElement = (item) => {
  //   // define variable to format date created for each item
  //   const ago = timeago.format(item.date_listed);
  //   // define an escape function to prevent contents of item form being used to hack our app
  //   const escape = function(str) {
  //     let div = document.createElement("div");
  //     div.appendChild(document.createTextNode(str));
  //     return div.innerHTML;
  //   };
  //   // define item structure for new items based on user input
  //   let $item =
  //     $(`
  //     <article>
  //     <header>
  //       <div><img src=${item.thumbnail_photo_url}/> ${item.title}</div>
  //       <span>${item.price}</span>
  //       <img src=${item.cover_photo_url}/>
  //     </header>
  //     <p>${escape(item.description)}</p>
  //     <footer>
  //       <div>${ago}</div>
  //     </footer>
  //   </article>
  //   `);
  //   return $item;
  // };

  // // define function that empties item container, then prepends created items (most recent first)

  // const renderItems = function(items) {
  //   const $container = $('.items');
  //   $container.empty();
  //   for (const product of items) {
  //     const $itemElement = createItemElement(element);
  //     $container.prepend($itemElement);
  //   }
  // };

  // function to load new items that have been submitted via Ajax GET request

  // const loadItems = () => {
  //   const $container = $('.items');
  //   $.ajax({
  //     url: '/items',
  //     type: 'GET',
  //     success: (data) => {
  //       $container.empty();
  //       renderItems(data);
  //     }
  //   }
  //   );
  // };

  // loadItems();

});
