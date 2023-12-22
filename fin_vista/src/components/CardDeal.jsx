import React from "react";
import styles, { layout } from "../style";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in a few
        steps
      </h2>
      <p className={`${styles.paragraph} max-w[470px] mt-5`}>
        Find the best card offer in a few steps with our bank. We provide innovative card selection tools that match your needs.
        Simply define your preferences and we'll help you find the card that's perfect for your financial goals
      </p>
      <Button styleTop="mt-10" />
    </div>

    <div>
      <img src={card} alt="cardInfo" className="w-[100%] h-[100%]" />
    </div>

  </section>
);

export default CardDeal;