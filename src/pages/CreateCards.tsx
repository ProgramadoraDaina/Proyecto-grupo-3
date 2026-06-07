import {CreateFlashcard} from "@/features/flashcards/components/addCard/addCards";
import style from "./listcards.module.css"
export const CreateCards = () => {
  return (
    <div>
      <section>
        <h2 className={style.title}>Crear flashcard</h2>
        <CreateFlashcard />
      </section>
    </div>
  )
}

