import React, { useRef, useState } from "react";
import TaskList from "./TaskList";

function SearchBar() {
  const inputRef = useRef(null);
  const [submittedQuery, setSubmittedQuery] = useState("");

  function handleSearch() {
    setSubmittedQuery(inputRef.current.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks..."
        ref={inputRef}
      />
      <button onClick={handleSearch}>Search</button>
      <TaskList query={submittedQuery} />
    </div>
  );
}

export default SearchBar;