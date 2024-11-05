
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import styles from "./App.module.css"
import './global.css'
import { Post } from "./components/Post"

// author: {avatarUrl: "", nome: "", cargo: ""}
// dataPublicacao: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:"https://github.com/henryqui.png",
      nome: "Henryqui Bacellar",
      cargo: "Aluno da Etec"
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera 🐱‍🚀!!'},
      {type: 'paragraph', content: 'Amanhã teremos viagem à Bienal'},
      {type: 'link', content: 'uol.com.br'},
    ],
    dataPublicacao: new Date('2024/10/10 09:44:00')

  },
  {
    id: 2,
    author: {
      avatarUrl:"https://github.com/furlanrogerio.png",
      nome: "Rogerio Furlan",
      cargo: "Professor da Etec"
    },
    content: [
      {type: 'paragraph', content: 'Fala Galera ✨!!'},
      {type: 'paragraph', content: 'Vou viajar para a Cijun'},
      {type: 'link', content: 'g1.com.br'},
    ],
    dataPublicacao: new Date('2024/05/11 09:44:00')

  }
]

export function App() {
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
      <Sidebar/>
        <main>

        {posts.map(post => {
          return(
            <Post
            author = {post.author}
            content = {post.content}
            dataPublicacao = {post.dataPublicacao}
            />
          )
        })}

        </main>
      </div>
    </div>
  )
}
