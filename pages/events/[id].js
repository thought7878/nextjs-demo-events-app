import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

export default function EventDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const event = getEventById(id);
  if (!event) {
    return <p>No event found!</p>;
  }

  const { title, location } = event;

  return (
    <Fragment>
      <EventSummary title={title}></EventSummary>
      <EventLogistics {...event} address={location} imageAlt={title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}
