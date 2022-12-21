import React, { useEffect, useState } from 'react'



const Index = () => {

    const [users, setUsers] = useState([]);
   const [limit , setLimit] = useState(3);

   const loadmore = () =>{
    setLimit(limit + 1)
   }

//     const deleteuser = async (id) =>{
//  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
//      method:'DELETE'
//     }).then((res)=>{
//     if(res.status!== 200){
//         return
//     }else{
//         setUsers(users.filter((user) =>{
//             return user.id !== id;
//         }))
//     }
    
//      }).catch((err) => {
//         console.log(err)
//      })
   
 

//    }
//    console.log(users)
const slice = users.slice(0, limit);
const  slice1 = users.slice(0, 1)



    const getUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const FinalData = await response.json();
        setUsers(FinalData)
    }



    useEffect(() => {
        getUsers();
    }, [])


    return (
      
            <div className="container">
               
                {
                    
                    // users.filter(Elem => Elem.id <= 3).
                  slice.map((curElem) => {
                        return (
<>
                            <div className="card_item" key={curElem.id}>
                                <div className="card_inner">
                               
                                    <img src={"images.jpg"} alt="" />
                                    <div className="userName">{curElem.name}</div>
                                    <div className="userUrl">{curElem.email}</div>
                                    <div className="usercity">{curElem.address.city}
                                    </div>
                                    <div className="detail-box">

                                       
                                    </div>
                                    <button className="seeMore" >See More</button>
                                </div>

                            </div>
                           
                            </>
                        )
                    })
                }
                                <div className="col-12-p-3">
                                <div> 
                                <button onClick={loadmore} class="button-7" role="button" >Load more</button>
                                   
                                    
                                    </div>
                                    </div>
            </div>              


    )
}

export default Index;

