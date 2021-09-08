import React from 'react';

const VIDEO_RATIO = 1.77;

interface IYoutubeEmbedProps {
    videoId: string;
    width?: number;
}

const YoutubeEmbed = ({ videoId, width = 370 }: IYoutubeEmbedProps) => {
    const url = `https://www.youtube.com/embed/${videoId}?rel=0`;
    const height = width / VIDEO_RATIO;
    return (
        <iframe
            width={width}
            height={height}
            src={url}
            title={'YouTube video player'}
            frameBorder={'0'}
            allow={
                'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            }
            allowFullScreen
        />
    );
};

export default YoutubeEmbed;
