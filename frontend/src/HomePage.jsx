import React from "react";
import NavBar from "./NavBar";
import { Link } from 'react-router-dom'

const blog = {
    id: 1,
    category: "Technology",
    image:
        "images.jpg",
    author: "Sarah Johnson",
    time: "2 hours ago",
    readTime: "5 min read",
    title: "Getting Started with React and Tailwind CSS",
    description:
        "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup...",
}

const Home = () => {
    const posts = [
        {
            id: 1,
            category: "Technology",
            image:
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop",
            author_name: "Sarah Johnson",
            author_image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",

            title: "Getting Started with React and Tailwind CSS",
            description:
                "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup...",
        }, {
            id: 2,
            category: "Technology",
            image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop",
            author_name: "Micheal Chan",
            author_image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",

            title: "The Future of Web Development",
            description:
                "Exploring the latest trends and technologies that are shaping the future of web development. From AI integration to new frameworks, discover what's...",
        }, {
            id: 3,
            category: "Technology",
            image:
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
            author_name: "Emily rodriguez",
            author_image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
            title: "Mindful Living in a Digital Age",
            description:
                "In our hyper-connected world, finding balance and mindfulness has become more important than ever. Discover practical strategies for maintaining mental...",
        }, {
            id: 4,
            category: "Technology",
            image:
                "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=200&fit=crop",
            author_name: "David kim",
            author_image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",

            title: "Building Scalable Node.js Applications",
            description:
                "Learn the best practices for building robust and scalable Node.js applications. This guide covers architecture patterns, performance optimization, and...",
        }, {
            id: 5,
            category: "Technology",
            image:
                "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop",
            author_name: "Lisa park",
            author_image:
                "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=40&h=40&fit=crop&crop=face",

            title: "Design Systems: A Complete Guide",
            description:
                "Creating consistent and scalable design systems for modern applications. Learn how to build component libraries, establish design tokens, and maintainreating consistent and scalable design systems for modern applications. Learn how to build component libraries, establish design tokens, and maintain...",
        }, {
            id: 6,
            category: "Technology",
            image:
                "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=200&fit=crop",
            author_name: "Alex Thomspon",

            author_image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",

            title: "Introduction to Machine Learning",
            description:
                "A beginner-friendly introduction to machine learning concepts and applications. Explore different algorithms, understand data preprocessing, and learn...",
        },

    ]
    return (
        <div className="flex items-center flex-col justify-center mt-10 gap-5">
            <NavBar />
            <h1 className="text-4xl text-black font-bold">Welcome to BlogVerse</h1>
            <p className="text-3xl text-gray-600 text-center font-semibold">
                Discover amazing stories, insights, and ideas from our community of <br />
                writers. <span className="text-blue-700">Sign in</span> to create your own posts and save your favorites.
            </p>
            <div className=" px-5 py-6 flex gap-10 flex-wrap p">
                {
                    posts.map((blog) => {
                        return (
                            (
                                <div className="mt-8 w-[600px] max-w-md border p-6">
                                    <div>
                                        <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-md mb-4" />
                                        <div className="flex gap-4"><img src={blog.author_image} alt="" className="w-[40px] rounded-2xl" /><div className="flex flex-col">
                                            <p>{blog.author_name || "Manoj"}</p>
                                            <p>2 min ago</p></div>
                                        </div>

                                    </div>
                                    <span className="text-sm text-purple-600 font-semibold">{blog.category}</span>
                                    <h2 className="text-xl font-bold mt-2">{blog.title}</h2>
                                    <p className="text-gray-600 mt-2">{blog.description}</p>
                                    <div className="flex items-center justify-between mt-4">
                                        <span className="text-sm text-gray-500">{blog.author}</span>
                                        <span className="text-sm text-gray-400">{blog.time} • {blog.readTime}</span>
                                    </div>
                                </div>
                            )
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home