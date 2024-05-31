import './App.css';
import {db,auth} from './firebase.js';
import {useEffect, useState} from 'react';
import Header from './Header';
import Post from './Post.js'

function App() {

  const [user, setUser] = useState();
  const [posts,setPosts]= useState([]);
 
// Meus posts.
  useEffect(()=>{
    auth.onAuthStateChanged(function(val){
      if(val!=null){
        setUser(val.displayName);
      }

    })
      
      

    // Esta pequena linha de codigo faz com que atualize o meu status dos posts  da coleção 
    db.collection('posts').orderBy('timestamp','desc').onSnapshot(function(snapshot){
      setPosts(snapshot.docs.map(function(document){
        return {id:document.id,info:document.data()}
      }))

    })

      
  },[])
  
  //function comentar(id, e){
    //e.preventDefault();
    //alert('Comentário feito com sucesso!'+id)

    //let comentarioAtual = document.querySelector('#comentario-'+id).value;
    //alert(comentarioAtual);
  //}
  return (
    <div className="App">
      
      <Header setUser={setUser} user={user}></Header>
      {
        //montar o componente.
        posts.map(function(val){
          return(
            
              <Post user={user}info={val.info} id={val.id}/>
              
            
            
            )
          })
        }
  
        
      </div>
    );
  }
  
  export default App;
            
            
          
            
            
