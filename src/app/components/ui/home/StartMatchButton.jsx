import { Button } from "@heroui/react";
export default function StartMatchButton() {
  return (
    <div className="flex flex-row justify-center items-center pt-2 w-full">
      <Button
        className="text-md bg-emerald-200 dark:bg-emerald-800 text-emerald-800 dark:text-teal-100 text-center"
        variant="shadow"
        size="lg"
      >
        Start New Match
      </Button>
    </div>
  );
}
