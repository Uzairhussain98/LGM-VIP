import React ,{useState , useEffect} from 'react'
import './nav.css'
import Card from './Card';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";


function Navigation() {


  useEffect( () => {
    async function fetchData(){
        const apiResponse = await fetch('https://reqres.in/api/users?page=1');
        console.log(apiResponse);
        const datafromAPI = await apiResponse.json();
        console.log(datafromAPI);
        setData(datafromAPI.data);

        setTimeout(() => {  setLoading(true); }, 3000);
        
        
       

    }

    fetchData();
  
},[])

  const [data , setData] = useState([]);
  const [isLoading , setLoading] = useState(false);


    const [btn , setbtn] = useState(false);
    if (btn === false) {
  return (
    <div className="nav">
        <h1>UserData</h1>

        <button className="navbtn" onClick={() => setbtn(true)}>Get Users</button>
        
    </div>)
    }

    else{

      if (isLoading===false){
      return (
        <div>
        <div className="nav">
            <h1>UserData</h1>
            <button className="navbtn" onClick={() => setbtn(true)}>Get Users</button>

            </div>
            {/* <h2>{data[3].first_name}</h2> */}
            
            <div className="load">
        
            <Loader 
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
            </div>

            


        </div>)}

        else{

          return (
            <div>
            <div className="nav">
                <h1>UserData</h1>
                <button className="navbtn" onClick={() => setbtn(true)}>Get Users</button>
    
                </div>
                {/* <h2>{data[3].first_name}</h2> */}
                
                <div className="users">
                <Card
                avatar={data[3].avatar}
                fname ={data[3].first_name}
                lname ={data[3].last_name}
                email ={data[3].email}
                />
                <Card
                avatar={data[2].avatar}
                fname ={data[2].first_name}
                lname ={data[2].last_name}
                email ={data[2].email}
                />
                <Card
                avatar={data[1].avatar}
                fname ={data[1].first_name}
                lname ={data[1].last_name}
                email ={data[1].email}
                />
              
                </div>
    
    
                <div className="users">
                <Card
                avatar={data[4].avatar}
                fname ={data[4].first_name}
                lname ={data[4].last_name}
                email ={data[4].email}
                />
                <Card
                avatar={data[5].avatar}
                fname ={data[5].first_name}
                lname ={data[5].last_name}
                email ={data[5].email}
                />
                <Card
                avatar={data[0].avatar}
                fname ={data[0].first_name}
                lname ={data[0].last_name}
                email ={data[0].email}
                />
              
                </div>
    
                
    
    
            </div>)









        }




    }
    
  
}

export default Navigation
