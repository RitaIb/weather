import React, { useState,useEffect } from 'react'

import MeetupList from '../components/meetups/MeetupList'

export default function AllMeetUpsPage() {
  
  const [isLoading,setLoading]=useState(true);
  const [loadedMeetups,setLoadedMeetup]=useState([]);

  useEffect(()=>{
    setLoading(true);
    fetch('https://fir-1-3f7c5-default-rtdb.firebaseio.com//meetups.json',
    ).then(response=>{
     return response.json();
    }).then(data=>{
      const meetups=[];

      for(const key in data){
        const meetup={
          id:key,
          ...data[key]
        };
        meetups.push(meetup);
      }

       setLoading(false);
       setLoadedMeetup(meetups);
   
    });

  },[]);



 if(isLoading){
  return (
    <section>Loading</section>
  )
 }
 
  return (
    <div>
        <h1>all meetups</h1>
        <MeetupList meetups={loadedMeetups}/>
    </div>
  )
}
