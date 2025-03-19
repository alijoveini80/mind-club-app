"use client";
import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import { useState } from "react";

export default function LeaderboardTabs({ onSelectionChange }) {
  const [selected, setSelected] = useState("players");
  let tabs = [
    {
      id: "players",
      label: "Players",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: "clans",
      label: "Clans",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    // {
    //   id: "videos",
    //   label: "Videos",
    //   content:
    //     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    // },
  ];

  const handleSelectionChange = (key) => {
    setSelected(key);
    onSelectionChange(key);
  };

  return (
    <div className="flex flex-col">
      <Tabs
        aria-label="Options"
        items={tabs}
        selectedKey={selected}
        onSelectionChange={handleSelectionChange}
      >
        {(item) => (
          <Tab key={item.id} title={item.label}>
            {/* <Card><CasrdBody>{item.content}</CardBody></Card> */}
          </Tab>
        )}
      </Tabs>
    </div>
  );
}
