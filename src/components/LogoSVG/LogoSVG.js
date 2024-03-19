import React from 'react';

const LogoSVG = ({size}) => (
    <svg viewBox={`0 0 1024 1024`} width={size} height={size}>
        <path fill={'url(#gradient)'} shapeRendering="geometricPrecision" d="M533.216 126.24h-447.2l43.936 154.24h403.264c20.224 0 39.616 8.128 53.92 22.624s22.336 34.112 22.336 54.592v77.216h-380.896c-126.24 0-228.576 103.616-228.576 231.424s102.336 231.424 228.576 231.424h304.64c126.208-0.096 228.48-103.648 228.576-231.424v-308.64c-0.096-127.776-102.368-231.328-228.576-231.424zM609.472 666.336c0 20.48-8.032 40.128-22.336 54.592s-33.696 22.624-53.92 22.624h-304.64c-28.128 1.408-54.72-12.96-69.184-37.408s-14.464-54.976 0-79.424c14.464-24.448 41.056-38.816 69.184-37.408h380.896v77.024zM979.872 434.88l44.128 154.24h-183.136v-154.24h138.976z"></path>
        <defs>
            <linearGradient id="gradient">
                <stop offset="0%" stopColor={'#facc15'}/>
                <stop offset="100%" stopColor={'#be185d'}/>
            </linearGradient>
        </defs>
    </svg>
);

export default LogoSVG;
