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
              ヒカキン
            </h2>
            <p className="mt-1 text-center text-sm text-gray-600 dark:text-gray-400">
              @hikakin
            </p>
            <ul className="mt-2 flex justify-center space-x-1">
              <li className="px-2 py-1 text-xs rounded-full bg-gray-400 text-white dark:bg-gray-300 dark:text-gray-900">
                YouTuber
              </li>
              <li className="px-2 py-1 text-xs rounded-full bg-gray-400 text-white dark:bg-gray-300 dark:text-gray-900">
                韓国
              </li>
              <li className="px-2 py-1 text-xs rounded-full bg-gray-400 text-white dark:bg-gray-300 dark:text-gray-900">
                美容
              </li>
            </ul>
            <p className="mt-3 text-center text-sm text-gray-800 dark:text-gray-200">
              登録ありがとうございます。 ◆プロフィール◆
              YouTubeにてHIKAKIN、HikakinTV、HikakinGames、HikakinBlogと
              ４つのチャンネルを運営し、動画の総アクセス数は180億回を突破、
              チャンネル登録者数は計2000万人以上、YouTubeタレント事務所uuum株式会社ファウンダー兼最高顧問。
            </p>
          </div>
          <nav className="mt-2">
            <ul>
              <li>
                <a
                  href="#"
                  className="flex mt-1 bg-gray-200 dark:bg-gray-900 p-2 rounded mx-2"
                >
                  <img
                    className="mr-2 rounded"
                    src="http://www.google.com/s2/favicons?domain=x.com"
                    width="24"
                    height="24"
                    alt="X"
                  />
                  Twitter: 3,000人
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex mt-1 bg-gray-200 dark:bg-gray-900 p-2 rounded mx-2"
                >
                  <img
                    className="mr-2 rounded"
                    src="http://www.google.com/s2/favicons?domain=youtube.com"
                    width="24"
                    height="24"
                    alt="youtube"
                  />
                  YouTube: 2,000人
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex mt-1 bg-gray-200 dark:bg-gray-900 p-2 rounded mx-2"
                >
                  <img
                    className="mr-2 rounded"
                    src="http://www.google.com/s2/favicons?domain=instagram.com"
                    width="24"
                    height="24"
                    alt="instagram"
                  />
                  Instagram: 5,000人
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex mt-1 bg-gray-200 dark:bg-gray-900 p-2 rounded mx-2"
                >
                  <img
                    className="mr-2 rounded"
                    src="http://www.google.com/s2/favicons?domain=tiktok.com"
                    width="24"
                    height="24"
                    alt="tiktok"
                  />
                  TikTok: 500人
                </a>
              </li>
            </ul>
          </nav>
          <div className="mt-4 text-center text-xl text-gray-700 dark:text-gray-300">
            依頼料: 3000円
          </div>
          <div className="mt-4 flex justify-center">
            <Link
              href="#"
              className="px-6 py-2 text-md font-medium text-white bg-gray-700 rounded-lg dark:bg-gray-300 dark:text-gray-900"
            >
              依頼する
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
