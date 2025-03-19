"use client";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  User,
} from "@heroui/react";
import { useCallback } from "react";

const players = [
  {
    key: "1",
    name: "Tony Reichert",
    score: 500,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    role: "CEO",
    status: "Active",
  },
  {
    key: "2",
    name: "Zoey Lang",
    score: 450,
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    role: "Technical Lead",
    status: "Paused",
  },
  {
    key: "3",
    name: "Jane Fisher",
    score: 380,
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    role: "Senior Developer",
    status: "Active",
  },
];
const clans = [
  {
    key: "1",
    name: "PF",
    score: 1050,
    // avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    role: "CEO",
    status: "Active",
  },
  {
    key: "2",
    name: "DNA",
    score: 980,
    // avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    role: "CEO",
    status: "Active",
  },
  {
    key: "3",
    name: "CIC",
    score: 730,
    // avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    role: "CEO",
    status: "Active",
  },
];

const columns = [
  {
    key: "name",
    label: "Name",
  },
  { key: "score", label: "Score" },
  //   {
  //     key: "role",
  //     label: "ROLE",
  //   },
  //   {
  //     key: "status",
  //     label: "STATUS",
  //   },
];

export default function LeaderboardTable({ selectedTab }) {
  const filteredRows = selectedTab === "players" ? players : clans;

  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{
              radius: "full",
              size: "sm",
              src: user.avatar,
              className: "px-0",
            }}
            classNames={{
              name: "whitespace-nowrap",
              description: "text-default-500",
            }}
            description={user.email}
            name={
              cellValue.length > 10 ? `${cellValue.slice(0, 10)}...` : cellValue
            }
          >
            {user.email}
          </User>
        );
      case "score":
        return (
          <div className="mb-1 ml-2">
            <p className="text-small text-default-600">{cellValue}</p>
          </div>
        );
      //   case "role":
      //     return (
      //       <div className="flex flex-col">
      //         <p className="text-bold text-small capitalize">{cellValue}</p>
      //         <p className="text-bold text-tiny capitalize text-default-500">
      //           {user.team}
      //         </p>
      //       </div>
      //     );
      //   case "status":
      //     return (
      //       <Chip
      //         className="capitalize border-none gap-1 text-default-600"
      //         color={statusColorMap[user.status]}
      //         size="sm"
      //         variant="dot"
      //       >
      //         {cellValue}
      //       </Chip>
      //     );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table
      // hideHeader
      removeWrapper
      isStriped
      aria-label="Example table with dynamic content"
      className="pb-2"
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody emptyContent={"No users found"} items={filteredRows}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
      {/* <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell className="text-tiny">
                {getKeyValue(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody> */}
    </Table>
  );
}
