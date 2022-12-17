import React from 'react';
import {Route, Routes} from "react-router";
import Main, {BlogPost} from "./blog/Blog";
const App: React.FC = () => {

    return (
                <Routes>
                    <Route path="/" element={<Main posts={new Array<BlogPost>({
                            author: "Me",
                            content: "Stuff",
                            date: "Today",
                            title: "Jacy's Blog Post 1 "
                        },
                        {author: "Jacy", content: "Stuff", date: "Today", title: "Jacy's Blog Post 2 "},
                        {author: "Jacy", content: "Stuff", date: "Today", title: "Jacy's Blog Post 3 "},
                        {author: "Jacy", content: "Stuff", date: "Today", title: "Jacy's Blog Post 4 "},
                        {author: "Jacy", content: "Stuff", date: "Today", title: "Jacy's Blog Post 5 "},
                        {author: "Jacy", content: "Stuff", date: "Today", title: "Jacy's Blog Post 6 "})}/>}/>
                </Routes>
    );
}

export default App;

