import React ,{ useState , useEffect} from 'react'



function Search() {
    const [search,setSearch]=useState("")
    useEffect(()=>{

    const getData=()=>{

    console.log("data has been fetched")
}
     const timer=setTimeout(getData,500)
    console.log("searching")
    return()=>{clearTimeout(timer)}
    },[search])

    return (
        <div>
            <input type="text" placeholder='search' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
    )
}


export default Search