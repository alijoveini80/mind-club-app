"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
} from "@heroui/react";
import CreateJoinRoomSection from "./CreateJoinRoomSection";

export default function CreateJoinRoom() {
  return (
    <Card className="grow w-full h-[50%]">
      <CardHeader className="flex gap-3">
        {/* <Image
          alt="heroui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        /> */}

        <div className="flex flex-col">
          <p className="text-md">Room</p>
          <p className="text-small text-default-500">5 rooms, 22 players</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-2">
        <CreateJoinRoomSection section="create" />
        <CreateJoinRoomSection section="join" />
      </CardBody>
      {/* <Divider /> */}
      {/* <CardFooter>
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
