import { useState, useEffect } from "react";
/*
type onGetResultFlightsProps ={
  originLocationCode: any,
  destinationLocationCode: any,
  departureDate: any,
  returnDate: any,
  adults: any,
  currencyCode: string,
  nonStop: any
} 
*/
export const useFlights = () =>{

    const apiUrl = import.meta.env.VITE_REACT_APP_API_AIRPORTS_URL;

    
    const onGetResultFlights = (originLocationCode:any, destinationLocationCode:any, departureDate:any, returnDate:any, adults:any, currencyCode:any, nonStop:any)=>{
        //Filters, sort, and page should come from invocation

        console.log("**************************")
        console.log("From inside useFlights")
        console.log(originLocationCode);
        console.log(destinationLocationCode);
        console.log(departureDate);
        console.log(returnDate);
        console.log(adults);
        console.log(currencyCode);
        console.log(nonStop);

        /*
        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
          }
        fetch(`${apiUrl}/`, requestOptions)
        .then(response=>response.json())
        .then(data=> {
          console.log(data);
        })
        */
    }

    return { onGetResultFlights }
}