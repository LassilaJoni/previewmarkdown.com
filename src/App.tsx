import Features from "./components/landing-page/Features";
import Hero from "./components/landing-page/Hero";

function App() {
  return (
    <html>
      <body>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <Hero />
            <Features />
          </main>
        </div>
      </body>
    </html>
  );
}

export default App;
