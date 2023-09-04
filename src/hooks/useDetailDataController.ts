"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/router"

const useDetailDataController = () => {
    const router = useRouter();
    const [ outp, setOutp ] = useState({
        "thumbnailUrl": "",
        "name": "",
        "price": 0
    })

    const fetchData = () => {
          const id = router.query.id;
          const url = `${process.env.NEXT_PUBLIC_API_URL}carts/${id}`;
          fetch(url)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              // Parse the response body as JSON
              return response.json();
            })
            .then(data => {
              // Handle the JSON data
              const { thumbnailUrl, name, price } = data;
              setOutp({ thumbnailUrl, name, price });
            })
            .catch(error => {
              // Handle any errors that occurred during the fetch
              console.error('Fetch error:', error);
            });
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { thumbnailUrl: outp.thumbnailUrl, name: outp.name, price: outp.price };
}

export default useDetailDataController;