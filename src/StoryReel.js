import React from 'react'
import './StoryReel.css'
import Story from './Story'
function StoryReel() {
    return (
        <div className="storyReel">
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}
            {/* Story */}

            <Story
                image="https://d.newsweek.com/en/full/902921/4-26-transforming-robot.jpg"
                profileSrc="https://d.newsweek.com/en/full/902921/4-26-transforming-robot.jpg"
                title="Robin"
            />
            <Story
                image="https://pngimg.com/uploads/robot/robot_PNG67.png"
                profileSrc="https://pngimg.com/uploads/robot/robot_PNG67.png"
                title="Chili"
            />
               <Story
                image="https://www.quizony.com/robot-name-generator/imageForSharing.jpg"
                profileSrc="https://www.quizony.com/robot-name-generator/imageForSharing.jpg"
                title="Zhurong"
            />
               <Story
                image="http://www.jpvisitor.com/images/content/20171017/73aeceb5f17ff7b7.png"
                profileSrc="http://www.jpvisitor.com/images/content/20171017/73aeceb5f17ff7b7.png"
                title="Asimo"
            />
               <Story
                image="http://www.adweek.com/wp-content/uploads/files/blogs/pepper_robot_hed_2016.jpg"
                profileSrc="http://www.adweek.com/wp-content/uploads/files/blogs/pepper_robot_hed_2016.jpg"
                title="Pepper"
            />
        </div>
    )
}

export default StoryReel
