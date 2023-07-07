import { useState,useEffect } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import ErrorBoundry from "../Components/ErrorBoundry";
// import { robots } from "./robots";

function App()  {
  // state = {
  //   robots: [],
  //   searchString: "",
  // };
const [robots,setRobots]=useState([]);
const [searchString,setSearchString]=useState("");

// async componentDidMount(){
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     if (!response.ok) {
//       throw new Error("Network response was not OK");
//     }
//     const result = await response.json();
//     this.setState({ robots: result });
//     // .then((users) => {});
//   } catch (error) {
//     console.error("Error: ", error);
//   }
// }
  useEffect(()=> {
    async function fetchData(){
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        const result = await response.json();
        setRobots( result);
        // .then((users) => {});
      } catch (error) {
        console.error("Error: ", error);
      }
    }
    fetchData();
  },[])


  const onSearchChange = (e) => {
    setSearchString( e.target.value );
  };
  
   
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchString.toLowerCase())
    );
    return !robots.length ? (
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

export default App;
