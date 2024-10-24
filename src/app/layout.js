import "../globals.css";
import Header from "@/Components/layout_components/Header";
import Footer from "@/Components/layout_components/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* header-placeholder protoze header ma fixed pozici a posunulo by se to nahoru */}
        <div className="header-placeholder"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
