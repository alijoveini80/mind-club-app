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
          {/* <p className="text-small text-default-500">
            try creating / joining a room to play with friends.
          </p> */}
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-row gap-2">
        <div className="flex flex-row items-center mt-0">
          {/* <p className="text-md">Create</p> */}
          <p className="w-[45%] text-small text-default-600 text-left">
            try creating / joining a room to play with friends.
          </p>
          <div className="grow">
            <Button className="mx-2" color="primary" variant="flat">
              Create
            </Button>
            <Button color="secondary" variant="flat">
              Join
            </Button>
          </div>
        </div>
        {/* <CreateJoinRoomSection section="create" />
        <CreateJoinRoomSection section="join" /> */}
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
