class AddFoodView {
  getTitleTemplate() {
    return `
      <i class="fas fa-folder-plus"></i> Add Food
    `;
  }

  getContentTemplate() {
    return `
      <div class="alert">
      </div>
      <form autocomplete="off" class="add-food__form">
        <label>
          <div class="input-group food-name__input">
            <div class="input-name">Name</div>
            <div class="form-input autocomplete">
              <input type="text"
                placeholder="Enter food name" 
                class="food-name" 
                required>

              <div class="autocomplete-list">
              </div>
            </div>
          </div>
        </label>
        <label>
          <div class="input-group serving-size__input">
            <div class="input-name">Serving Size</div>
            <div class="form-input">
              <input type="number"
                placeholder="Enter food serving size" 
                class="serving-size" 
                required>
            </div>
            <div> / g</div>
          </div>
        </label>
        <label>
          <div class="input-group calories__input">
            <div class="input-name">Calories</div>
            <div class="form-input">
              <input type="number" 
                placeholder="Enter food calories" 
                class="food-calories" min="0" required>
            </div>
          </div>
        </label>
        <label>
          <div class="input-group category__input">
            <div class="input-name">Category</div>
            <div class="form-input">
              <select class="food-category">
                <option value="Breakfast" selected>Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snack">Snack</option>
              </select>
            </div>
          </div>
        </label>
        <label>
          <div class="input-group date__input">
            <div class="input-name">Date</div>
            <div class="form-input">
              <input type="date" 
                class="food-date" 
                required>
            </div>
          </div>
        </label>
        <div class="add-food-button__container">
          <button type="submit" class="add-food-button">
            <i class="far fa-plus-square"></i> Add Food
          </button>
        </div>
      </form>
    `;
  }

  generateInputDateValue(callback) {
    callback(document.querySelector('.food-date'));
  }

  addFormListener(callback) {
    document.querySelector('.add-food__form')
        .addEventListener('submit', (event) => {
          callback({
            name: document.querySelector('.food-name'),
            servingSize: document.querySelector('.serving-size'),
            calories: document.querySelector('.food-calories'),
            category: document.querySelector('.food-category'),
            date: document.querySelector('.food-date'),
          });
          event.preventDefault();
        });
  }

  autocompleteListener(callback) {
    callback({
      inputElement: document.querySelector('.food-name'),
    });
  }

  foodNameListener(callback) {
    document.querySelector('.food-name').addEventListener('input', () => {
      callback({
        foodNameElement: document.querySelector('.food-name'),
        autocompleteList: document.querySelector('.autocomplete-list'),
      });
    });
  }

  autocompleteListLoading() {
    return `
      <div class="autocomplete-loading">
        Loading...
      </div>
    `;
  }

  autocompleteListNotFound() {
    return `
      <div class="autocomplete-not-found">
        Not found...
      </div>
    `;
  }

  autocompleteItemTemplate({id, name}) {
    return `
      <div class="autocomplete-item" data-id="${id}" data-value='${name}'>
        ${name}
      </div>
    `;
  }

  autocompleteItemListener(callback) {
    document.querySelectorAll('.autocomplete-item').forEach((element) => {
      element.addEventListener('click', (event) => {
        callback({
          autocompleteItem: event.target,
          foodNameElement: document.querySelector('.food-name'),
          autocompleteList: document.querySelector('.autocomplete-list'),
          caloriesElement: document.querySelector('.food-calories'),
          servingSizeElement: document.querySelector('.serving-size'),
        });
      });
    })
  }

  servingSizeListener(callback) {
    document.querySelector('.serving-size').addEventListener('change', (event) => {
      callback({
        foodNameElement: document.querySelector('.food-name'),
        caloriesElement: document.querySelector('.food-calories'),
        servingSizeElement: document.querySelector('.serving-size'),
      })
    })
  }

  windowListener(callback) {
    window.addEventListener('click', (event) => {
      callback({
        event,
        autocompleteList: document.querySelector('.autocomplete-list'),
        foodName: document.querySelector('.food-name'),
      });
    })
  }

  showAlert(callback) {
    callback(document.querySelector('.alert'));
  }
}

export default AddFoodView;
