import React from 'react'
import Card from '../../components/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CourseSectionMain = (props) => {
    const [playlist, setPlaylist] = useState(null);
    // console.log(process.env);

    useEffect(() => {
        console.log(process.env.REACT_APP_YT_API_KEY_1)
        const link = "https://www.googleapis.com/youtube/v3/playlists";
        const params = {
            part: "snippet",
            id: props.playlistid,
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

    return (
        <div id={props.id}>
            {playlist && <Card title={playlist.snippet.title} image={playlist.snippet.thumbnails.maxres.url || playlist.snippet.thumbnails.standard.url || playlist.snippet.thumbnails.high.url || playlist.snippet.thumbnails.medium.url || playlist.snippet.thumbnails.default.url} description={playlist.snippet.description} />}
        </div>
    )
};

export default CourseSectionMain;