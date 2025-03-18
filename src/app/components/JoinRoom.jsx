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

export default function JoinRoom() {
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
          {/* <p className="text-md">Join</p> */}
          <p className="text-small text-default-600">
            Try joining a room to play with friends.
          </p>
          <div className="flex flex-col items-center gap-2 mt-4">
            {/* <Button
              className="min-w-[70%] sm:min-w-[50%]"
              color="primary"
              variant="flat"
            >
              Create
            </Button> */}
            <Button
              className="min-w-[70%] sm:min-w-[50%]"
              color="secondary"
              variant="flat"
            >
              Join
            </Button>
          </div>
        </div>
      </CardHeader>
      {/* <Divider /> */}
      {/* <CardBody></CardBody> */}
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
