fetch("https://raw.githubusercontent.com/alexsimkovich/patronage/main/api/data.json")
.then(data => data.json())
.then(data => {
    data.forEach(element => {
        const shoppingCart = document.querySelector(".shoppingCart");
        const pizzas = document.querySelector(".pizzas");
        const box = document.createElement("div");
        const img = document.createElement("img");
        const title = document.createElement("h3");
        const ingredients = document.createElement("p");
        const price = document.createElement("h4");
        const btn = document.createElement("button");
        const totalPrice = document.querySelector(".totalPrice");
        
        box.className = "box";
        ingredients.className = "ingredients"
        btn.className = "btn";
        
        img.src = element.image;
        img.style.width = "250px";
        img.style.height = "250px";
        
        title.innerHTML = element.title;
        
        ingredients.innerHTML = element.ingredients;
        
        price.innerHTML = element.price.toFixed(2) + " zł";
        
        btn.innerHTML = "Dodaj do koszyka";
        
        box.appendChild(img);
        box.appendChild(title);
        box.appendChild(ingredients);
        box.appendChild(price);
        box.appendChild(btn);
        pizzas.appendChild(box);

        let valueCurrency = 0;

        btn.addEventListener("click", (e) =>{
            valueCurrency = valueCurrency + element.price;

            console.log(valueCurrency);
            const pizzasList = document.createElement("li");
            const pizzaPrice = document.createElement("p");
            pizzaPrice.innerText = price.textContent;
            
            totalPrice.innerText = "Całkowita cena: " + valueCurrency.toFixed(2);
            pizzasList.appendChild(pizzaPrice);
            pizzasList.innerText = title.textContent + " " + price.textContent;
            console.log(price.textContent)
            shoppingCart.prepend(pizzasList);
        })
    });
    
})
.catch(err => console.log(err));
