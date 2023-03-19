import ShapeImg from "./images/shape.png";
import WorkoutBackgroundImg from "./images/withoutbackground-work.png";

 function Workout() {
    return (
        <>
        <div className="over-workout">
            <div className="about-workout">
                <img src={ShapeImg} alt='shape'/>
                <img src={WorkoutBackgroundImg} alt='workoutback'/>
            </div>
            <div className="text-block-workout">
                    <h1>Take Your Workouts To Another Level </h1>
                    <p>We will help you develop your strenght, stamina and power to maximum size, we will help you
                        become more all-around athelete. 
                    <div className="button-workout">
                        <a href="/login" class="join-button1">Work in</a>
                    </div>
                    </p>
            </div>
            
        </div>
        </>
    )
}

export default Workout;