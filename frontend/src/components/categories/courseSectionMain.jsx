import React from 'react'
import Card from '../../components/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { scrollToHandler } from '../../store/scrollTo';
import { useSelector } from 'react-redux';

const CourseSectionMain = (props) => {
    const navigate = useNavigate();
    const [playlist, setPlaylist] = useState(null);
    const auth = useSelector(state => state.auth.isAuthenticated);

    useEffect(() => {
        const link = "https://www.googleapis.com/youtube/v3/playlists";
        const params = {
            part: "snippet",
            id: props.playlistid,
            key: process.env.REACT_APP_YT_API_KEY_1,
        };
        const send = async () => {
            try {
                const response = await axios.get(link, { params: params });
                setPlaylist(response.data.items[0]);
            } catch (error) {
                //console.log(error);
            }
        }
        send();

    }, []);
    const gotoplaylist = (playlistid) => {
        if (!auth) {
            alert('Please Login First to Continue');
            scrollToHandler('login', 100);
            return;
        }
        navigate(`/playlist/${playlistid}`);
        setTimeout(() => {
            scrollToHandler('playid', 100);
        }, 500)
    }

    return (
        <div id={props.id} onClick={() => { gotoplaylist(props.playlistid) }}>
            {playlist && <Card title={playlist.snippet.title} image={playlist.snippet.thumbnails.maxres.url || playlist.snippet.thumbnails.standard.url || playlist.snippet.thumbnails.high.url || playlist.snippet.thumbnails.medium.url || playlist.snippet.thumbnails.default.url} description={playlist.snippet.description} />}
        </div>
    )
};

export default CourseSectionMain;