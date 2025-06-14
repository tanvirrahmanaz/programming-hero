// script.js (সম্পূর্ণ নতুন কোড)

document.addEventListener('DOMContentLoaded', () => {
    // DOM এলিমেন্ট নির্বাচন
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const drinksContainer = document.getElementById('drinks-container');
    const groupCountSpan = document.getElementById('group-count');
    const cartBody = document.getElementById('cart-body'); // টেবিলের বডি নির্বাচন

    // মডাল এলিমেন্ট
    const modalContainer = document.getElementById('modal-container');
    const modalCloseButton = document.getElementById('modal-close-button');
    const modalBody = document.getElementById('modal-body');

    // ** পরিবর্তন: গ্রুপ অ্যারে এখন অবজেক্ট ধারণ করবে **
    let group = []; 

    // API থেকে ড্রিংক খোঁজার ফাংশন
    const fetchDrinks = async (searchTerm) => {
        drinksContainer.innerHTML = '<h2>Loading...</h2>';
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
            const data = await response.json();
            displayDrinks(data.drinks);
        } catch (error) {
            console.error('Error fetching data:', error);
            drinksContainer.innerHTML = '<p>Something went wrong. Please try again.</p>';
        }
    };

    // ড্রিংক কার্ডগুলো দেখানোর ফাংশন
    const displayDrinks = (drinks) => {
        drinksContainer.innerHTML = '';
        if (!drinks) {
            drinksContainer.innerHTML = '<h2>No drinks found for your search.</h2>';
            return;
        }

        const drinksToShow = drinks.slice(0, 8);

        drinksToShow.forEach(drink => {
            // ** পরিবর্তন: ড্রিংকের আইডি দিয়ে চেক করা হচ্ছে **
            const isSelected = group.some(item => item.id === drink.idDrink);

            const card = document.createElement('div');
            card.className = 'drink-card';
            card.innerHTML = `
                <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                <h3>${drink.strDrink}</h3>
                <p><strong>Category:</strong> ${drink.strCategory}</p>
                <p><strong>Instructions:</strong> ${drink.strInstructions.substring(0, 15)}...</p>
                <div class="buttons">
                    <button 
                        class="btn-add-group ${isSelected ? 'btn-selected' : ''}" 
                        data-id="${drink.idDrink}" 
                        data-name="${drink.strDrink}"
                        data-image="${drink.strDrinkThumb}" ${isSelected ? 'disabled' : ''}
                    >
                        ${isSelected ? 'Already Selected' : 'Add to Group'}
                    </button>
                    <button class="btn-details" data-id="${drink.idDrink}">Details</button>
                </div>
            `;
            drinksContainer.appendChild(card);
        });
    };

    // ** পরিবর্তন: কার্ট আপডেট করার সম্পূর্ণ নতুন ফাংশন **
    const updateCart = () => {
        groupCountSpan.textContent = group.length;
        cartBody.innerHTML = ''; // টেবিলের বডি খালি করা হলো

        group.forEach((drink, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td><img src="${drink.imageSrc}" alt="${drink.name}" class="cart-item-img"></td>
                <td>${drink.name}</td>
            `;
            cartBody.appendChild(row);
        });
    };

    // মডাল ফাংশন (কোনো পরিবর্তন নেই)
    const showModal = () => { modalContainer.style.display = 'flex'; };
    const hideModal = () => { modalContainer.style.display = 'none'; };

    const showDetailsModal = async (drinkId) => {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`);
            const data = await response.json();
            const drink = data.drinks[0];
            modalBody.innerHTML = `
                <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                <h2>${drink.strDrink}</h2>
                <p><strong>Category:</strong> ${drink.strCategory}</p>
                <p><strong>Glass Type:</strong> ${drink.strGlass}</p>
                <p><strong>Alcoholic:</strong> ${drink.strAlcoholic}</p>
                <p><strong>Instructions:</strong> ${drink.strInstructions}</p>
            `;
            showModal();
        } catch (error) {
            console.error('Error fetching drink details:', error);
            alert('Could not fetch drink details.');
        }
    };

    // ইভেন্ট লিসেনার
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) { fetchDrinks(searchTerm); }
    });

    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') { searchButton.click(); }
    });

    drinksContainer.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('btn-add-group') && !target.disabled) {
            if (group.length >= 7) {
                alert('You cannot add more than 7 drinks to the group.');
                return;
            }

            // ** পরিবর্তন: গ্রুপে একটি অবজেক্ট যোগ করা হচ্ছে **
            const drinkToAdd = {
                id: target.getAttribute('data-id'),
                name: target.getAttribute('data-name'),
                imageSrc: target.getAttribute('data-image')
            };

            group.push(drinkToAdd);
            updateCart(); // নতুন updateCart ফাংশন কল করা

            target.textContent = 'Already Selected';
            target.disabled = true;
            target.classList.add('btn-selected');
        }

        if (target.classList.contains('btn-details')) {
            const drinkId = target.getAttribute('data-id');
            showDetailsModal(drinkId);
        }
    });

    modalCloseButton.addEventListener('click', hideModal);
    modalContainer.addEventListener('click', (e) => {
        if (e.target === modalContainer) { hideModal(); }
    });

    hideModal();
    fetchDrinks('margarita');
});