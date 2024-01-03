import { useEffect, useState } from "react";
import axios from 'axios';
const AxiosGet = () => {

    const [userDetails, setUserDetails] = useState([]);

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
            setUserDetails(res.data);

        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
       
    }, []);

    return (
        <>
            <div>
                <h2>asios</h2>
                {
                    userDetails.map((item) =>
                        <p>{item.title}</p>
                    )
                }
            </div>
        </>
    )

}

export default AxiosGet;