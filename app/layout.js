export const metadata = {
  title:{
    template:"%s | Technical Agency",
    default:"Technical Agency",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header style={{ backgroundColor: "#f0f0f0", padding: "1rem" }}>Header</header>
      <body>{children}</body>
      <footer style={{ backgroundColor: "#f0f0f0", padding: "1rem" }}>Footer</footer>
    </html>
  );
}
