import EventItem from "./EventItem";
import classes from "./eventList.module.css";

export default function EventList(props) {
  const { events } = props;
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
}
