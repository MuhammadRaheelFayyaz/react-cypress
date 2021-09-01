import { useEffect, useState } from 'react'
import axios from 'axios'

const Posts = () => {
    const [data, setData] = useState([])
    const loadData = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/photos')
        setData(res.data.slice(0, 10))
    }
    useEffect(() => {
        loadData()
    }, [])
    return <div className="container">
        {data.map(({ thumbnailUrl, title }) => {
            return <div className="photo-card">
                <img src={thumbnailUrl} className="photo" />
                <h2>{title}</h2>
            </div>
        })}
    </div>
}
export default Posts