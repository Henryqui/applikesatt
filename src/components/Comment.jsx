import { Trash } from "@phosphor-icons/react/dist/ssr"
import styles from "./Comment.module.css"
import { ThumbsUp } from "@phosphor-icons/react"

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://github.com/henryqui.png" alt="foto do usuário" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Henryqui Bacellar</strong>
                            <time title="10 de Setembro as 09:44h" dateTime='2024/10/10 09:44:00'> há 1h atrás</time>
                            <button title='Excluir Comentário'>
                                <Trash size={24}/>
                            </button>
                        </div>
                    </header>
                    <p>Muito bem Henryqui, Parabéns !!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp size={20}/>
                        curtir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}