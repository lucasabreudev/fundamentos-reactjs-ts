import { Header } from './components/Header';
import { Sidebar } from "./components/Sidebar";
import { Post } from './components/Post';

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/lucaslabreu.png',
      name: 'Lucas Abreu',
      role: 'Front-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Olá pessoal, boa noite!' },
      { type: 'link', content: '#study' }
    ],
    publishedAt: new Date('2023-03-16 15:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/lucaslabreu.png',
      name: 'Lucas Abreu',
      role: 'Front-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Good evening!' },
      { type: 'link', content: '#learning_english' }
    ],
    publishedAt: new Date('2023-03-10 17:00:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper} >
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
