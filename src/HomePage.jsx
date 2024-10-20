import React, { useEffect, useState } from "react";
import axios from "axios";
function HomePage() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "lightblue",
        overflowY: "auto",
      }}
    >
      <h1>Posts</h1>
      <ul style={{ margin: 0, padding: 0 }}>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li> // Displaying the title of each post
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
