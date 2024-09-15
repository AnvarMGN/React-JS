import './App.css'
import Message from './components/Message'

function App() {
  const message = [
    { number: "1", title: "Heading 1", text: "lorem10" },
    { number: "2", title: "Heading 2", text: "lorem11" },
    { number: "3", title: "Heading 3", text: "lorem12" }
  ]
  return (
    <>
      <ul>
        <h3>Сообщения</h3>
        <li><Message {...message[0]} /></li>
        <li><Message {...message[1]} /></li>
        <li><Message {...message[2]} /></li>
      </ul>
    </>
  )
}

export default App;
