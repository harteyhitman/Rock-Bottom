import styles from "./styles.module.scss";
import { events } from "@/data";
import { GoDash } from "react-icons/go";
import { LuArrowRight } from "react-icons/lu";

const Events = () => {
  return (
    <div className={styles.events_conts}>
      <h1>Upcoming Events</h1>
      <div className={styles.event_cards}>
        {events.map((event) => (
          <div key={event.id} className={styles.event}>
            <div className={styles.date}>
              <h4>{event.date}</h4>
              <p>{event.calen}</p>
            </div>
            <div className={styles.title}>
              <h2>
                {event.event}{" "}
                <span>
                  <GoDash />
                </span>
              </h2>
              <h3>{event.title}</h3>
            </div>
            <div className={styles.icon}>
              <LuArrowRight />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
