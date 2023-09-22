import './App.css';

function App() {
  return (
    <div className="App"> 
      <ul class="accordion">
          <li class="accordion-list">
              <input type="radio" name="accordion" id="first" checked />
              <label for="first" class="accordion-title">PhilScott</label>
              <div class="accordion-paragraph">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem iure, atque ipsa expedita corporis similique aspernatur debitis, ab nulla facere molestias, perferendis ea repellendus? Magnam veniam magni animi cumque.</p>
              </div>
          </li>
          <li class="accordion-list">
              <input type="radio" name="accordion" id="second" />
              <label for="second" class="accordion-title">Information</label>
              <div class="accordion-paragraph">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem iure, atque ipsa expedita corporis similique aspernatur debitis, ab nulla facere molestias, perferendis ea repellendus? Magnam veniam magni animi cumque.</p>
              </div>
          </li>
          <li class="accordion-list">
              <input type="radio" name="accordion" id="third" />
              <label for="third" class="accordion-title">Questions</label>
              <div class="accordion-paragraph">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem iure, atque ipsa expedita corporis similique aspernatur debitis, ab nulla facere molestias, perferendis ea repellendus? Magnam veniam magni animi cumque.</p>
              </div>
          </li>
          <li class="accordion-list">
              <input type="radio" name="accordion" id="fourth" />
              <label for="fourth" class="accordion-title">Guide</label>
              <div class="accordion-paragraph">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem iure, atque ipsa expedita corporis similique aspernatur debitis, ab nulla facere molestias, perferendis ea repellendus? Magnam veniam magni animi cumque.</p>
              </div>
          </li>
      </ul>    
    </div>
  );
}

export default App;
