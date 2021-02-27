import Head from "next/head"
import { InputNote } from "../components/InputNote"
import { Notes } from "../components/Notes"

export default function Home() {
  return (
    <div>
  
      <div className="container">
        <Head>
          <title>Home | Scrapbook</title>
        </Head>
        
        <header>
          <h1>Scrapbook</h1>
          <p>Notes like Orkut v0.1</p>
        </header>

        <section>
          <div>
            <InputNote />
            <Notes />
          </div>  
        </section>
      
      <footer>
        @lucassacheto
      </footer>

      </div>
      
    </div>
  )
}
