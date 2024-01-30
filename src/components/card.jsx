import React from "react";
import apiConfig from '../api/apiConfig';

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
        <p>{movie.title}</p>
      </div>
      <div>
        <img
          src={
            apiConfig.w500Image(movie.poster_path || movie.backdrop_path)
          }
          alt={movie.title}
        />
      </div>
      <div>
        <span>{movie.type}</span>
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
};
export default MovieCard;
