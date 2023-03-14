import { Post } from "./Post";
import { Header } from './components/Header';

import './global.css';

export function App() {

  return (
    <div>
      <Header />
      <Post
        author="Teste"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, omnis deleniti veritatis ullam vitae soluta natus eaque voluptates. Sit cum voluptatibus architecto possimus voluptate at? Nam quisquam consequatur impedit consectetur?"
      />
    </div>
  )
}
