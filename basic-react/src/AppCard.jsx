import React from "react";
import Card from "./components/Card";

export default function AppCard() {
  return (
    <>
      <Card>
        <p>Card1</p>
      </Card>

      <Card>
        <p>Card2</p>
        <p>설명</p>
      </Card>
      <Card>
        <article></article>
      </Card>
    </>
  );
}
