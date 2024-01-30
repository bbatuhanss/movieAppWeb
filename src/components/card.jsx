import React from "react";

const MovieCard = ({ movie }) => {


   const  imageUpload = (image) => {
      // Görsel işleme işlemleri burada yapılabilir
      // Örnek: Kontrast artırma
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = image.width;
      canvas.height = image.height;
      
      // Kontrast artırma
      context.filter = 'contrast(150%)';
      context.drawImage(image, 0, 0);
    
      // İşlenmiş görseli ekrana çizme
      document.body.appendChild(canvas);
    };
  

  return (
    <div className="movie">
      <div>
        <p>{movie.Title}</p>
      </div>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};
export default MovieCard;
