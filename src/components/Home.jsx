import axios from "axios";
import { useEffect, useState } from "react";
import Header from './Header'
import News from './News'
import Loading from './Loading'

const key = "b959dc228a324d3cb358b08f91fa01ab";
const topicRelated = "https://newsapi.org/v2/everything?";
const latestAround = "https://newsapi.org/v2/top-headlines?country=us&apiKey=b959dc228a324d3cb358b08f91fa01ab"

export default function Home({loading,setLoading}) {

    const [topic, setTopic] = useState(null);
    const [articles,setArticles] = useState([]);

    const fecthTopicData = async () => {
        setLoading(true);
        const url = `${topicRelated}q=${topic}&apiKey=${key}`;
        try {
            const response = await axios.get(url);
            setArticles(response?.data?.articles);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const fecthLatest = async () => {
        setLoading(true);
        const url = latestAround;
        try {
            const response = await axios.get(url);
            setArticles(response?.data?.articles);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fecthLatest();
    }, []);

    useEffect(() => {
        fecthTopicData();
    },[topic]);

    return (
        <div>
            <Header setTopic={setTopic} fecthLatest={fecthLatest} />
            {loading ? <Loading/> : <News articles={articles} />}
        </div>
    );
}

