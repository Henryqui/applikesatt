import { format, formatDistanceToNow } from 'date-fns';
import { Comment } from './Comment';
import styles from './Post.module.css';
import ptBR from 'date-fns/locale/pt-BR';

export function Post({author, dataPublicacao, content}){
    const dataRelativaAoPost = formatDistanceToNow(dataPublicacao, {locale: ptBR,addSuffix: true})
    const dataFormatada = format(dataPublicacao, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR});
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar}
                        src={author.avatarUrl} 
                    />      
                <div className={styles.authorInfo}>
                    <strong>{author.nome}</strong>
                    <span>{author.cargo}</span>
                </div>
                </div>
                <time title={dataFormatada} dateTime={dataPublicacao.toISOString()}>
                    {dataRelativaAoPost}
               </time>
            </header>
            <div className={styles.content}> 
             {
                content.map(line => {
                    if(line.type === 'paragraph'){
                         return <p>{line.content}</p>;
                    } 
                     else if(line.type === 'link'){
                         return <p><a href='#'>{line.content}</a></p>
                    }
                    })
                }
            
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