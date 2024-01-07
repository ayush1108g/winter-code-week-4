import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { scrollToHandler } from '../store/scrollTo';
import { useSelector } from 'react-redux';
const YouTubePlaylistPage = () => {
    const navigate = useNavigate();
    const { playlistid } = useParams();
    const [playlist, setPlaylist] = useState(null);
    // 

    useEffect(() => {
        const link = "https://www.googleapis.com/youtube/v3/playlists";
        const params = {
            part: "snippet",
            id: playlistid,
            key: process.env.REACT_APP_YT_API_KEY_1,
        };
        const send = async () => {
            try {
                const response = await axios.get(link, { params: params });
                console.log(response.data.items[0]);
                setPlaylist(response.data.items[0]);
            } catch (error) {
                console.log(error);
            }
        }
        send();

    }, []);

    if (!playlist || playlist.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div id='playid' className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100%', flexDirection: 'column' }}>
            <h2 style={{ margin: '0 100px 0 100px' }}>{playlist.snippet.title}</h2>
            <div className="responsive-iframe">
                <iframe
                    title="123"
                    width="50%"
                    height="100"
                    src={`https://www.youtube.com/embed/videoseries?list=${playlistid}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe></div>
            <br />
            <br />
            <br />
            <p style={{ maxWidth: '80vw', margin: '0 100px 0 100px', whiteSpace: 'pre-line' }}>
                {playlist.snippet.description.replace(/•/g, '\n •').replace(/,/g, ' , ')}

            </p>
            <section style={{ width: "100%", height: '25vw' }} />


        </div >
    );
};

export default YouTubePlaylistPage;
