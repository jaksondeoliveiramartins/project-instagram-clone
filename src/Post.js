import {db} from './firebase.js';
import {useEffect, useState} from 'react';
import firebase from 'firebase';
function Post(props){

  const[comentarios,setComentarios] = useState([]);

  useEffect(() =>{
    db.collection('posts').doc(props.id).collection('comentarios').orderBy('timestamp','desc').onSnapshot(function(snapshot){
      setComentarios(snapshot.docs.map(function(document){
        return {id:document.id,info:document.data()}
      }))
      

    })
  },[])



    
  function comentar(id, e){
        e.preventDefault();

        let comentarioAtual = document.querySelector('#comentario-'+id).value;
        // alert(comentarioAtual);
        



        db.collection('posts').doc(id).collection('comentarios').add({
          nome:props.user,
          comentario:comentarioAtual,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
 


        })

        alert('Comentário feito com sucesso!')
        
        // comentario ficar vazio
        document.querySelector('#comentario-'+id).value = "";

        //alert('Comentando no post:'+id);
    }
    
    return  (
        
            <div className='postSingle'>
              <img src={props.info.image}/>
              <p><b>{props.info.userName}</b>: {props.info.titulo}</p>
              
              
              <div className="coments">
                <h2>Ultimos Comentários</h2>
                {
                
                  comentarios.map(function(val){
                    return(
                    <div className='coment-single'>
                           <p><b>{val.info.nome}</b>: {val.info.comentario}</p>
                    </div>
                    )
                  })
                  
                } 
                
              </div> 
            {
              //verificar se não estou logado nao aprece o formulario de comentario. 
              (props.user)?
              <form onSubmit={(e)=>comentar(props.id,e)}>
                <textarea id={"comentario-"+props.id}></textarea>
                <input type ="submit" value="Comentar!"/>
              </form>
              :<div></div>
            }
            </div>
    )
}
export default Post;
              





            
