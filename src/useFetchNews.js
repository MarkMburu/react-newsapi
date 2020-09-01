import { useReducer,useEffect } from 'react';
import axios from 'axios'

const ACTIONS ={
  MAKE_REQUEST:'make-request',
  GETDATA: 'get-data',
  ERROR: 'error'
}
const BASE_URL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=107794bbfbf144c1aa5113b45bb373b5"
const reducer=(state,action)=>{
  switch(action.type){
    case ACTIONS.MAKE_REQUEST:
      return {loading: true,news:[]}
    case ACTIONS.GETDATA:
      return {...state, loading: false,news:action.payload.news}
    case ACTIONS.ERROR:
      return {...state,loading:false,error:action.payload.error,jobs:[] }
    default:
      return state

  }
}
export default function useFetchNews(params,page){
  const [state, dispatch] = useReducer(reducer,{news:[],loading:true})
  useEffect(()=> {
    const cancelToken = axios.CancelToken.source()
    dispatch({ type: ACTIONS.MAKE_REQUEST })
    axios.get(BASE_URL,{
      cancelToken: cancelToken.token,
      params:{page:page,...params}
    }).then((res)=>{
  
      console.log(res.data)
      dispatch({ type: ACTIONS.GETDATA,payload:{news:res.data.articles}})
    }).catch(e => {
      if(axios.isCancel(e)) return
      dispatch({type: ACTIONS.ERROR,payload:{error: e}})
    })
    return()=>{
      cancelToken.cancel()
    }
  },[params,page])

  return state
}