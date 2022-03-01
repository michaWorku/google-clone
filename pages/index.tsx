import type { NextPage } from 'next'
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useCallback, useMemo } from "react";
//import { FunctionDelegate } from "function-delegate";

import Image from 'next/image'
import { BottomBar, TopBar } from '../components'
import SearchInput from '../components/SearchInput'

const Home: NextPage = () => {

  const router = useRouter();

  const onSearch = useCallback((query: string) => {
    router.push({
      pathname: "/search",
      query: {
        q: query,
        category: "all",
      },
    });
  }, []);

  // delegates the callback to the search input
  // to get the current 'query' when the search button is clicked
  // const onSearchDelegate = useMemo(
  //   () => new FunctionDelegate<() => string>(),
  //   []
  // );

  return (
    <main className="h-screen">
    <Head>
      <title>Google Search Clone</title>
    </Head>
    <div className="flex flex-col w-full h-full dark:bg-bgBlack">
      <TopBar />

      <div className="flex-1 flex flex-col justify-center items-center space-y-6 overflow-x-hidden">
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />

        <div className="flex flex-col space-y-6 w-full sm:w-3/4 lg:w-3/6 max-w-screen-sm  px-4">
          <SearchInput
            onSearch={onSearch}
            getQueryDelegate={()=>'todo'}//onSearchDelegate
          />
          <div className="flex flex-row justify-center gap-4 mx-4 md:mx-20">
            <button
              onClick={() => {
                // const query = onSearchDelegate.invoke();

                // if (query) {
                //   onSearch(query);
                // }
              }}
              className="flex-1 focus:outline-none dark:bg-yellow-400 dark:text-gray-800 bg-gray-50 text-sm text-gray-500 rounded px-4 py-2 border-2 border-transparent focus:border-gray-200"
            >
              Search
            </button>
            <button
              disabled={true}
              className="flex-1 focus:outline-none dark:bg-yellow-400 dark:text-gray-800 bg-gray-50 text-sm text-gray-500 rounded px-4 py-2 border-2 border-transparent focus:border-gray-200"
            >
              Feeling Lucky
            </button>
          </div>
        </div>
      </div>

      <BottomBar />
    </div>
  </main>
  )
}

export default Home
