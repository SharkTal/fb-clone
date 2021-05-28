import React from 'react'
import './Feed.css'

import StoryReel from './StoryReel'
import MessageSender from './MessageSender';
import Post from './Post';
function Feed() {
    return (
        <div className="feed">
            {/* StoryReel */}
            <StoryReel />
            {/* MessageSender */}
            <MessageSender />
            {/*  */}
            <Post
                profilePic="http://cdn.chatsports.com/thumbnails/5393-72752-original.jpeg"
                message="It works"
                timestamp="This is timestamp"
                username="James"
                image="https://www.blackpast.org/wp-content/uploads/prodimages/files/blackpast_images/LeBron_James_aiming_basketball_Cleveland_Cavaliers_vs_Washington_Wizards_Verizon_Center_Washington_DC_November_21_2014.jpg"
            />
             <Post
                profilePic="https://th.bing.com/th/id/R4db772385eb7d87fc794927a1c30e5ba?rik=dzpIPA8CTbbX3A&pid=ImgRaw"
                message="It works"
                timestamp="This is timestamp"
                username="James"
                
            />
            
            <Post />
        </div>
    )
}

export default Feed
