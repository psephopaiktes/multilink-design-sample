import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col h-screen">
      <header className="px-4 py-2 border-b bg-white dark:bg-gray-800 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
          マルチリンク
        </h1>
        <div className="flex space-x-2">
          <Link
            href="#"
            className="border-gray-700 text-gray-700 dark:border-gray-300 dark:text-gray-300"
          >
            新規作成
          </Link>
          <Link
            href="#"
            className="bg-gray-700 text-white dark:bg-gray-300 dark:text-gray-900"
          >
            ログイン
          </Link>
        </div>
      </header>

      <main className="flex-grow overflow-y-auto">
        <ul className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <li className="rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-lg">
            <Link href="detail">
              <img
                alt="Card Image"
                height="200"
                src="https://pbs.twimg.com/profile_images/1476938674612805637/Z9-fGmey_400x400.jpg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <div className="p-4">
                <h2 className="font-semibold text-gray-900 dark:text-white text-lg">
                  Card Title
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  Card content...
                </p>
              </div>
            </Link>
          </li>
        </ul>
      </main>

      <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 border-t">
        <Link className="flex flex-col items-center" href="#">
          <svg
            className=" h-5 w-5 text-gray-900 dark:text-gray-100"
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
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
          <span className="text-xs text-gray-600 dark:text-gray-300">HOME</span>
        </Link>
        <Link className="flex flex-col items-center" href="#">
          <svg
            className=" h-5 w-5 text-gray-900 dark:text-gray-100"
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
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
          <span className="text-xs text-gray-600 dark:text-gray-300">
            Notification
          </span>
        </Link>
        <Link className="flex flex-col items-center" href="#">
          <svg
            className=" h-5 w-5 text-gray-900 dark:text-gray-100"
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
            <rect height="16" rx="2" width="20" x="2" y="4" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span className="text-xs text-gray-600 dark:text-gray-300">
            Message
          </span>
        </Link>
        <Link className="flex flex-col items-center" href="#">
          <svg
            className=" h-5 w-5 text-gray-900 dark:text-gray-100"
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
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          <span className="text-xs text-gray-600 dark:text-gray-300">
            My Page
          </span>
        </Link>
      </nav>
    </div>
  );
}
