import './App.css';

function App() {
  function yesClicked() {
    alert('Yes! That\'s wonderful! Lets go out');
    // You can add more actions here if needed
  }

  return (
    <div id="body">

    <div class="container">
    <div id="loveText">Vineha Will you come out with me?</div>
      <div class="buttons">
        <button id="yes-button" onClick={yesClicked}>Yes</button>
        <button id="no-button" onClick={yesClicked}>No</button>
      </div>
    </div>
    </div>
  );
}

export default App;

