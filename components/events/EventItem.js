import Link from "next/link";
import Image from "next/image";

import Button from "../ui/Button";
import AddressIcon from "../icons/AddressIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import DateIcon from "../icons/DateIcon";

import classes from "./eventItem.module.css";

export default function EventItem(props) {
  const { id, title, date, image, location } = props;
  console.log(image);

  return (
    <li className={classes.item}>
      <Image src={"/" + image} alt={title} width={80} height={100} />
      {/* <img src={"/" + image} alt={title} /> */}
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{date}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{location}</address>
          </div>
        </div>
        <div className={classes.actions}>
          {/* <Link href={`/events/${id}`}>Explore Event</Link> */}
          <Button link={`/events/${id}`}>
            <span> Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>{" "}
          </Button>
        </div>
      </div>
    </li>
  );
}
