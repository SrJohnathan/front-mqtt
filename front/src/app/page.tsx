import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
      <>
        <header>
          <nav>
            <button className="circle transparent">
              <i>arrow_back</i>
            </button>
            <h5 className="max">Title</h5>
            <button className="circle transparent">
              <i>attach_file</i>
            </button>
            <button className="circle transparent">
              <i>today</i>
            </button>
            <button className="circle transparent">
              <i>more_vert</i>
            </button>
          </nav>
        </header>

        <main className={"responsive"}>


        </main>

      </>


  )
      ;
}
