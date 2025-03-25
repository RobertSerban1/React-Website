//Import Images
import athlete from "./img/athlete-small.png";
import sauna from "./img/sauna.jpg";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athlete2.png";
import jacuzzi from "./img/jacuzzi.jpg";
import theracer2 from "./img/the-racer2.jpg";
import pool from "./img/pool.jpg";

export const MovieState = () => {
  return [
    {
      title: "Force Area",
      mainImg: athlete,
      secondaryImg: athlete2,
      url: "/work/force-area",
      awards: [
        {
          title: "Built to lift. Made to grow.",
          description:
            "Our strength zone is where real transformation happens — dumbbells, barbells, power racks, and no excuses.",
        },
        {
          title: "Heavy weights, heavy gains.",
          description:
            "From deadlifts to PRs, this is the area designed for serious lifters and those who want to become one.",
        },
        {
          title: "The power corner.",
          description:
            "Loaded with high-end strength equipment, this is your go-to zone to test limits and build raw muscle.",
        },
      ],
    },
    {
      title: "Recovery Area",
      mainImg: pool,
      url: "/work/recovery-area",
      secondaryImg: sauna,
      awards: [
        {
          title: " Recover. Recharge. Rise.",
          description:
            "Step into a space designed to relax your body and reset your mind — sauna, pool, and peaceful recovery zones await.",
        },
        {
          title: "Where strength meets serenity.",
          description:
            "After every intense workout, give your body what it deserves — hydrotherapy, stretching areas, and full mental reset.",
        },
        {
          title: "Recovery isn't optional. It's part of the plan.",
          description:
            "Our recovery zone features everything you need to prevent injury, reduce soreness, and feel your best — every day.",
        },
      ],
    },
    {
      title: "Sports Nutrition",
      mainImg: theracer,
      url: "/work/nutrition",
      secondaryImg: theracer2,
      awards: [
        {
          title: "Fuel your performance.",
          description:
            "From protein shakes to clean energy snacks, we’ve got the fuel your body needs to push harder and recover faster.",
        },
        {
          title: "Nutrition that works as hard as you do.",
          description:
            "Maximize your gains with science-backed supplements and personalized advice from our certified nutrition partners.",
        },
        {
          title: "Eat smart. Train harder.",
          description:
            "Grab a shake post-workout or stock up on essentials — our in-house nutrition bar keeps you powered through every rep.",
        },
      ],
    },
  ];
};
