import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dummy-data";

export default function EventListPage() {
  const events = getAllEvents();

  return (
    <div>
      <EventList events={events} />
    </div>
  );
}
