import { useState, useEffect } from "react";
import { connect } from "react-redux";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundry from "../Components/ErrorBoundry";
import { setSearchField, getRobots } from "../Redux/actions";
// import { robots } from "./robots";
const mapStateToProps = (state) => {
  return {
    searchField: state.setSearchField.searchField,
    robots: state.getRobots.robots,
    isPending: state.getRobots.isPending,
  };
};

// const mapDispatchToProps = (dispatch) => {const mapDispatchToProps = (dispatch) => {
//   return {
//     onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
//     onRequestRobots: () => dispatch(requestRobots())
//   }
// }
function App(props) {
  // state = {
  //   robots: [],
  //   searchString: "",
  // };
  // const [robots, setRobots] = useState([]);
  // const [searchString, setSearchString] = useState("");

  useEffect(() => {
    props.dispatch(getRobots());
    // async function fetchData() {
    //   try {
    //     const response = await fetch(
    //       "https://jsonplaceholder.typicode.com/users"
    //     );
    //     if (!response.ok) {
    //       throw new Error("Network response was not OK");
    //     }
    //     const result = await response.json();
    //     setRobots(result);
    //     // .then((users) => {});
    //   } catch (error) {
    //     console.error("Error: ", error);
    //   }
    // }
    // fetchData();
  }, []);

  const onSearchChange = (e) => {
    // setSearchString( e.target.value );
    props.dispatch(setSearchField(e.target.value));
  };

  const { robots, searchField, isPending } = props;
  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );
  return isPending ? (
    <div className="wrapper">
      <h1>Loading...</h1>
    </div>
  ) : (
    <div className="tc">
      <h1 className="f1">Robo Friends</h1>
      <SearchBox searchChange={onSearchChange} />
      {/* If anything happens in CardLiSt, ErrorBoundry will catch it and show error */}
      <ErrorBoundry>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </ErrorBoundry>
    </div>
  );
}

export default connect(mapStateToProps)(App);
