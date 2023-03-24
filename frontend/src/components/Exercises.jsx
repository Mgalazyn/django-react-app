import { useEffect, useState } from 'react';

function Exercises() {
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [workoutExercises, setWorkoutExercises] = useState([]);
  const [exerciseDetailsArray, setExerciseDetailsArray] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/exercises/")
      .then((response) => response.json())
      .then((data) => {
        const videos = [];
        const exerciseDetailsArray = data.map((exercise) => {
          const exerciseDetails = {
            name: exercise.name,
            sets: exercise.sets,
            reps: exercise.reps,
            weight: exercise.weight,
            videos: exercise.videos.map((video) => video.video_file)
          };
          videos.push(...exerciseDetails.videos);
          return exerciseDetails;
        });
        setExerciseVideos(videos);
        setExerciseDetailsArray(exerciseDetailsArray);
      });
  }, []);

  const handleAddToWorkout = (exercise) => {
    const newExercise = {
      name: exercise.name,
      sets: exercise.sets,
      reps: exercise.reps,
      weight: exercise.weight,
    };
    setWorkoutExercises([...workoutExercises, newExercise]);
  };

  return (
    <div className="over-exercises">
      {exerciseVideos.length > 0 && (
        <div className="about-exercises">
          {exerciseDetailsArray.map((exercise, index) => (
            <div key={index}>
              <div className="exercise-video">
                <video width="200" controls>
                  <source src={exercise.videos[0]} type="video/mp4" />
                </video>
                <div className="exercise-details">
                  <p>Name: {exercise.name}</p>
                  <p>Sets: {exercise.sets}</p>
                  <p>Reps: {exercise.reps}</p>
                  <p>Weight: {exercise.weight}</p>
                </div>
                <div className="button-add">
                  <button className="add-exercise-btn" onClick={() => handleAddToWorkout(exercise)}>
                    Add To Workout
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="workout-list">
        {workoutExercises.map((exercise, index) => (
          <div key={index}>
            <p>Name: {exercise.name}</p>
            <p>Sets: {exercise.sets}</p>
            <p>Reps: {exercise.reps}</p>
            <p>Weight: {exercise.weight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Exercises;