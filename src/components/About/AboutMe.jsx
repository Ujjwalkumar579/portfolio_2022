import React from "react";
import Menus from "../menus/Menus";
import ThemeSwitcher from "../themeSwitcher/ThemeSwitcher";
import Animation from "../WelcomeAnimation/Animation";
import { motion, useAnimationControls } from "framer-motion";
import "./AboutMe.css";
import { useEffect } from "react";
import { useState } from "react";
const AboutMe = () => {
  //   const [motions, setMottions] = useState({
  //     init: {},
  //     ani: {},
  //     view: {},
  //   });
  //   useEffect(() => {
  //     setMottions({
  //       ...motions,
  //       inti: { top: "250px" },
  //       ani: { top: "0px" },
  //       view: { top: "0px" },
  //     });
  //   }, []);
  return (
    <div className="about_page">
      <ThemeSwitcher />
      <Menus />

      <Animation />
      <motion.div
        className="about_wrapper"
        // initial={motions.init}
        // animate={motions.ani}
        // whileInView={motions.view}
        intitial={{ top: "250px" }}
        animate={{ top: "0px" }}
        transition={{ duration: 1.2 }}
        // animate={controls}
      >
        <h1 className="text-light text-center">
          hi public Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          At, iusto rem quibusdam eum ipsam fugiat ad corporis ipsa eius magnam
          ipsum incidunt optio quis dicta doloribus odio error architecto
          consequuntur. Minus, repudiandae molestias? Ducimus a consectetur
          nostrum perferendis, sit aliquid? Laborum neque a distinctio iusto
          nihil magnam, explicabo ut doloribus blanditiis ipsa rerum, earum
          veniam, possimus commodi. Omnis ad, sequi recusandae tenetur eaque
          minima eius cum libero delectus illo unde aliquam, esse maiores
          consequatur debitis a. Laudantium ducimus voluptatem molestiae labore
          rem nihil voluptates! Debitis totam quam labore et maiores alias,
          maxime autem? Pariatur nisi corporis quis assumenda impedit unde
          magnam voluptas aliquam nihil delectus quos labore optio inventore
          modi dolorem dolore architecto eius, laborum rerum excepturi. Sit et
          officia eligendi minima, id fugiat, molestias nesciunt autem assumenda
          quos perspiciatis accusantium repellendus perferendis, quae unde saepe
          ad mollitia. Doloribus inventore ipsam suscipit! Aspernatur
          praesentium nihil quibusdam assumenda corporis modi ex mollitia
          molestias provident quae amet quas voluptatum in ducimus ipsam, dolor
          vitae facilis asperiores minus molestiae numquam nemo voluptatem
          nulla. Similique perspiciatis modi doloribus sit repudiandae rem natus
          sapiente quibusdam impedit, expedita saepe excepturi praesentium atque
          beatae consequuntur, deleniti incidunt laboriosam iusto quo assumenda
          obcaecati aperiam sint quos ut. Error laudantium porro voluptatem cum
          blanditiis veritatis, corrupti sapiente nisi quisquam ad doloremque
          quo, aliquam doloribus facilis perspiciatis perferendis deleniti fugit
          dolore similique necessitatibus. Praesentium, doloremque blanditiis.
          Numquam, ullam excepturi voluptas tempora doloremque provident cumque
          atque perferendis dolorem sequi ipsa suscipit quaerat corporis
          distinctio, porro et nulla impedit autem repellat aut harum libero
          ratione. Voluptatum atque quos quia neque, iusto praesentium sunt
          tenetur exercitationem voluptatibus sequi necessitatibus ratione cum
          consequuntur quo repellat magnam corporis nostrum? Modi ipsa magni qui
          perferendis temporibus cupiditate quo quasi, atque ullam voluptatem
          sequi doloremque facere reprehenderit esse exercitationem, veritatis
          ab, aperiam deserunt sit laboriosam iusto explicabo voluptate! Optio,
          beatae. Nesciunt suscipit quis cumque non! Totam necessitatibus est
          nam obcaecati, reprehenderit tenetur. Consectetur veniam magnam ullam
          dignissimos a dolorem possimus dolor provident, enim quo dicta sit
          necessitatibus itaque quasi sint voluptatem cumque libero harum beatae
          ducimus praesentium iste est! Minima blanditiis aspernatur quia
          suscipit, asperiores autem doloremque dignissimos cumque, ab quis
          dicta velit quisquam, aperiam corrupti quam accusamus nemo rem neque
          omnis sit modi repellat provident earum. Esse tempora explicabo
          consequuntur sit! In numquam eum natus porro dolores consectetur?
          Cumque at magnam fugiat illum culpa quibusdam voluptatem enim animi
          eligendi repudiandae itaque, quaerat perspiciatis molestiae. Atque
          earum nostrum, ratione soluta exercitationem fugiat tempore aperiam
          natus, omnis obcaecati, temporibus eum consequatur. Eos consectetur,
          impedit, in aliquid corrupti doloribus ad sit dolorem sequi velit modi
          nesciunt eius quae consequuntur quo quisquam? Cum exercitationem
          consequuntur sapiente doloribus ratione totam ullam asperiores
          officiis, quaerat dicta iure quibusdam dolores. Vitae, error autem
          ducimus assumenda, reprehenderit voluptas aut est voluptatum, dolore
          veniam facere ipsum! Numquam autem earum debitis repellendus
          accusantium unde corrupti expedita deleniti libero dicta, praesentium
          necessitatibus quis non! Similique, ut adipisci neque rerum eligendi
          laborum ullam molestiae aspernatur reprehenderit repellat libero vel
          alias quisquam facere? Illum voluptatibus quibusdam recusandae
          temporibus facilis.
        </h1>
      </motion.div>
    </div>
  );
};

export default AboutMe;
