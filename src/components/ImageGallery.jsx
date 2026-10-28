import ImageCard from "./ImageCard";

function ImageGallery({ images }) {
  if (images.length === 0) {
    return <p className="no-results">No results found</p>;
  }

  return (
    <div className="gallery-grid">
      {images.map((img) => (
        // <ImageCard key={img.id} {...img} />
        <ImageCard imageUrl={img.imageUrl} title={img.title} description={img.description} time={img.time} />
      ))}
    </div>
  );
}

export default ImageGallery;