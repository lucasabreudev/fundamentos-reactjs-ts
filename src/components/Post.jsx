import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/99924122?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Lucas</strong>
                        <span>Front-end Developer</span>
                    </div>
                </div>

                <time title="15 de Março às 17h" dateTime="2023-03-15 17:00:10">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, facere a iusto cumque pariatur asperiores expedita quasi modi praesentium dolor mollitia corporis id itaque illum placeat sapiente sed quam nemo.</p>
                <p>
                    <a href="">#project</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe o seu comentário'></textarea>

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
            </div>
        </article>
    )
}