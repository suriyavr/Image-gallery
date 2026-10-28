function ImageCard({ imageUrl, title, description, time }) {
  return (
    <article className="image-card">
      <img src={imageUrl} alt={title} className="image-card__img" />

      <div className="image-card__body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      {time && (
        <div className="image-card__meta">
          <span className="image-card__time">{time}</span>
          <span className="image-card__star">★</span>
        </div>
      )}
    </article>
  );
}

export default ImageCard;