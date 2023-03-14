import { Post } from "./Post";
import { Header } from './components/Header';
import { Sidebar } from "./components/Sidebar";

import './global.css';
import styles from './App.module.css';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper} >
        <Sidebar />
        <main>
          <Post
            author="Teste"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, omnis deleniti veritatis ullam vitae soluta natus eaque voluptates. Sit cum voluptatibus architecto possimus voluptate at? Nam quisquam consequatur impedit consectetur?"
          />
          <Post
            author="Teste"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, omnis deleniti veritatis ullam vitae soluta natus eaque voluptates. Sit cum voluptatibus architecto possimus voluptate at? Nam quisquam consequatur impedit consectetur?"
          />
        </main>

      </div>

    </div>
  )
}
