import { useEffect } from "react";

function App() {
  const [windowWith, setWindowWith] = useState(window.innerWidth);
  const [name, setName] = useState("");
  useEffect(() => {}, []); // the dependency array

  // On Every render
  useEffect(() => {
    //   window.addEventListener("resize", updateWindowWidth);
    console.log("I re-rendered");
  });

  // On first Render/Mount only! - componentDidMount Alternative
  useEffect(() => {
    console.log("I component Mounted");
  }, []);

  // On the first Render + whenever dependancy changes! - ComponentdidUpdate Alternative
  useEffect(() => {
    console.log(`The name changed!: ${name}`);
    return () => {
      // cleanup function....
      console.log("We unmounted");
    };
    // Very powerful because when you make a connection to a database and every single time
    // the component re-renders you dont want to keep making the connection to the database
    // Instead you have to do a clean up, disconnect the current connection and reconect
    // or just do it on the first re-render.

    // Unmounts first and then console logs
  }, [name]);

  useEffect(() => {
    console.log('Attach listener');
    window.addEventListener("resize", updateWindowWith);

    return () => {
      // when component unmounts, this cleanup code runs...
      console.log('Detach listener');
      // everytime there's a change, it umounts before re-rendering, so this log keeps firing - inefficient
      window, removeEventListener("resize", updateWindowWith);
    };
  }, []);

  useEffect(() => {
    console.log('Attach listener');
    window.addEventListener("resize", updateWindowWith);
  }, []); // the dependency stops the unmounting keep firing. Only when the dependency changes 

  const updateWindowWith = () => {
    setWindowWith(window.innerWidth);
  };

  return (
    <div>
      <center>
        <h1>The useEffect Hook</h1>
        <h2>The window width is:{windowWith}</h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a name"
        />
      </center>
    </div>
  );
}

export default App;
