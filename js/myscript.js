var productContainer = document.getElementById("product-container");

var imageJson = `{
     "images": [
          {
               "id": 1,
               "image": "images/art/1.jpeg",
               "name": "Birds Drawing",
               "price": 500
          }, 
          {
               "id": 2,
               "image": "images/art/2.jpeg",
               "name": "Demp NAme",
               "price": 800
          }, 
          {
               "id": 3,
               "image": "https://raw.githubusercontent.com/Meetpatel-09/my-paintings/master/assets/images/p1.jpg",
               "name": "Tesing Art",
               "price": 1200
          }, 
          {
               "id": 4,
               "image": "https://raw.githubusercontent.com/Meetpatel-09/my-paintings/master/assets/images/p2.jpg",
               "name": "Lorem thirty",
               "price": 200
          }, 
          {
               "id": 5,
               "image": "https://raw.githubusercontent.com/Meetpatel-09/my-paintings/master/assets/images/p3.jpg",
               "name": "De Vanci",
               "price": 400
          }, 
          {
               "id": 6,
               "image": "images/art/3.jpg",
               "name": "Html Css Js",
               "price": 700
          },
          {
               "id": 7,
               "image": "images/art/4.jpg",
               "name": "De Vanci",
               "price": 400
          }, 
          {
               "id": 8,
               "image": "https://raw.githubusercontent.com/Meetpatel-09/my-paintings/master/assets/images/p4.jpg",
               "name": "Html Css Js",
               "price": 700
          }  
     ]
}`;



const obj = JSON.parse(imageJson);

obj.images.forEach(element => {
     console.log(element.image);
     productContainer.innerHTML += `
     <div class="grid-item">
          <div class="img-container">
               <img class="product-img"
                    src="${element.image} "
                    alt="${element.id}">
          </div>
          <p class="product-title">${element.name}</p>
          <p class="product-price">₹${element.price}</p>
     </div>`;
     
});