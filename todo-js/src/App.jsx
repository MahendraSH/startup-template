import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import Navbar from "./components/navbar";
import Footer from "./components/ui/footer";

function App() {
  return (
    <div className=" bg-background text-foreground">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <main className=" flex justify-center items-center  min-h-screen"></main>

        <span className=" fixed bottom-6  right-5">
          <ModeToggle />
        </span>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
