import { useEffect, useState } from 'react';

function Exercises() {
    const [exerciseVideos, setExerciseVideos] = useState([]);
  
    useEffect(() => {
      fetch('http://127.0.0.1:8000/exercises/') 
        .then((response) => response.json())
        .then((data) => {
          const videos = [];
          data.forEach((exercise) => {
            exercise.videos.forEach((video) => {
              videos.push(video.video_file);
            });
          });
          setExerciseVideos(videos);
        }); 
    }, []);
  
    return (
      <div>
        {exerciseVideos.length > 0 &&
          <div>
            <h2>All Exercise Videos</h2>
            {exerciseVideos.map((videoUrl, index) => (
              <div key={index}>
                <video width="400" controls>
                  <source src={videoUrl} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        }
      </div>
    );
  }

export default Exercises;