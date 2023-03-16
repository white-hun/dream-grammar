import React from "react";
import Avatar from "./components/Avatar";
import Navbar from "./components/Navbar";

export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image="https://images.unsplash.com/photo-1678842690256-b30d08c159b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          name="White"
          size={200}
        />
        <p>Hello!</p>
      </Navbar>
    </div>
  );
}
