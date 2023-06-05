import "./App.css";
import SuggestionsCard from "./components/twitter/SuggestionsCard";
// Header: Explain the intention of the site.
// Section Header: Name of the sections of the components
function App() {
  return (
    <div className="App section__padding">
      <h1>Twitter</h1>
      <div className="tw-suggestion-section">
        <SuggestionsCard
          isFollowing={true}
          userName="filmsteria"
          name="Filmsteria!"
        />

        <SuggestionsCard
          isFollowing={false}
          userName="dog_rates"
          name="We Rate Dogs"
        />
      </div>
    </div>
  );
}

export default App;
