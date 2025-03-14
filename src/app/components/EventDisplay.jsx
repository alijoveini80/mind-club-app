"use client";
import { useBale } from "@/app/context/BaleContext";

const EventDisplay = () => {
  const { lastEvent } = useBale();

  return (
    <div className="last-event-container">
      <h2 className="event-title">Last Event:</h2>
      <p className="event-content hover-button">
        {lastEvent ? lastEvent : "No event yet"}
      </p>
    </div>
  );
};

export default EventDisplay;
