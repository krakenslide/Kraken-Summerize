import React, { useEffect, useState } from "react";
import { IoIosLink } from "react-icons/io";
import { FaCheck, FaRegCopy, FaSearch } from "react-icons/fa";
import { useLazyGetSummaryQuery } from "../services/article.js";
import { FallingLines } from "react-loader-spinner";
import { ReactTyped } from "react-typed";

function Demo() {
  const [article, setArticle] = useState({ url: "", summary: "" });
  const [allArticles, setAllArticles] = useState([]);
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  const [copied, setCopied] = useState("");
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles"),
    );
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await getSummary({ articleUrl: article.url });
      if (data?.summary) {
        const newArticle = { ...article, summary: data.summary };
        const targetIndex = allArticles.findIndex(
          (obj) => obj.url === newArticle.url,
        );

        if (targetIndex !== -1) {
          allArticles[targetIndex] = newArticle;
          const [targetObj] = allArticles.splice(targetIndex, 1);
          allArticles.unshift(targetObj);
        } else {
          allArticles.unshift(newArticle);
        }

        setArticle(newArticle);
        setAllArticles(allArticles);
        localStorage.setItem("articles", JSON.stringify(allArticles));
      }
    } catch (error) {
      console.error("Error fetching summary:", error);
    }
  };

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <IoIosLink size={18} className="absolute left-0 ml-3" />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer"
          />
          <button type="submit" className="submit_btn">
            <FaSearch />
          </button>
        </form>
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
          {allArticles.reverse().map((item, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className="link_card"
            >
              <div className="copy_btn" onClick={() => handleCopy(item.url)}>
                {copied === item.url ? <FaCheck /> : <FaRegCopy />}
              </div>

              <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                {item.url}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <div>
            <FallingLines
              color="#db2777"
              width="100"
              visible={true}
              ariaLabel="falling-circles-loading"
            />
          </div>
        ) : error ? (
          <div>
            <p className="bg-gradient-to-l mb-2 from-pink-900 via-pink-700 to-pink-500 font-poppins font-extrabold text-center text-transparent bg-clip-text">
              <ReactTyped
                strings={["Something went wrong..!"]}
                typeSpeed={40}
              />
              <br />
              <span className="font-poppins font-normal text-pink-950">
                {error?.data?.error}
              </span>
            </p>
          </div>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-poppins font-bold text-black">
                Article{" "}
                <span className="bg-gradient-to-r from-pink-900 via-pink-700 to-pink-500 text-transparent bg-clip-text">
                  Summary
                </span>
              </h2>
              <div className="summary_box">
                <p className="font-poppins font-medium text-sm text-gray-700">
                  <ReactTyped strings={[article.summary]} />
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Demo;
