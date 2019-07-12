const cityFormRaw = `
<div class="jumbotron text-center">
  <form id="city-search">
    <div class="form-group">
        <h1>How's the weather like in my city?</h1>
        <label for="city-name">
            Enter your City
            <input type="text" id="city-name" class="form-control form-control-lg" required minlength="3" maxlength="20">
        </label>
    </div>
    <button id="btn-city-search" class="btn btn-primary btn-lg">Search</button>
  </form>
</div>
`;

export default cityFormRaw; 