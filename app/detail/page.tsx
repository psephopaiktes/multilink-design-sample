import Link from "next/link";

export default function Component() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800">
      <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="flex flex-col items-center">
            <Link
              href="/"
              className="self-start mb-2 px-4 py-2 text-sm font-medium text-gray-900 bg-gray-200 rounded-lg dark:text-gray-100 dark:bg-gray-700"
            >
              <svg
                className=" w-5 h-5"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>
            </Link>
            <div className="w-24 h-24 mb-4">
              <img
                alt="Profile picture"
                className="rounded-full"
                height="96"
                src="https://pbs.twimg.com/profile_images/1476938674612805637/Z9-fGmey_400x400.jpg"
                style={{
                  aspectRatio: "96/96",
                  objectFit: "cover",
                }}
                width="96"
              />
            </div>
            <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900 dark:text-gray-100">
              John Doe
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
              Bio: A short description about the user goes here.
            </p>
            <div className="mt-2 flex justify-center space-x-2">
              <span className="px-2 py-1 text-sm text-white bg-blue-500 rounded-full">
                YouTuber
              </span>
              <span className="px-2 py-1 text-sm text-white bg-red-500 rounded-full">
                韓国
              </span>
            </div>
          </div>
          <nav className="mt-2">
            <ul className="flex flex-col items-center space-y-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              <li className="flex items-center space-x-2">
                <a aria-label="Facebook profile" href="#">
                  <svg
                    className=" w-5 h-5"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a aria-label="Twitter profile" href="#">
                  <svg
                    className=" w-5 h-5"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span>Twitter</span>
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a aria-label="Instagram profile" href="#">
                  <svg
                    className=" w-5 h-5"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="mt-4 text-center text-xl text-gray-700 dark:text-gray-300">
            依頼料:3000円
          </div>
          <div className="mt-4 flex justify-center">
            <Link
              href="#"
              aria-label="Request"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg dark:bg-blue-400"
              type="submit"
            >
              依頼する
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
