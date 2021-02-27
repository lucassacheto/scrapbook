import { NotesProvider } from "../contexts/NotesContexts";

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  return (
    <NotesProvider>
      <Component {...pageProps} />
    </NotesProvider>
  )

}

export default MyApp
