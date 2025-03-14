'use client'

export default function TestBox() {
  return (
    <div className="!bg-white !text-black dark:!bg-red-500 dark:!text-white p-4 rounded">
      If this turns red in dark mode, it works!
    </div>
  );
}