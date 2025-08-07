import  { useEffect, useState, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogById } from '../../services/blog';


import './BlogDetails.css';

const LightGallery = lazy(() => import('lightgallery/react'));
const lgZoom = lazy(() => import('lightgallery/plugins/zoom'));
const lgThumbnail = lazy(() => import('lightgallery/plugins/thumbnail'));

// Importer CSS seulement au moment du rendu
const loadLightGalleryCSS = () => {
  import('lightgallery/css/lightgallery.css');
  import('lightgallery/css/lg-zoom.css');
  import('lightgallery/css/lg-thumbnail.css');
};

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [shouldLoadGallery, setShouldLoadGallery] = useState(false);

  useEffect(() => {
    getBlogById(id)
      .then((res) => {
        setBlog(res.data.data);

        if (res.data.data.image?.length > 1) {
          setShouldLoadGallery(true);
          loadLightGalleryCSS(); // Charger CSS dynamiquement
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  const images = blog?.image || [];
  const imageUrls = images.map((img) => `http://localhost:1337${img.url}`);

  return (
    <main className="blog-details">
      <h1>Blog</h1>

      {imageUrls.length > 0 && (
        <div className="gallery">
          <div className="big-image">
            <img src={imageUrls[0]} alt="Main" />
          </div>

          {shouldLoadGallery && (
            <div className="small-images">
              <Suspense fallback={<p>Chargement de la galerie...</p>}>
                <LightGallery
                  plugins={[lgZoom, lgThumbnail]}
                  speed={500}
                  style={{ display: 'flex' }}
                >
                  {imageUrls.slice(1, 5).map((url, index) => {
                    const isMoreBox = index === 3 && imageUrls.length > 5;
                    return isMoreBox ? (
                      <a
                        key={`thumb-${index}`}
                        href={imageUrls[4]}
                        style={{
                          background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imageUrls[4]})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          textDecoration: 'none',
                          color: 'white',
                          borderRadius: '4px',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                        }}
                        className="containe-more"
                      >
                        <span className="span">+{imageUrls.length - 5} More</span>
                      </a>
                    ) : (
                      <a key={`thumb-${index}`} href={url}>
                        <img src={url} alt={`Thumb-${index}`} />
                      </a>
                    );
                  })}

                  {imageUrls.slice(5).map((url, index) => (
                    <a key={`hidden-${index}`} href={url} style={{ display: 'none' }}>
                      <img src={url} alt={`Hidden-${index}`} />
                    </a>
                  ))}
                </LightGallery>
              </Suspense>
            </div>
          )}
        </div>
      )}

      <h2>{blog?.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: blog?.content }} />
    </main>
  );
};

export default BlogDetails;
