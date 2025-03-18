"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Avatar,
  Badge,
  AvatarIcon,
} from "@heroui/react";

export default function CardSlider() {
  const cards = [
    {
      id: 1,
      you: 0,
      opp: 3,
      rank: "4",
      color: "secondary",
      status: "you",
      title: "Your turn",
      message: "Hurry up, 11h 2m left",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e290260244f4",
    },
    {
      id: 2,
      you: 5,
      opp: 3,
      rank: "8",
      color: "primary",
      status: "opp",
      title: "Opp's Turn",
      message: "Wait for Opp's respond",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e290260244f6",
    },
    {
      id: 3,
      you: 10,
      opp: 7,
      rank: "7",
      color: "danger",
      status: "won",
      title: "You won!",
      message: "You received 100XP",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e290260244",
    },
    {
      id: 4,
      you: 7,
      opp: 7,
      rank: "11",
      color: "warning",
      status: "draw",
      title: "Draw!",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e2902602",
    },
    {
      id: 5,
      you: 6,
      opp: 9,
      rank: "14",
      color: "success",
      status: "lost",
      title: "You lost!",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e2902602367",
    },
    // {
    //   id: 6,
    //   title: "Card 6",
    //   image: "https://example.com/image2.jpg",
    // },

    // Add more cards as needed
  ];

  return (
    <Card className="m-2 mt-1">
      <CardHeader className="flex flex-col items-start">
        <div>
          <p className="text-medium">Match Stats</p>
        </div>
        <div className="text-small text-default-500">
          <p>scroll to view recent match stats.</p>
        </div>
      </CardHeader>
      {/* <Divider /> */}
      <CardBody className="scrollbar-hide pt-0">
        <div className="flex gap-2 w-full overflow-x-auto mx-4 pb-2 ml-0 scrollbar-hide snap-x snap-mandatory">
          {cards.map((card) => (
            <Card
              key={card.id}
              className="w-2/5 md:w-1/5 lg:w-1/6 flex-shrink-0 snap-center"
            >
              <CardHeader id={card.id} className="text-small justify-center">
                {card.title}
              </CardHeader>
              <Divider />

              <CardBody className="text-small">
                <div className="flex flex-row gap-4 w-full items-center justify-center">
                  <Badge
                    as="button"
                    color={card.color ? card.color : "primary"}
                    content={card.rank ? card.rank : "0"}
                    shape="circle"
                    showOutline={true}
                    radius="md"
                    placement="top-left"
                    variant="shadow"
                  >
                    <Avatar
                      showFallback
                      icon={<AvatarIcon />}
                      isBordered
                      as="button"
                      className="transition-transform"
                      color={card.color ? card.color : "primary"}
                      name="Jason Hughes"
                      size="md"
                      src={card.avatar}
                    />
                  </Badge>

                  <Card as="button" className="w-1/2 sm:w-2/5">
                    <CardBody>
                      <div className="flex flex-row font-bold justify-center">
                        <p
                          className={
                            card.color
                              ? `text-${card.color}-600`
                              : "text-primary-600"
                          }
                        >
                          {card.opp}
                        </p>
                        <p className="px-1.5 text-default-600"> - </p>
                        <p className="text-default-600">{card.you}</p>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </CardBody>

              {/* <Image
              src={card.image}
              alt={card.title}
              className="w-full object-cover h-[140px]"
            /> */}

              <Divider />
              <CardFooter
                as="button"
                className="text-tiny sm:text-small text-default-600 justify-center py-2 text-nowrap"
              >
                {card.message}
              </CardFooter>
            </Card>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
