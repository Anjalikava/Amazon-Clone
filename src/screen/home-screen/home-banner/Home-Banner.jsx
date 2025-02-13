import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home-Banner.css';
import homeBannerItemProduct from '../../../products/Home-Banner-Product.json';

const bannerImages = [
    'https://m.media-amazon.com/images/I/71WanO2aWEL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg'
];

const HomeBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const bannerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true);
        }, 500);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % bannerImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleImageLoad = () => {
        setOverlayVisible(true);
        setTimeout(() => {
            setOverlayVisible(false);
        }, 2000);
    };

    // Function to handle "See More" click
    const handleSeeMore = (product) => {
        navigate('/home-details', { state: { product } });
    };

    return (
        <div className="homeBanner">
            <div ref={bannerRef} className="banner">
                {isVisible && (
                    <div>
                        <img
                            key={currentIndex}
                            className='homeBannerimg'
                            src={bannerImages[currentIndex]}
                            alt={`Banner ${currentIndex + 1}`}
                            onLoad={handleImageLoad}
                        />
                    </div>
                )}
            </div>

            <div className='pb-64 bg-[#EEEBEB]'>
                <div className={`bannerOverlay ${overlayVisible ? 'visible' : ''}`} >
                    <span className="homeBannerInfo">
                        You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.
                    </span>
                    <div className="homeBannerItemDiv">
                        {homeBannerItemProduct.product.map((item, ind) => (
                            <div key={ind}>
                                <div className="homeBannerItemDivCard">
                                    <div className="homeBannerItemDivCardTitle">{item.itemTitle}</div>
                                    <div className="imgHomeBannerItemDivCard">
                                        {item.imgs.map((it, index) => (
                                            <div key={index} className="imgBannerHomeDiv">
                                                <img className='imgBannerHomeDivImg' src={it.url} alt={it.name} />
                                                <div className="imgBannerImgName">{it.name}</div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Updated "See More" to navigate to details page */}
                                    <div className="seeMoreHomeBanner" onClick={() => handleSeeMore(item)}>
                                        See More
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
