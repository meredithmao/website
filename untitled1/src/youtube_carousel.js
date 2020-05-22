import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import Carousel, {Props} from './components/carousel';

const YoutubeSlide = ({ url, isSelected }: { url: string; isSelected?: boolean }) => (
    <ReactPlayer width="70%" url={url} playing={isSelected} />
);

export const youtubeAutoplayWithCustomThumbs = () => {
    const customRenderItem = (item, props) => <item.type {...item.props} {...props} />;

    const getVideoThumb = (videoId) => `https://img.youtube.com/vi/${videoId}/default.jpg`;

    const getVideoId = (url) => url.substr('https://www.youtube.com/embed/'.length, url.length);

    const customRenderThumb = (children) =>
        children.map((item) => {
            const videoId = getVideoId(item.props.url);
            return <img src={getVideoThumb(videoId)} alt="Thumbnail" />;
        });

    return (
        <Carousel renderItem={customRenderItem} renderThumbs={customRenderThumb}>
            <YoutubeSlide key="youtube-1" url="https://www.youtube.com/watch?v=GuFTwqeYCCg" />
            <YoutubeSlide key="youtube-2" url="https://www.youtube.com/watch?v=swX5H27PQTA&t=1230s" />
            <YoutubeSlide key="youtube-3" url="https://www.youtube.com/watch?v=pV-Fi95A1AY" />
            <YoutubeSlide key="youtube-4" url="https://www.youtube.com/watch?v=e3QwrMyUndA" />
        </Carousel>
    );
};