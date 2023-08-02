import { useState } from 'react';

export default function Home() {
  const [forUserA, setforUserA] = useState('');
  const [forUserB, setforUserB] = useState('');

  const[chatHistory,setchatHistory]=useState([])

  const fetchchatHistory= async()=>{
    const response= await fetch('/api/History')
    const data=await response.json()
    setchatHistory(data)
  }

  return (
    <>
      <div className="container">
          <table width="100%">
            <tbody>
              <tr align="center">
                <td>
                    <h1><u>User A</u></h1>
                    <div className='chatbox'>
                      <p><strong>Received:</strong> {forUserA}</p>
                      <form>
                        <label htmlFor="forUserB">Send:</label>
                        <input type="text" id="forUserB" value={forUserB} onChange={(e) => setforUserB(e.target.value)} required /><br />
                      </form>
                    </div>
                </td>
                <td>
                    <h1><u>User B</u></h1>
                    <div className='chatbox'>
                      <p><strong>Received:</strong> {forUserB}</p>
                      <form>
                        <label htmlFor="forUserA">Send:</label>
                        <input type="text" id="forUserA" value={forUserA} onChange={(e) => setforUserA(e.target.value)} required /><br />
                      </form>
                    </div>
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={fetchchatHistory} id='prevButton'>Previous</button>
          <div className='preChatBox'>
            {chatHistory.map(chat=>{  
      
              return(
                <div>{chat.text}</div>
                )

              }
          )}
          </div>
      </div>
    </>
  )
}
