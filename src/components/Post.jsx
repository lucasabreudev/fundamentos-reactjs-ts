import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/99924122?v=4" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Lucas</strong>
                        <span>Front-end Developer</span>
                    </div>
                </div>

                <time title="15 de Março às 17h" dateTime="2023-03-15 17:00:10">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, facere a iusto cumque pariatur asperiores expedita quasi modi praesentium dolor mollitia corporis id itaque illum placeat sapiente sed quam nemo.</p>
            </div>
        </article>
    )
}