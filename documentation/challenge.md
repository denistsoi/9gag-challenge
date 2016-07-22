# 9GAG Web offline coding test
Requirements

Create a web application showing a list of posts from 9gag instagram account
- Single page application (SPA), all operations should be performed using AJAX only
- It should be responsive and have a smooth scrolling experience
- Able to select sorting descendingly by creation time, like count or comment count
- Show 10 posts at a time and support infinite scrolling
- Each post should display the following meta:
­­  - Media with both image and video support
­­  - Support play video inline
­­  - Caption with clickable @user/#hashtag to open corresponding instagram official web page
­­  - Creation time relative from now (ex. 4h, 3d), click to open instagram official post page
­­  - Like and comment count

Notes
­-  Please finish this test within 1 week after the offline testing mail sent
­-  Please implement this test by using MVC framework
­-  Prepare your dataset with 200 posts from 9gag instagram account using Instagram API
­-  Use ONLY​ redis (NoSQL storage) for persistence
­-  Design your data structure such that you can use redis to perform sorting and pagination
­-  Consider the compatibility on multiple browsers including mobile browsers
­-  Consider how to make the best initial loading speed
­-  Consider how to make the listing scrolling experience better

Deliverables
­- Program source code, in any programming language
- Document the data structure of your dataset
- Provide detail setup instructions, or a publicly accessible URL

References
­- http://redis.io
­- https://instagram.com/developer
­- https://instagram.com/9gag