import "./App.css";
import Profile from "./components/Profile";

export default function AppProfile() {
  return (
    <>
      <Profile
        img="https://images.unsplash.com/photo-1678465952838-c9d7f5daaa65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
        name="White"
        title="FE"
        isNew={true}
      />
      <Profile
        img="https://images.unsplash.com/photo-1678465952240-f55afb66a75e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
        name="Black"
        title="BE"
      />
      <Profile
        img="https://images.unsplash.com/photo-1678327532819-4534952f859f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
        name="Gray"
        title="FSD"
      />
    </>
  );
}
