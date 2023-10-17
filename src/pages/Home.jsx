import React from "react";
import Weather from "../components/Weather";
import List from "../components/List";

export default function Home() {
  return (
    <div>
      <Weather />
      <List />
    </div>
  );
}
