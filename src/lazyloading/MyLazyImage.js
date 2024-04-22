import React from "react";
import LazyLoad from "react-lazyload";
function MyLazyImage({ src, alt }) {
    return (
        <>
            <div>
                <LazyLoad height={200} offset={100}>
                    <img src={src} alt={alt} />
                </LazyLoad>

            </div>
        </>
    )
}
export default MyLazyImage;