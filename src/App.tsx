import Features from "./components/landing-page/Features";
import Hero2 from "./components/landing-page/Hero";

function App() {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <Hero2 />
            <Features />
          </main>
        </div>
      </body>
    </html>
  );
}

export default App;
