"use client";
import { useState } from "react";
import LeaderboardTabs from "./LeaderboardTabs";
import LeaderboardTable from "./LeaderboardTable";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@heroui/react";

export default function LeaderboardComponent() {
  const [selectedTab, setSelectedTab] = useState("players");
  return (
    <Card className="grow">
      <CardHeader className="flex gap-3">
        {/* <Image
          alt="heroui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        /> */}

        <div className="flex flex-col">
          <p className="text-md">Leaderboard</p>
          <p className="text-small text-default-500 whitespace-nowrap mb-2">
            last update: 5 minutes ago.
          </p>
          <div className="flex flex-row  items-center">
            <LeaderboardTabs onSelectionChange={setSelectedTab} />
          </div>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <LeaderboardTable selectedTab={selectedTab} />
      </CardBody>
      {/* <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/heroui-inc/heroui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter> */}
    </Card>
  );
}
