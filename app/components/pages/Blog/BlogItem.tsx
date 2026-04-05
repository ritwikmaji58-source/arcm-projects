import Image from "next/image"
import { User_Icon, Calender_Icon } from "../../Icons/OtherIcons";

interface BlogItemProps {
  imageSrc: string;
  author: string;
  blogdate: string;
  title: string;
  description: string
}

export default function BlogItem({imageSrc, author, blogdate,title, description}: BlogItemProps){
return(
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-5 overflow-hidden">
      <div className="">
        <Image className="transition-transform transform hover:scale-110" src={imageSrc} alt="" width={400} height={150} />
      </div>
      <div className="p-5">
        <div className="flex mb-3">
          <small className='flex mr-3'><User_Icon/>{author}</small>
          <small className='flex'><Calender_Icon/>{blogdate}</small>
        </div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}...</p>
        <a href="/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </a>
      </div>
    </div>
);
}