import React, { useContext, useEffect, useState } from 'react'
import Card from './Card';
import { ApiContext } from '../context/ApiContext';
import Spinner from './Spinner';
export default function HomePage() {
    const { loading,  myApi } = useContext(ApiContext)


    //     const [rover,setRover]=useState(data);
    //     useEffect(()=>{
    // setRover(data)
    //     }, [])
    return (
        <div className='container-fluid d-flex flex-wrap '>

            {
                loading ? <Spinner /> : (myApi.map(item => {
                    return (
                        <div className="m-2" style = {{ width: "13rem", maxHeight: "360px" }}  key={item.id}>
                            <Card data={item} />
                        </div>
                    );
                }))
            }
            {/* {
              loading ? <Spinner /> : (
                  (() => {
                      const elements = [];
                      for (let i = 0; i < api.length; i++) {
                          const item = api[i];
                          elements.push(
                              <div className='w-25 m-2' key={item.id}>
                                  <Card data={item} />
                              </div>
                          );
                      }
                      return elements;
                  })()
              )
          } */}



        </div>
    )
}
