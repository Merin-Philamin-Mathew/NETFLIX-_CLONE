import React,{useEffect,useState} from 'react'
import Youtube from "react-youtube"
import "./RowPost.css"
import {imageUrl,API_KEY } from '../../constants/constants'
import axios from '../../axios'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(props.urls).then(response=>{
      console.log(response.data.results)
      setMovies(response.data.results)
    }).catch(err=>{
      // alert('Network Error')
    })
  },[])


  const handleMovie = (id)=> {
    console.log(id)
   
    axios.get(`movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then(response=>{
      if(response.data.results.length!==0){
        props.onClickFn(response.data.results[0].key)
      }else{
        console.log('Array empty')
      }
    }
  )}

  return (
    <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
              {movies.map((obj)=>
                <img onClick={()=>handleMovie(obj.id)} className={ props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
              )}
            </div>
        </div>
  )
}
export default RowPost
