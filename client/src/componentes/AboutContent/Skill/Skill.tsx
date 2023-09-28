import { DiNodejsSmall } from "react-icons/di";
import { SiExpress, SiSequelize, SiHtml5, SiCsswizardry } from "react-icons/si";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoRedux,
} from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import styles from "./Skill.module.css";
function Skill() {
  return (
    <div className={styles.container}>
      <div>
        <section>
          <DiNodejsSmall size={70} />
          <p>NodeJS</p>
        </section>
      </div>
      <div>
        <section>
          <BiLogoTypescript size={70} />
          <p>Typescript</p>
        </section>
      </div>
      <div>
        <section>
          <BiLogoJavascript size={70} />
          <p>JavaScript</p>
        </section>
      </div>
      <div>
        <section>
          <SiExpress size={70} />
          <p>Express</p>
        </section>
      </div>
      <div>
        <section>
          <SiMysql size={70} />
          <p>MySQl</p>
        </section>
      </div>
      <div>
        <section>
          <SiSequelize size={70} />
          <p>Sequelize</p>
        </section>
      </div>
      <div>
        <section>
          <BiLogoReact size={70} />
          <p>React</p>
        </section>
      </div>
      <div>
        <section>
          <BiLogoRedux size={70} />
          <p>Redux</p>
        </section>
      </div>
      <div>
        <section>
          <SiHtml5 size={70} />
          <p>HTML5</p>
        </section>
      </div>
      <div>
        <section>
          <SiCsswizardry size={70} />
          <p>CSS</p>
        </section>
      </div>
    </div>
  );
}

export default Skill;
