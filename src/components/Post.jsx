import { Comment } from './Comment';
import styles from './Post.module.css';


export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar}
                        src="https://github.com/henryqui.png" 
                    />      
                <div className={styles.authorInfo}>
                    <strong>Henryqui Bacellar </strong>
                    <span>Web Developer</span>
                </div>
                </div>
                <time title="10 de Setembro as 09:44h" dateTime='2024/10/10 09:44:00'>publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Gala Farela !!!</p>
                <p>Amanhã teremos viagem a Bienal !!!</p>
                <p>
                    <a href="#">#bienaldolivrosp</a>{' '}
                    <a href="#">#eteccidadedolivro</a>{' '}
                    <a href="#">#vempraetec</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback !</strong>
                <textarea placeholder='Deixe um comentário'></textarea>

                <footer>
                <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment></Comment>
                <Comment></Comment>
                <Comment></Comment>
            </div>

        </article>
    )
}