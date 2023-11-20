import React from "react";
import dynamic from "next/dynamic";
// import DeckMap2 from "~/components/DeckMap2";

const DeckMap = dynamic(() => import("~/components/DeckMap"), {
  ssr: false,
  // loading: () => <LoadingView />,
});

export default function Map() {
  return <DeckMap />;
}
