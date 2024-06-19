import GitHubIcon from "@mui/icons-material/GitHub";
import { ReactTyped } from "react-typed";

function Hero() {
  return (
    <header className="w-full flex items-center justify-center flex-col">
      <nav className="flex justify-between w-full pt-3 mb-10 items-center flex-row">
        <div className="flex flex-row items-center gap-2">
          <span className="hidden sm:block xl:text-3xl md:text-3xl bg-gradient-to-r font-bold from-pink-900 via-pink-700 to-pink-500 bg-clip-text text-transparent">
            Standard Kraken Summerize
          </span>
          <span className=" flex flex-row block sm:hidden text-4xl bg-gradient-to-br font-extrabold from-pink-900 via-pink-700 via-pink-500 to-pink-200 bg-clip-text text-transparent gap-1">
            SKS
          </span>
        </div>
        <button
          className="black_btn flex flex-row gap-1 items-center"
          type="button"
          onClick={() =>
            window.open("https://github.com/krakenslide/Kraken-Summerize")
          }
        >
          <GitHubIcon />
          GitHub
        </button>
      </nav>

      <h1 className="head_text inline-block whitespace-pre-line">
        Summarize <br className="xl:hidden" />
        <ReactTyped
          strings={[
            "Article",
            "Website",
            "Documents",
            "Reports",
            "Presentations",
          ]}
          typeSpeed={100}
          backSpeed={100}
          loop
        />
        <br />
        with <br className="max-md:hidden" />
        <span className="bg-gradient-to-r from-pink-900 via-pink-700 to-pink-500 bg-clip-text text-transparent">
          OpenAI GPT-4
        </span>
      </h1>
      <h2 className="desc">It does what it says !</h2>
    </header>
  );
}

export default Hero;
