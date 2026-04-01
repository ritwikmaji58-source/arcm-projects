import BlogItem from "./BlogItem";

export default function Blog() {
    const blog = [
        {
            "id": "1",
            "imageSrc": "/images/BlogImages/image1.jpg",
            "author": "David Jones",
            "date": "May 1, 2025",
            "title": "Top construction trends in 2025",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum rutrum urna non scelerisque. Fusce tincidunt viverra augue, semper consectetur risus consectetur ac.",
            "readMoreUrl": "#"
        },
        {
            "id": "2",
            "imageSrc": "/images/BlogImages/image2.jpg",
            "author": "Vivek Jacob",
            "date": "April 15, 2025",
            "title": "The future of AI in Construction",
            "description": "Nullam nec velit ac ex vestibulum rhoncus. Proin accumsan mauris et dui tristique, vitae lobortis est elementum.",
            "readMoreUrl": "#"
        },
        {
            "id": "3",
            "imageSrc": "/images/BlogImages/image3.jpg",
            "author": "Emily Brown",
            "date": "February 28, 2025",
            "title": "Does remote work have a place in construction?",
            "description": "Sed vitae lorem vitae libero commodo accumsan. Vestibulum nec risus in sapien rhoncus tincidunt.",
            "readMoreUrl": "#"
        },
        {
            "id": "4",
            "imageSrc": "/images/BlogImages/image4.jpg",
            "author": "John Price",
            "date": "May 1, 2024",
            "title": "Benefits of hiring a construction firm.",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum rutrum urna non scelerisque. Fusce tincidunt viverra augue, semper consectetur risus consectetur ac.",
            "readMoreUrl": "#"
        },
        {
            "id": "5",
            "imageSrc": "/images/BlogImages/image5.jpg",
            "author": "John McCtavish",
            "date": "April 15, 2012",
            "title": "Tips for successful commercial construction",
            "description": "Nullam nec velit ac ex vestibulum rhoncus. Proin accumsan mauris et dui tristique, vitae lobortis est elementum.",
            "readMoreUrl": "#"
        },
        {
            "id": "6",
            "imageSrc": "/images/BlogImages/image6.jpg",
            "author": "Simon Riley",
            "date": "February 28, 2013",
            "title": "Top 10 suspension bridges in the world.",
            "description": "Sed vitae lorem vitae libero commodo accumsan. Vestibulum nec risus in sapien rhoncus tincidunt.",
            "readMoreUrl": "#"
        },
        {
            "id": "7",
            "imageSrc": "/images/BlogImages/image7.jpg",
            "author": "Kate Laswell",
            "date": "May 12, 2031",
            "title": "How to build a in 2024",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum rutrum urna non scelerisque. Fusce tincidunt viverra augue, semper consectetur risus consectetur ac.",
            "readMoreUrl": "#"
        }
    ]
    return (
        <>
            <div className="pt-30">
                <h5 className="text-center text-3xl md:text-4xl font-bold mb-4">
                    BLOG
                </h5>
                <div className="md:col-span-2">
                    <div className="flex flex-wrap justify-center gap-12">
                        {blog.map((element) => {
                            return (
                                <div className=" my-5" key={element.id}>
                                    <BlogItem imageSrc={element.imageSrc} author={element.author} blogdate={element.date} title={element.title} description={element.description.slice(0, 100)} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}