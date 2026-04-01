

import ProjectItem from "./ProjectItem";

export default function Blog() {
    const blog = [
        {
            "id": "1",
            "imageSrc": "/Images/Projectimages/image1.jpg",
            "author": "David Jones",
            "date": "May 1, 2025",
            "title": "Commercial Complex Development Project",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum rutrum urna non scelerisque. Fusce tincidunt viverra augue, semper consectetur risus consectetur ac.",
            "readMoreUrl": "#"
        },
        {
            "id": "2",
            "imageSrc": "/Images/Projectimages/image2.jpg",
            "author": "Vivek Jacob",
            "date": "April 15, 2025",
            "title": "Infrastructure Development Project",
            "description": "Nullam nec velit ac ex vestibulum rhoncus. Proin accumsan mauris et dui tristique, vitae lobortis est elementum.",
            "readMoreUrl": "#"
        },
        {
            "id": "3",
            "imageSrc": "/Images/Projectimages/image3.jpg",
            "author": "Emily Brown",
            "date": "February 28, 2025",
            "title": "Industrial Warehouse & Structural Build Project",
            "description": "Sed vitae lorem vitae libero commodo accumsan. Vestibulum nec risus in sapien rhoncus tincidunt.",
            "readMoreUrl": "#"
        },
        {
            "id": "4",
            "imageSrc": "/Images/BlogImages/image4.jpg",
            "author": "John Price",
            "date": "May 1, 2024",
            "title": "Benefits of hiring a construction firm.",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum rutrum urna non scelerisque. Fusce tincidunt viverra augue, semper consectetur risus consectetur ac.",
            "readMoreUrl": "#"
        },
        {
            "id": "5",
            "imageSrc": "/Images/BlogImages/image5.jpg",
            "author": "John McCtavish",
            "date": "April 15, 2012",
            "title": "Tips for successful commercial construction",
            "description": "Nullam nec velit ac ex vestibulum rhoncus. Proin accumsan mauris et dui tristique, vitae lobortis est elementum.",
            "readMoreUrl": "#"
        },
        {
            "id": "6",
            "imageSrc": "/Images/BlogImages/image6.jpg",
            "author": "Simon Riley",
            "date": "February 28, 2013",
            "title": "Top 10 suspension bridges in the world.",
            "description": "Sed vitae lorem vitae libero commodo accumsan. Vestibulum nec risus in sapien rhoncus tincidunt.",
            "readMoreUrl": "#"
        },

    ]
    return (
        <>
            <div className=" pt-30">
                <h5 className="text-center text-3xl md:text-4xl font-bold mb-4">
                    PROJECTS
                </h5>
                <div className="md:col-span-2">
                    <div className="flex flex-wrap justify-center gap-12">
                        {blog.map((element) => {
                            return (
                                <div className=" my-5" key={element.id}>
                                    <ProjectItem imageSrc={element.imageSrc} title={element.title} description={element.description.slice(0, 100)} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}
