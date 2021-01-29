import React,{ useState, useEffect  } from 'react'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import ThumbnailGroup from '../components/ThumbnailGroup'
import Youtube from 'simple-youtube-api'
import InfiniteScroll from 'react-infinite-scroll-component';
import './Home.css'
const youtube  =   new  Youtube('AIzaSyDYZpJLuRwFxFOtf5bQLRqwJ1hnguJLeQ8')


function Home() {
    const [videoCategory,setVideoCategory]=useState([])
    const [latestvideoCategory,setLatestVideoCategory]=useState([])
    const [latestForeignNews,setLatestForeignNews]=useState([])
    const [latestCovidNews, setLatestCovidNews] = useState([])
    const [items,setItems]=useState([])
    
    // USE  EFFECT
    const fetchData = async () => {
        // const  result  =  await youtube.searchVideos('hello',10)
        const  result  =  await youtube.searchVideos('',8)
        setItems(result)
        console.log(result)
    } 
    fetchData()
    useEffect(() => {
        const callApi = async () => {
            // const  result  =  await youtube.searchVideos('hello',10)
            const  result  =  await youtube.searchVideos('',8)
            setVideoCategory(result)
        } 
        callApi()

        const latestVideos = async () => {
            // const  result  =  await youtube.searchVideos('hello',10)
            const  result  =  await youtube.searchVideos('Hollywood movies',8)
            setLatestVideoCategory(result)
        } 
        latestVideos()
        
        const latestForeignNews = async () => {
            const  result  =  await youtube.searchVideos('Foreign news',8)
            setLatestForeignNews(result)
        } 
        latestForeignNews()
        
        const latestCovidNews = async () => {
            const  result  =  await youtube.searchVideos('Latest COVID 19 news',8)
            setLatestCovidNews(result)
        } 
        latestCovidNews()
        
    },[])
    
// {    console.log(videoCategory)}
    return (
        <div className='home'>
            <Navbar/>
            <div className="homeContainer">
                <Sidebar />
                <div className="group">
                    <div className="slide">
                        <div className="left">
                            <div className="top">
                                <img src="https://www.gstatic.com/youtube/img/promos/growth/864dc47e45a7a0b06602f73155980de282b939a6d0adc7bdcda231f965bf796a_640x48.png" alt="" />
                                <h2>Lose yourself   in ad-free Youtube</h2>
                            </div>
                            <button>get it now</button>
                        </div>
                        <div className="right">
                            <img src="https://www.gstatic.com/youtube/img/promos/growth/0cf8b5de70b5f94a58cc47037e83bd028fe1e63fba98e0e68fafa923db69bd82_2560x520.jpeg" alt=""/>
                        </div>
                        <CloseRoundedIcon/>
                    </div>
                    <div className="row">
                        <ThumbnailGroup videoCategory={ videoCategory }/>
                    </div>
                    <h4>trending</h4>
                    <div className="row">
                        <ThumbnailGroup videoCategory={ latestvideoCategory }/>
                    </div>
                    <div className="row">
                        <ThumbnailGroup videoCategory= {latestForeignNews} />
                    </div>
                    <div className="info">
                        <div className="left">
                            <button>
                                COVID-19 Get the latest information from the NCDC about COVID-19
                            </button>
                            <div className="topic">
                                <h3>
                                    COVID-19
                                </h3>
                                <p>
                                    Get the latest information from the NCDC about COVID-19 
                                    <span>
                                        Featured
                                    </span>
                                </p>
                                <div className="link">
                                    <p>learn more</p>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <CloseRoundedIcon/>
                        </div>
                    </div>
                    <div className="row">
                        <ThumbnailGroup videoCategory= {latestCovidNews} />
                    </div>
                    {/* <div className="row">
                        <ThumbnailGroup videoCategory />
                    </div> */}
                    <div className="row">
                        {/* <InfiniteScroll
                            dataLength={items.length} //This is important field to render the next data
                            next={fetchData}
                            hasMore={true}
                            loader={<h4>Loading...</h4>}
                            endMessage={
                                <p style={{ textAlign: 'center' }}>
                                <b>Yay! You have seen it all</b>
                                </p>
                            }
                        >
                            <ThumbnailGroup videoCategory={items} />
                            {items}
                        </InfiniteScroll> */}
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Home
